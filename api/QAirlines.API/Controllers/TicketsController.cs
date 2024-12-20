using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QAirlines.API.Mapper;
using QAirlines.API.Services;
using QAirlines.Models;
using QAirlines.Models.Data_Transfer_Objects;
using QAirlines.Models.Domain_Objects;
using QAirlines.Models.Request;
using QAirlines.Models.Response;
using QAirlines.UnitOfWorks;
using System.Collections.Generic;
using System.Linq;
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

        public TicketsController(IUnitOfWork unitOfWork, MappingFunctions mappingFunctions, TicketService ticketService, RandomStringGenerator randomStringGenerator)
        {
            _unitOfWork = unitOfWork;
            _mappingFunctions = mappingFunctions;
            _ticketService = ticketService;
            _randomStringGenerator = randomStringGenerator;
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
                    string ticketCode = _randomStringGenerator.GenerateRandomString();

                    while(_unitOfWork.Tickets.IsCodeDuplicated(ticketCode))
                    {
                        ticketCode = _randomStringGenerator.GenerateRandomString();
                    }

                    var ticketSummary = addTicketResponse.TicketSummaries
                        .FirstOrDefault(x => x.FirstName == ticketRequest.FirstName && x.LastName == ticketRequest.LastName);

                    var ticket = new Ticket
                    {
                        TicketCode = ticketCode,
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

        [HttpGet("GetByReservationCode")]
        public IActionResult GetByReservationCode(string reservationCode)
        {
            var tickets = _unitOfWork.Tickets.GetByReservationCode(reservationCode);

            if (tickets == null)
            {
                return BadRequest("Cannot find reservation code");
            }

            var ticketDTOs = new List<TicketDTO>();

            foreach (var ticket in tickets)
            {
                var ticketDTO = _mappingFunctions.TicketMapper(ticket);
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
    }
}
