using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QAirlines.API.Mapper;
using QAirlines.API.Services;
using QAirlines.Models;
using QAirlines.Models.Data_Transfer_Objects;
using QAirlines.Models.Request;
using QAirlines.Models.Response;
using QAirlines.UnitOfWorks;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QAirlines.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly FlightService _flightService;
        private readonly MappingFunctions _mappingFunctions;

        public FlightsController(IUnitOfWork unitOfWork, FlightService flightService, MappingFunctions mappingFunctions)
        {
            _unitOfWork = unitOfWork;
            _flightService = flightService;
            _mappingFunctions = mappingFunctions;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll() 
        {
            var flights = await _unitOfWork.Flights.GetAllAsync();
            if (flights != null)
            {
                return Ok(flights);
            }
            return BadRequest();
        }

        [HttpGet("Id={Id}")]
        public async Task<Flight> GetFlightById(Guid Id) 
        {
            var flight = await _unitOfWork.Flights.GetByIdAsync(Id);
            return flight;
        }

        [HttpGet("Preview")]
        public async Task<IEnumerable<FlightPreview>> GetFlightPreviews([FromQuery]FlightPreviewRequest request)
        {
            var flightPreviews = await _flightService.GetFlightPreviews(request);

            return flightPreviews.ToList();
        }

        //[HttpPut("ResetSeats")]
        //public async Task ResetNoOfSeats()
        //{
        //    _flightService.ResetRemainingSeats();
        //}

        [HttpPut("ResetNoOfAvalableSeat")]
        public void ResetAvailableSeat(Guid flightId, int remainingEcoSeats, int remainingBsnSeats)
        {
            var flight = _unitOfWork.Flights.GetById(flightId);
            flight.RemainingBsnSeats = remainingBsnSeats;
            flight.RemainingEcoSeats = remainingEcoSeats;
            _unitOfWork.Commit();
        }

        [HttpPost("GenerateSeats")]
        public async Task<IActionResult> GenerateSeats()
        {
            int count = await _flightService.GenerateSeats();
            return Ok($"Generated and added {count} seats");
        }

        [HttpGet("FromRequest")]
        public async Task<IEnumerable<FlightDTO>> GetFromRequest([FromQuery]string fromIATA, string toIATA, DateTime? dateTime)
        {
            var flights = await _flightService.GetFromRequest(fromIATA, toIATA, dateTime);
            
            var flightDTOs = new List<FlightDTO>();
            foreach (var flight in flights) 
            {
                var flightDTO = _mappingFunctions.FlightMapper(flight);
                flightDTOs.Add(flightDTO);
            }

            return flightDTOs;
        }

        [HttpGet("FromAircraftAndRoute")]
        public async Task<IEnumerable<FlightDTO>> GetFromAircraftAndRoute([FromQuery]string aircraftName, string fromIATA, string toIATA)
        {
            var flights = await _flightService.GetFromAircraftAndRoute(aircraftName, fromIATA, toIATA);

            var flightDTOs = new List<FlightDTO>();
            foreach (var flight in flights)
            {
                var flightDTO = _mappingFunctions.FlightMapper(flight);
                flightDTOs.Add(flightDTO);
            }

            return flightDTOs;
        }

        [HttpGet("Paged")]
        public async Task<IEnumerable<FlightDTO>> GetPagedDTO([FromQuery]int pageSize, int pageNumber)
        {
            var flights = await _unitOfWork.Flights.GetPagedAsync(pageSize, pageNumber);

            var flightDTOs = new List<FlightDTO>();
            foreach (var flight in flights)
            {
                var flightDTO = _mappingFunctions.FlightMapper(flight);
                flightDTOs.Add(flightDTO);
            }

            return flightDTOs;
        }

        [HttpPost]
        public async Task AddFlight([FromBody] Flight flight)
        {
            await _unitOfWork.Flights.AddAsync(flight);
            _unitOfWork.Commit();
        }

        [HttpPost("Range")]
        public async Task AddFlights([FromBody] IEnumerable<Flight> flights)
        {
            await _unitOfWork.Flights.AddRangeAsync(flights);
            _unitOfWork.Commit();
        }

        [HttpPost("AutoGenerate")]
        public async Task<IActionResult> GenerateContinuousRandomFlights([FromQuery]int days)
        {
            DateTime current = DateTime.Now;
            current = current.AddDays(days);
            var flights = await _flightService.GenerateContinuousRandomFlight(current);

            if (flights != null)
            {
                _unitOfWork.Flights.AddRangeAsync(flights);
                _unitOfWork.Commit();

                int count = flights.Count();
                return Ok($"Generated and added {count} flights");
            }

            return BadRequest();
        }

        [HttpDelete]
        public void RemoveFlight(Guid Id)
        {
            _unitOfWork.Flights.Remove(Id);
            _unitOfWork.Commit();
        }
    }
}
