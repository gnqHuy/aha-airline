using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QAirlines.Models;
using QAirlines.Models.Enums;
using QAirlines.Models.Request;
using QAirlines.UnitOfWorks;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace QAirlines.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AircraftsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public AircraftsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAircrafts()
        {
            var aircrafts = await _unitOfWork.Aircrafts.GetAllAsync();
            if (aircrafts != null)
            {
                return Ok(aircrafts);
            }
            return BadRequest();
        }

        [HttpPost]
        public IActionResult AddAircraft([FromQuery]AircraftRequest request)
        {
            var airport = _unitOfWork.Airports.GetByIATA(request.Terminal);

            if (airport == null)
            {
                return BadRequest("Terminal not found.");
            }
            string newAircraftName = _unitOfWork.Aircrafts.AddAircraft(request);
            _unitOfWork.Commit();

            var aircraft = _unitOfWork.Aircrafts.GetByName(newAircraftName);
            int totalRows = aircraft.NoOfSeats / 6;
            string[] seatLetters = { "A", "B", "C", "D", "E", "F" };
            int bsnSeats = 0;

            if (aircraft.NoOfSeats < 200)
            {
                bsnSeats = 36;
            }
            if (aircraft.NoOfSeats < 300 && aircraft.NoOfSeats > 200)
            {
                bsnSeats = 48;
            }
            if (aircraft.NoOfSeats < 400 && aircraft.NoOfSeats > 300)
            {
                bsnSeats = 60;
            }
            if (aircraft.NoOfSeats < 500 && aircraft.NoOfSeats > 400)
            {
                bsnSeats = 72;
            }

            for (int i = 0; i < aircraft.NoOfSeats; i++)
            {
                int logicalRowNumber = (i / 6) + 1;
                int actualRowNumber = logicalRowNumber >= 13 ? logicalRowNumber + 1 : logicalRowNumber;

                string seatPosition = $"{actualRowNumber}{seatLetters[i % 6]}";

                SeatClass seatClass = i < bsnSeats ? SeatClass.Business : SeatClass.Economy;

                var seat = new Seat
                {
                    AircraftId = aircraft.Id,
                    Number = i + 1,
                    Position = seatPosition,
                    Class = seatClass,
                    IsAvaiable = true,
                };

                _unitOfWork.Seats.Add(seat);
            }
            _unitOfWork.Commit();

            return Ok($"New aircraft {aircraft.Name} added with {aircraft.NoOfSeats} seats");
        }

        [HttpPost("update")]
        public void UpdateAircrafts()
        {
            _unitOfWork.Aircrafts.UpdateNoOfSeats();
            _unitOfWork.Commit();
        }

        [HttpPut]
        public IActionResult UpdateAircraft([FromQuery]AircraftRequest request)
        {
            Aircraft aircraft = _unitOfWork.Aircrafts.GetById(request.Id ?? new System.Guid());

            if (aircraft != null)
            {
                aircraft.Name = request.Name;
                aircraft.Manufacturer = request.Manufacturer;
                aircraft.NoOfSeats = request.NoOfSeats;
                aircraft.Status = request.Status;
                aircraft.Terminal = request.Terminal;
                aircraft.AvailableAt = request.AvailableAt;

                _unitOfWork.Commit();

                return Ok();
            }
            
            return BadRequest("Aircraft not found.");
        }

        [HttpPost("Range")]
        public async Task AddAircrafts([FromBody] IEnumerable<Aircraft> aircrafts)
        {
            await _unitOfWork.Aircrafts.AddRangeAsync(aircrafts);
            _unitOfWork.Commit();
        }

        [HttpPut("ResetAvailableTime")]
        public async Task ResetAvailableTime()
        {
            await _unitOfWork.Aircrafts.ResetAvailableTime();
            _unitOfWork.Commit();
        }

        [HttpDelete]
        public IActionResult Delete([FromQuery] AircraftRequest request)
        {
            Aircraft aircraft = _unitOfWork.Aircrafts.GetById(request.Id ?? new System.Guid());

            if (aircraft != null)
            {
                _unitOfWork.Aircrafts.Remove(aircraft.Id);
                _unitOfWork.Commit();

                return Ok();
            }

            return BadRequest("Aircraft not found.");
        }
    }
}
