using AutoMapper;
using QAirlines.API.Mapper;
using QAirlines.Models;
using QAirlines.Models.Data_Transfer_Objects;
using QAirlines.Models.Domain_Objects;
using QAirlines.Models.Enums;
using QAirlines.Models.Request;
using QAirlines.Models.Response;
using QAirlines.Models.Summary;
using QAirlines.UnitOfWorks;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace QAirlines.API.Services
{
    public class TicketService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly MappingFunctions _mappingFunctions;
        private readonly RandomStringGenerator _randomStringGenerator;

        public TicketService(IUnitOfWork unitOfWork, MappingFunctions mappingFunctions, RandomStringGenerator randomStringGenerator, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mappingFunctions = mappingFunctions;
            _randomStringGenerator = randomStringGenerator;
            _mapper = mapper;
        }

        public int NoOfBusinessSeat(int NoOfSeats)
        {
            int bsnSeats = 0;

            if (NoOfSeats < 200)
            {
                bsnSeats = 36;
            }
            if (NoOfSeats < 300 && NoOfSeats > 200)
            {
                bsnSeats = 48;
            }
            if (NoOfSeats < 400 && NoOfSeats > 300)
            {
                bsnSeats = 60;
            }
            if (NoOfSeats < 500 && NoOfSeats > 400)
            {
                bsnSeats = 72;
            }

            return bsnSeats;
        }

        public (int, string) GetSeatPosition(int NoOfBusinessSeats, int NoOfEconomySeats, int RemainingBsnSeats, int RemainingEcoSeats, SeatClass seatClass)
        {
            int seatsPerRow = 6;
            int seatIndex;

            if (seatClass == SeatClass.Business)
            {
                seatIndex = NoOfBusinessSeats - RemainingBsnSeats;
            }
            else
            {
                seatIndex = NoOfBusinessSeats + (NoOfEconomySeats - RemainingEcoSeats);
            }

            int logicalRowNumber = (seatIndex / seatsPerRow) + 1;
            int actualRowNumber = logicalRowNumber >= 13 ? logicalRowNumber + 1 : logicalRowNumber;

            string[] seatLetters = { "A", "B", "C", "D", "E", "F" };
            string seatLetter = seatLetters[seatIndex % seatsPerRow];

            string seatPosition = $"{actualRowNumber}{seatLetter}";

            return (seatIndex + 1, seatPosition);
        }


        public async Task<AddTicketResponse> AddTickets(AddTicketRequest request)
        {
            var flight = await _unitOfWork.Flights.GetByIdAsync(request.FlightId);
            var flightRoute = _unitOfWork.FlightRoutes.GetById(flight.FlightRouteId);

            var aircraft = _unitOfWork.Aircrafts.GetById(flight.AircraftId);
            var aircraftDTO = _mapper.Map<AircraftDTO>(aircraft);

            var ticketResponses = new List<TicketSummary>();
            

            var fromAirport = _mappingFunctions.AirportMapper(_unitOfWork.Airports.GetByIATA(flightRoute.FromAirportIATA));
            var toAirport = _mappingFunctions.AirportMapper(_unitOfWork.Airports.GetByIATA(flightRoute.ToAirportIATA));

            int noOfBusinessSeats = NoOfBusinessSeat(aircraft.NoOfSeats);
            int noOfEconomySeats = aircraft.NoOfSeats - noOfBusinessSeats;

            var flightSummary = new FlightSummary
            {
                Id = flight.Id,
                Aircraft = aircraftDTO,
                FromAirport = fromAirport,
                ToAirport = toAirport,
                BoardingTime = flight.BoardingTime,
                DepartureTime = flight.DepartureTime,
                ArrivalTime = flight.ArrivalTime,
                Status = flight.Status,
                BoardingGate = flight.BoardingGate,
            };

            foreach(var ticket in request.Tickets)
            {
                int remainingBsnSeats = flight.RemainingBsnSeats;
                int remainingEcoSeats = flight.RemainingEcoSeats;
                if (ticket.Class == SeatClass.Economy)
                {
                    if (remainingEcoSeats > 0)
                    {
                        var position = GetSeatPosition(noOfBusinessSeats, noOfEconomySeats, remainingBsnSeats, remainingEcoSeats, ticket.Class);

                        int seatNumber = position.Item1;
                        string seatPosition = position.Item2;

                        var seat = await _unitOfWork.Seats.GetByPosition(aircraft.Id, seatNumber);

                        var ticketResponse = new TicketSummary
                        {
                            SeatId = seat.Id,
                            SeatPosition = seatPosition,
                            PassengerTitle = ticket.PassengerTitle,
                            FirstName = ticket.FirstName,
                            LastName = ticket.LastName,
                            PassengerDOB = ticket.PassengerDOB,
                            Status = TicketStatus.Active,
                            Class = ticket.Class,
                            ContactEmail = ticket.ContactEmail,
                            PhoneNumber = ticket.PhoneNumber,
                        };

                        ticketResponses.Add(ticketResponse);
                        flight.RemainingEcoSeats--;
                        seat.IsAvaiable = false;
                    } else
                    {
                        return new AddTicketResponse
                        {
                            IsSuccess = false,
                            Message = "There are no Economy seats left.",
                            FlightInfo = flightSummary
                        };
                    }
                } 
                else if (ticket.Class == SeatClass.Business)
                {
                    if (flight.RemainingEcoSeats > 0)
                    {
                        var position = GetSeatPosition(noOfBusinessSeats, noOfEconomySeats, remainingBsnSeats, remainingEcoSeats, ticket.Class);

                        int seatNumber = position.Item1;
                        string seatPosition = position.Item2;

                        var seat = await _unitOfWork.Seats.GetByPosition(aircraft.Id, seatNumber);

                        var ticketResponse = new TicketSummary
                        {
                            SeatId = seat.Id,
                            SeatPosition = seatPosition,
                            PassengerTitle = ticket.PassengerTitle,
                            FirstName = ticket.FirstName,
                            LastName = ticket.LastName,
                            PassengerDOB = ticket.PassengerDOB,
                            Status = TicketStatus.Active,
                            Class = ticket.Class,
                            ContactEmail = ticket.ContactEmail,
                            PhoneNumber = ticket.PhoneNumber,
                        };

                        ticketResponses.Add(ticketResponse);
                        flight.RemainingBsnSeats--;
                        seat.IsAvaiable = false;
                    }
                    else
                    {
                        return new AddTicketResponse
                        {
                            IsSuccess = false,
                            Message = "There are no Business seats left.",
                            FlightInfo = flightSummary
                        };
                    }
                }
            }

            string reservationCode = _randomStringGenerator.GenerateRandomString();

            while (_unitOfWork.Reservations.IsCodeDuplicated(reservationCode))
            {
                reservationCode = _randomStringGenerator.GenerateRandomString();
            }

            var reservation = new Reservation
            {
                ReservationCode = reservationCode,
            };
            _unitOfWork.Reservations.Add(reservation);
            _unitOfWork.Commit();

            return new AddTicketResponse
            {
                IsSuccess = true,
                Message = "Tickets generated successfully.",
                FlightInfo = flightSummary,
                ReservationCode = reservationCode,
                UserId = request.BookerId != null ? request.BookerId : null,
                TicketSummaries = ticketResponses
            };
        }
    }
}
