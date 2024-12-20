using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QAirlines.Models;
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
        public void AddAircraft([FromQuery]AircraftRequest request)
        {
            Aircraft aircraft = new Aircraft
            {
                Name = request.Name,
                Manufacturer = request.Manufacturer,
                NoOfSeats = request.NoOfSeats,
                Status = request.Status,
                Terminal = request.Terminal,
                AvailableAt = request.AvailableAt,
            };
            _unitOfWork.Aircrafts.Add(aircraft);
            _unitOfWork.Commit();
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
