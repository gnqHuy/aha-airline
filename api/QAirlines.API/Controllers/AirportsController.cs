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
    public class AirportsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public AirportsController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAirports()
        {
            var airports = await _unitOfWork.Airports.GetAllAsync();
            if (airports != null)
            {
                return Ok(airports);
            }
            return BadRequest();
        }

        [HttpPost("Range")]
        public async Task AddAirports([FromBody] IEnumerable<Airport> airports)
        {
            await _unitOfWork.Airports.AddRangeAsync(airports);
            _unitOfWork.Commit();
        }
    }
}
