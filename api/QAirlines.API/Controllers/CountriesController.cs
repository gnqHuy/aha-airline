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
    public class CountriesController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public CountriesController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCountries()
        {
            var countries = await _unitOfWork.Countries.GetAllAsync();
            if (countries != null)
            {
                return Ok(countries);
            }
            return BadRequest();
        }

        [HttpPost("Range")]
        public async Task AddCountries([FromBody] IEnumerable<Country> countries)
        {
            await _unitOfWork.Countries.AddRangeAsync(countries);
            _unitOfWork.Commit();
        }
    }
}
