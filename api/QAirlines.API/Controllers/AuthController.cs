using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using QAirlines.API.Services;
using QAirlines.Models;
using QAirlines.Models.Request;
using QAirlines.Models.User;
using QAirlines.UnitOfWorks;
using System.Threading.Tasks;

namespace QAirlines.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly AuthService _authService;

        public AuthController(
            IUnitOfWork unitOfWork,
            AuthService authService
        ){
            _unitOfWork = unitOfWork;
            _authService = authService;
        }
        
        [HttpPost]
        [Route("seedRoles")]
        public async Task<IActionResult> SeedRoles()
        {
            var result = await _authService.SeedRoles();

            if (!result.IsSuccess)
            {
                return BadRequest(result.Message);
            }

            return Ok(result.Message);
        }

        [HttpPost]
        [Route("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            var result = await _authService.Register(request);

            if (!result.IsSuccess)
            {
                return BadRequest(result.Message);
            }

            return Ok(result.Message);
        }

        [HttpPost]
        [Route("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var result = await _authService.Login(request);

            if (!result.IsSuccess)
            {
                return Unauthorized(result.Message);
            }

            return Ok(result);
        }
    }
}
