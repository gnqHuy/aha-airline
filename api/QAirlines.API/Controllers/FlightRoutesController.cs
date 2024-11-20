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
    public class FlightRoutesController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public FlightRoutesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllFlightRoutes()
        {
            var flightRoutes = await _unitOfWork.FlightRoutes.GetAllAsync();
            if (flightRoutes != null)
            {
                return Ok(flightRoutes);
            }
            return BadRequest();
        }

        [HttpPost("Range")]
        public async Task AddFlightRoutes([FromBody] IEnumerable<FlightRoute> routes)
        {
            await _unitOfWork.FlightRoutes.AddRangeAsync(routes);
            _unitOfWork.Commit();
        }
    }
}
