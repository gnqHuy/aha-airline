using QAirlines.Models.Data_Transfer_Objects;
using QAirlines.Models;
using QAirlines.UnitOfWorks;
using AutoMapper;
using QAirlines.Models.Summary;
using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;
using QAirlines.Models.User;
using System.Threading.Tasks;

namespace QAirlines.API.Mapper
{
    public class MappingFunctions
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        private readonly UserManager<ApplicationUser> _userManager;

        public MappingFunctions(IUnitOfWork unitOfWork, IMapper mapper, UserManager<ApplicationUser> userManager)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _userManager = userManager;
        }
        public AirportDTO AirportMapper(Airport airport)
        {
            var city = _unitOfWork.Cities.GetById(airport.CityId);
            return new AirportDTO
            {
                IATA = airport.IATA,
                Name = airport.Name,
                City = _mapper.Map<CityDTO>(city),
            };
        }

        public async Task<AirportDTO> AirportMapperAsync(Airport airport)
        {
            var city = await _unitOfWork.Cities.GetByIdAsync(airport.CityId);
            return new AirportDTO
            {
                IATA = airport.IATA,
                Name = airport.Name,
                City = _mapper.Map<CityDTO>(city),
            };
        }

        public FlightRouteDTO FlightRouteMapper(FlightRoute flightRoute)
        {
            var fromAirport = _unitOfWork.Airports.GetByIATA(flightRoute.FromAirportIATA);
            var toAirport = _unitOfWork.Airports.GetByIATA(flightRoute.ToAirportIATA);
            var fromAirportDTO = AirportMapper(fromAirport);
            var toAirportDTO = AirportMapper(toAirport);

            return new FlightRouteDTO
            {
                Id = flightRoute.Id,
                FromAirportIATA = flightRoute.FromAirportIATA,
                ToAirportIATA = flightRoute.ToAirportIATA,
                FromAirport = fromAirportDTO,
                ToAirport = toAirportDTO,
                NoOfFlights = flightRoute.NoOfFlights,
                Distance = flightRoute.Distance,
            };
        }

        public AircraftDTO AircraftMapper(Aircraft aircraft)
        {
            return _mapper.Map<AircraftDTO>(aircraft);
        }

        public FlightDTO FlightMapper(Flight flight)
        {
            var aircraft = _unitOfWork.Aircrafts.GetById(flight.AircraftId);
            var aircraftDTO = _mapper.Map<AircraftDTO>(aircraft);
            var flightRoute = _unitOfWork.FlightRoutes.GetById(flight.FlightRouteId);
            var flightRouteDTO = FlightRouteMapper(flightRoute);

            return new FlightDTO
            {
                Id = flight.Id,
                Aircraft = aircraftDTO,
                FlightRoute = flightRouteDTO,
                BoardingTime = flight.BoardingTime,
                DepartureTime = flight.DepartureTime,
                ArrivalTime = flight.ArrivalTime,
                BoardingGate = flight.BoardingGate,
                EconomyPrice = flight.EconomyPrice,
                BusinessPrice = flight.BusinessPrice,
                Status = flight.Status
            };
        }

        public async Task<TicketDTO> TicketMapper(Ticket ticket)
        {
            var flight = await _unitOfWork.Flights.GetByIdAsync(ticket.FlightId);
            var flightRoute = await _unitOfWork.FlightRoutes.GetByIdAsync(flight.FlightRouteId);

            var aircraft = await _unitOfWork.Aircrafts.GetByIdAsync(flight.AircraftId);
            var aircraftDTO = _mapper.Map<AircraftDTO>(aircraft);

            var seat = await _unitOfWork.Seats.GetByIdAsync(ticket.SeatId);
            var reservation = await _unitOfWork.Reservations.GetByIdAsync(ticket.ReservationId);

            var fromAirport = AirportMapper(_unitOfWork.Airports.GetByIATA(flightRoute.FromAirportIATA));
            var toAirport = AirportMapper(_unitOfWork.Airports.GetByIATA(flightRoute.ToAirportIATA));

            var user = new ApplicationUser();
            if (ticket.UserId.HasValue)
            {
                user = await _userManager.FindByNameAsync(ticket.UserId.Value.ToString());
            }

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

            return new TicketDTO
            {
                TicketId = ticket.Id,
                FlightInfo = flightSummary,
                BookerId = ticket.UserId != null ? ticket.UserId : null,
                BookerFirstName = user != null ? user.FirstName : null,
                BookerLastName = user != null ? user.LastName : null,
                SeatNumber = seat.Position,
                ReservationCode = reservation.ReservationCode,
                PassengerTitle = ticket.PassengerTitle,
                FirstName = ticket.FirstName,
                LastName = ticket.LastName,
                PassengerDOB = ticket.PassengerDOB,
                Status = ticket.Status,
                ContactEmail = ticket.ContactEmail,
                PhoneNumber = ticket.PhoneNumber,
            };
        }
    }
}
