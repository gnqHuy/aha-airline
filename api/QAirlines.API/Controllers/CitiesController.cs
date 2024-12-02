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
    public class CitiesController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CitiesController(IUnitOfWork unitOfWork) 
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCities()
        {
            var cities = await _unitOfWork.Cities.GetAllAsync();
            if (cities != null)
            {
                return Ok(cities);
            }
            return BadRequest();
        }

        [HttpGet("country")]
        public async Task<IEnumerable<City>> GetByCountryName([FromQuery] string countryName)
        {
            var cities = await _unitOfWork.Cities.GetByCountryName(countryName);
            return cities;
        }

        [HttpPost]
        public async Task AddCities([FromBody] IEnumerable<City> cities)
        {
            await _unitOfWork.Cities.AddRangeAsync(cities);
            _unitOfWork.Commit();
        }
    }
}
