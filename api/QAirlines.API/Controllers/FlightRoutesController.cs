using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QAirlines.API.Mapper;
using QAirlines.Models;
using QAirlines.Models.Data_Transfer_Objects;
using QAirlines.Models.Request;
using QAirlines.UnitOfWorks;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QAirlines.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightRoutesController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly MappingFunctions _mappingFunctions;

        //private IEnumerable<FlightRouteDTO> Mapper(IEnumerable<FlightRoute> flightRoutes)
        //{
        //    var flightRouteDTOs = flightRoutes
        //        .Where(fr => fr != null)
        //        .Select(flightroute =>
        //        {
        //            var fromAirport = _unitOfWork.Airports.GetById(flightroute.)
        //        });
        //    return flightRouteDTOs;
        //}

        public FlightRoutesController(IUnitOfWork unitOfWork, MappingFunctions mappingFunctions)
        {
            _unitOfWork = unitOfWork;
            _mappingFunctions = mappingFunctions;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllFlightRoutes()
        {
            var flightRoutes = await _unitOfWork.FlightRoutes.GetAllAsync();

            if (flightRoutes != null) 
            {
                var flightRouteDTOs = flightRoutes
                    .Where(fr => fr != null)
                    .Select(flightroute => _mappingFunctions.FlightRouteMapper(flightroute)).ToList();
                return Ok(flightRouteDTOs);
            }
            return BadRequest();
        }

        [HttpGet("FromRequest")]
        public async Task<IEnumerable<FlightRouteDTO>> GetFromRequest([FromQuery] FlightRouteRequest request)
        {
            var flightroutes = _unitOfWork.FlightRoutes.FindRoutesFromRequest(request);
            var flightRouteDTOs = flightroutes
                .Where(fr => fr != null)
                .Select(flightRoute => _mappingFunctions.FlightRouteMapper(flightRoute)).ToList();

            return flightRouteDTOs;
        }

        [HttpPost("Range")]
        public async Task AddFlightRoutes([FromBody] IEnumerable<FlightRoute> routes)
        {
            await _unitOfWork.FlightRoutes.AddRangeAsync(routes);
            _unitOfWork.Commit();
        }
    }
}
