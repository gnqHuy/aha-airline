using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QAirlines.API.Mapper;
using QAirlines.Models;
using QAirlines.Models.Data_Transfer_Objects;
using QAirlines.UnitOfWorks;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
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

        [HttpGet("DTO")]
        public async Task<IActionResult> GetAirportsDTO()
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

            return Ok(airportDTOs);
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

        [HttpPut]

        public async Task<IActionResult> UpdateAirportCoordinates()
        {
            try
            {
                var jsonFilePath = "D:/college/5th Semester/Web Programming/QAirline/api/QAirlines.API/Controllers/airports-with-coordinates.json";
                if (!System.IO.File.Exists(jsonFilePath))
                {
                    return NotFound("JSON file not found");
                }
                var jsonData = await System.IO.File.ReadAllTextAsync(jsonFilePath);
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                };

                var airports = JsonSerializer.Deserialize<List<Airport>>(jsonData, options);

                if (airports == null || !airports.Any())
                {
                    return BadRequest(airports);
                }

                foreach (var airport in airports)
                {
                    var target = _unitOfWork.Airports.GetByIATA(airport.IATA);
                    if (target != null) 
                    {
                        target.Longitude = airport.Longitude;
                        target.Latitude = airport.Latitude;
                        
                    }
                    _unitOfWork.Commit();
                }
                return Ok("Airport coordinates updated successfully");
            } catch (Exception e)
            {
                return StatusCode(500, $"An error occured: {e.Message}");
            }
        }

        [HttpGet("DTO/country")]
        public async Task<IActionResult> GetDTOByCountryName([FromQuery] string countryName)
        {
            var airports = await _unitOfWork.Airports.GetByCountryName(countryName);
            var airportDTOs = airports
                .Where(a => a != null)
                .Select(airport => _mappingFunctions.AirportMapper(airport));
            return Ok(airportDTOs);
        }

        [HttpGet("country")]
        public async Task<IActionResult> GetByCountryName([FromQuery] string countryName)
        {
            var airports = await _unitOfWork.Airports.GetByCountryName(countryName);
            if (airports != null)
            {
                return Ok(airports);
            }
            return NotFound();
        }

        [HttpGet("IATA")]
        public Airport GetByIATA(string iata)
        {
            var airport = _unitOfWork.Airports.GetByIATA(iata);
            return airport;
        }

        [HttpPost("Range")]
        public async Task AddAirports([FromBody] IEnumerable<Airport> airports)
        {
            await _unitOfWork.Airports.AddRangeAsync(airports);
            _unitOfWork.Commit();
        }
    }
}
