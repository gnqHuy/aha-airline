using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QAirlines.API.Mapper;
using QAirlines.Models;
using QAirlines.Models.Data_Transfer_Objects;
using QAirlines.UnitOfWorks;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QAirlines.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AirportsController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly MappingFunctions _mappingFunctions;

        public AirportsController(IUnitOfWork unitOfWork, IMapper mapper, MappingFunctions mappingFunctions)
        {
            _unitOfWork = unitOfWork;
            _mappingFunctions = mappingFunctions;

        }

        [HttpGet]
        public async Task<IActionResult> GetAirports()
        {
            if (_unitOfWork == null || _unitOfWork.Airports == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Unit of Work is not initialized.");
            }

            var airports = await _unitOfWork.Airports.GetAllAsync();
            if (airports == null || !airports.Any())
            {
                return NotFound("No airports found.");
            }

            if (_mappingFunctions == null)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Mapper is not initialized.");
            }

            var airportDTOs = airports
                .Where(a => a != null)
                .Select(airport => _mappingFunctions.AirportMapper(airport));

            //var airportDTOs = await _unitOfWork.Airports.GetAirports();

            return Ok(airportDTOs);
        }

        [HttpGet("country")]
        public async Task<IActionResult> GetByCountryName([FromQuery] string countryName)
        {
            var airports = await _unitOfWork.Airports.GetByCountryName(countryName);
            var airportDTOs = airports
                .Where(a => a != null)
                .Select(airport => _mappingFunctions.AirportMapper(airport));
            return Ok(airportDTOs);
        }

        [HttpPost("Range")]
        public async Task AddAirports([FromBody] IEnumerable<Airport> airports)
        {
            await _unitOfWork.Airports.AddRangeAsync(airports);
            _unitOfWork.Commit();
        }
    }
}
