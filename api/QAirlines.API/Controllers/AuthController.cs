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
        
        [HttpPost("seedRoles")]
        public async Task<IActionResult> SeedRoles()
        {
            var result = await _authService.SeedRoles();

            if (!result.IsSuccess)
            {
                return BadRequest(result.Message);
            }

            return Ok(result.Message);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            var result = await _authService.Register(request);

            if (!result.IsSuccess)
            {
                return BadRequest(result.Message);
            }

            return Ok(result.Message);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var result = await _authService.Login(request);

            if (!result.IsSuccess)
            {
                return Unauthorized(result.Message);
            }

            return Ok(result);
        }

        [HttpPost("makeFlightAdmin")]
        public async Task<IActionResult> MakeFlightAdmin([FromBody] string usernameOrEmail)
        {
            var result = await _authService.MakeFlightAdmin(usernameOrEmail);

            if (!result.IsSuccess)
            {
                return BadRequest(result.Message);
            }

            return Ok(result.Message);
        }
    }
}
