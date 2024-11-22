using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QAirlines.Models;
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

        [HttpPost("Range")]
        public async Task AddAircrafts([FromBody] IEnumerable<Aircraft> aircrafts)
        {
            await _unitOfWork.Aircrafts.AddRangeAsync(aircrafts);
            _unitOfWork.Commit();
        }
    }
}
