using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QAirlines.API.Services;
using QAirlines.Models;
using QAirlines.UnitOfWorks;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace QAirlines.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitiesController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly S3Service _s3Service;

        public CitiesController(IUnitOfWork unitOfWork, S3Service s3Service)
        {
            _unitOfWork = unitOfWork;
            _s3Service = s3Service;
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

        [HttpPost("upload-city-image/{cityId}")]
        public async Task<IActionResult> UploadCityImage(Guid cityId, IFormFile image)
        {
            if (image == null || image.Length == 0)
                return BadRequest("No image uploaded");

            var city = await _unitOfWork.Cities.GetCityByIdAsync(cityId);
            if (city == null)       
                return NotFound("City not found");

            var imageUrl = await _s3Service.UploadFileAsync(image, city.Name);
            city.ImageUrl = imageUrl;

            await _unitOfWork.Cities.UpdateImageUrlAsync(cityId, imageUrl);
            _unitOfWork.Commit();

            return Ok(new { imageUrl });
        }

        [HttpPost("update-city-images")]
        public async Task<IActionResult> UpdateCityImages()
        {
            foreach (var city in await _unitOfWork.Cities.GetAllAsync())
            {
                // Chuẩn hóa tên (trùng với tên file)
                var slug = city.Name.ToLower()
                    .Replace(" ", "-")
                    ;

                var imageUrl = $"https://aha-airline.s3.ap-southeast-2.amazonaws.com/{slug}.jpg";
                city.ImageUrl = imageUrl;
                await _unitOfWork.Cities.UpdateImageUrlAsync(city.Id, imageUrl);
            }

            _unitOfWork.Commit();

            return Ok("Updated city image URLs.");
        }

    }
}