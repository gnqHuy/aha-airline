using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using QAirlines.API.Mapper;
using QAirlines.API.Services;
using QAirlines.Models;
using QAirlines.Models.Data_Transfer_Objects;
using QAirlines.Models.Domain_Objects;
using QAirlines.Models.Request;
using QAirlines.Models.Response;
using QAirlines.Models.Summary;
using QAirlines.Models.User;
using QAirlines.UnitOfWorks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Sockets;
using System.Threading.Tasks;

namespace QAirlines.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly MappingFunctions _mappingFunctions;
        private readonly TicketService _ticketService;
        private readonly RandomStringGenerator _randomStringGenerator;
        private readonly UserManager<ApplicationUser> _userManager;

        public TicketsController(IUnitOfWork unitOfWork, MappingFunctions mappingFunctions, TicketService ticketService, RandomStringGenerator randomStringGenerator, UserManager<ApplicationUser> userManager)
        {
            _unitOfWork = unitOfWork;
            _mappingFunctions = mappingFunctions;
            _ticketService = ticketService;
            _randomStringGenerator = randomStringGenerator;
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var tickets = _unitOfWork.Tickets.GetAll();

            if (tickets != null)
            {
                return Ok(tickets);
            }

            return BadRequest();
        }

        [HttpPost]
        public async Task<AddTicketResponse> AddTickets([FromBody]AddTicketRequest request)
        {
            var addTicketResponse = await _ticketService.AddTickets(request);
            var tickets = new List<Ticket>();

            if (addTicketResponse.IsSuccess)
            {
                var reservation = _unitOfWork.Reservations.GetByReservationCode(addTicketResponse.ReservationCode);

                foreach (var ticketRequest in request.Tickets)
                {
                    var ticketSummary = addTicketResponse.TicketSummaries
                        .FirstOrDefault(x => x.FirstName == ticketRequest.FirstName && x.LastName == ticketRequest.LastName);

                    var ticket = new Ticket
                    {
                        TicketCode = ticketSummary.TicketCode,
                        UserId = request.BookerId != null ? request.BookerId : null,
                        FlightId = request.FlightId,
                        SeatId = ticketSummary.SeatId,
                        ReservationId = reservation.Id,
                        PassengerTitle = ticketRequest.PassengerTitle,
                        FirstName = ticketRequest.FirstName,
                        LastName = ticketRequest.LastName,
                        PassengerDOB = ticketRequest.PassengerDOB,
                        Status = ticketSummary.Status,
                        ContactEmail = ticketRequest.ContactEmail,
                        PhoneNumber = ticketRequest.PhoneNumber,
                    };

                    tickets.Add(ticket);
                }
                _unitOfWork.Tickets.AddRange(tickets);
                _unitOfWork.Commit();
            }

            return addTicketResponse;
        }

        [HttpGet("GetTicketByTicketCode")]
        public async Task<IEnumerable<Ticket>> GetByTicketCode(string ticketCode)
        {
            var ticket = await _unitOfWork.Tickets.GetByTicketCodeAsync(ticketCode);
            return ticket;
        }

        [HttpGet("GetByReservationOrTicketCode")]
        public async Task<IActionResult> GetByReservationOrTicketCode(string reservationCode)
        {
            var reservation = await _unitOfWork.Reservations.GetByReservationCodeAsync(reservationCode);

            var tickets = new List<Ticket>();

            if (reservation == null)
            {
                var filteredTicket = await _unitOfWork.Tickets.GetByTicketCodeAsync(reservationCode);
                tickets = filteredTicket.ToList();
            } else
            {
                tickets = _unitOfWork.Tickets.GetAll().Where(x => x.ReservationId == reservation.Id).ToList();
            }

            var seatIds = new List<Guid>();

            foreach(var ticket in tickets)
            {
                seatIds.Add(ticket.SeatId);
            }

            var seats = await _unitOfWork.Seats.GetByIdsAsync(seatIds);

            if (tickets == null || !tickets.Any())
            {
                return BadRequest("Cannot find reservation code");
            }

            var flight = await _unitOfWork.Flights.GetByIdAsync(tickets.ElementAt(0).FlightId);
            var aircraft = await _unitOfWork.Aircrafts.GetByIdAsync(flight.AircraftId);
            var flightRoute = await _unitOfWork.FlightRoutes.GetByIdAsync(flight.FlightRouteId);
            var fromAirport = await _unitOfWork.Airports.GetByIATAAsync(flightRoute.FromAirportIATA);
            var toAirport = await _unitOfWork.Airports.GetByIATAAsync(flightRoute.ToAirportIATA);
            var fromAirportDTO = await _mappingFunctions.AirportMapperAsync(fromAirport);
            var toAirportDTO = await _mappingFunctions.AirportMapperAsync(toAirport);

            var user = new ApplicationUser();
            if (tickets.ElementAt(0).UserId.HasValue)
            {
                user = await _userManager.FindByNameAsync(tickets.ElementAt(0).UserId.Value.ToString());
            }

            var ticketDTOs = new List<TicketDTO>();
            var aircraftDTO = _mappingFunctions.AircraftMapper(aircraft);

            foreach (var ticket in tickets)
            {
                var seat = seats.FirstOrDefault(x => ticket.SeatId == x.Id);
                var flightSummary = new FlightSummary
                {
                    Id = flight.Id,
                    Aircraft = aircraftDTO,
                    FromAirport = fromAirportDTO,
                    ToAirport = toAirportDTO,
                    BoardingTime = flight.BoardingTime,
                    DepartureTime = flight.DepartureTime,
                    ArrivalTime = flight.ArrivalTime,
                    Status = flight.Status,
                    BoardingGate = flight.BoardingGate,
                };

                var ticketDTO = new TicketDTO
                {
                    TicketId = ticket.Id,
                    TicketCode = ticket.TicketCode,
                    FlightInfo = flightSummary,
                    BookerId = ticket.UserId != null ? ticket.UserId : null,
                    BookerFirstName = user != null ? user.FirstName : null,
                    BookerLastName = user != null ? user.LastName : null,
                    SeatNumber = seat.Position,
                    SeatClass = seat.Class,
                    ReservationCode = reservationCode,
                    PassengerTitle = ticket.PassengerTitle,
                    FirstName = ticket.FirstName,
                    LastName = ticket.LastName,
                    PassengerDOB = ticket.PassengerDOB,
                    Status = ticket.Status,
                    ContactEmail = ticket.ContactEmail,
                    PhoneNumber = ticket.PhoneNumber,
                };

                ticketDTOs.Add(ticketDTO);
            }

            return Ok(ticketDTOs);
        }

        [HttpPut("ResetSeatAvailability")]
        public void ResetSeatAvailability()
        {
            _unitOfWork.Seats.ResetAvailability();
            _unitOfWork.Commit();
        }

        [HttpPut("UpgradeSeat/Id")]
        public async Task<IActionResult> UpgradeSeat(Guid ticketId)
        {
            var ticket = await _unitOfWork.Tickets.GetByIdAsync(ticketId);
            var flight = await _unitOfWork.Flights.GetByIdAsync(ticket.FlightId);
            var aircraft = await _unitOfWork.Aircrafts.GetByIdAsync(flight.AircraftId);
            var previousSeat = await _unitOfWork.Seats.GetByIdAsync(ticket.SeatId);

            var upgradedSeat = _unitOfWork.Seats.UpgradeSeat(aircraft.Id, previousSeat.Id);

            if (upgradedSeat != null)
            {
                ticket.SeatId = upgradedSeat.Id;
                _unitOfWork.Commit();
                return Ok("Seat upgraded successfully");
            }
            return BadRequest("There's no Business seat left.");
        }

        [HttpPut("UpgradeSeat/Code")]
        public async Task<IActionResult> UpgradeSeat(string ticketCode)
        {
            var ticket = await _unitOfWork.Tickets.GetByTicketCodeAsync(ticketCode);
            var flight = await _unitOfWork.Flights.GetByIdAsync(ticket.ElementAt(0).FlightId);
            var aircraft = await _unitOfWork.Aircrafts.GetByIdAsync(flight.AircraftId);
            var previousSeat = await _unitOfWork.Seats.GetByIdAsync(ticket.ElementAt(0).SeatId);

            var upgradedSeat = _unitOfWork.Seats.UpgradeSeat(aircraft.Id, previousSeat.Id);

            if (upgradedSeat != null)
            {
                ticket.ElementAt(0).SeatId = upgradedSeat.Id;
                _unitOfWork.Commit();
                return Ok("Seat upgraded successfully");
            }
            return BadRequest("There's no Business seat left.");
        }

        [HttpDelete("CancelTicket/Id")]
        public async Task<IActionResult> CancelTicket(Guid ticketId)
        {
            var ticket = await _unitOfWork.Tickets.GetByIdAsync(ticketId);
            var flight = await _unitOfWork.Flights.GetByIdAsync(ticket.FlightId);
            var aircraft = await _unitOfWork.Aircrafts.GetByIdAsync(flight.AircraftId);
            var previousSeat = await _unitOfWork.Seats.GetByIdAsync(ticket.SeatId);

            previousSeat.IsAvaiable = true;
            _unitOfWork.Tickets.Remove(ticketId);

            _unitOfWork.Commit();
            return Ok("Ticket cancelled successfully.");
        }

        [HttpDelete("CancelTicket/Code")]
        public async Task<IActionResult> CancelTicket(string ticketCode)
        {
            var ticket = await _unitOfWork.Tickets.GetByTicketCodeAsync(ticketCode);
            var flight = await _unitOfWork.Flights.GetByIdAsync(ticket.ElementAt(0).FlightId);
            var aircraft = await _unitOfWork.Aircrafts.GetByIdAsync(flight.AircraftId);
            var previousSeat = await _unitOfWork.Seats.GetByIdAsync(ticket.ElementAt(0).SeatId);

            previousSeat.IsAvaiable = true;
            _unitOfWork.Tickets.Remove(ticket.ElementAt(0).Id);

            _unitOfWork.Commit();
            return Ok("Ticket cancelled successfully.");
        }
    }
}
