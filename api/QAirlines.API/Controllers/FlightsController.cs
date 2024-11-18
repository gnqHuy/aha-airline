using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QAirlines.Models;
using QAirlines.UnitOfWorks;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace QAirlines.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public FlightsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllFlights() 
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

        //[HttpGet("DepartureId={Id}")]
        //public async Task<IActionResult> GetFlightsFromDeparture(Guid Id)
        //{
        //    var flights = await _unitOfWork.Flights.GetFlightsFromDepartureCity(Id);
        //    if (flights != null)
        //    {
        //        return Ok(flights);
        //    }
        //    return NotFound();
        //}

        //[HttpGet("ArrivalId={Id}")]
        //public async Task<IActionResult> GetFlightsToArrival(Guid Id)
        //{
        //    var flights = await _unitOfWork.Flights.GetFlightsToArrivalCity(Id);
        //    if (flights != null)
        //    {
        //        return Ok(flights);
        //    }
        //    return NotFound();
        //}

        //[HttpGet("DepartureId={departureId}/ArrivalId={arrivalId}")]
        //public async Task<IActionResult> GetFlightsFromTerminalInfo(Guid departureId, Guid arrivalId)
        //{
        //    var flights = await _unitOfWork.Flights.GetFlightsFromTerminalInfo(departureId, arrivalId);
        //    if (flights != null)
        //    {
        //        return Ok(flights);
        //    }
        //    return NotFound();
        //}

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

        [HttpDelete]
        public void RemoveFlight(Guid Id)
        {
            _unitOfWork.Flights.Remove(Id);
            _unitOfWork.Commit();
        }
    }
}
