using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using QAirlines.Models;
using QAirlines.Models.User;
using QAirlines.UnitOfWorks;

namespace QAirlines.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly RoleManager<ApplicationRole> _roleManager;

        public AuthController(
            IUnitOfWork unitOfWork,
            UserManager<ApplicationUser> userManager,
            SignInManager<ApplicationUser> signInManager,
            RoleManager<ApplicationRole> roleManager
        ){
            _unitOfWork = unitOfWork;
            _userManager = userManager;
            _signInManager = signInManager;
            _roleManager = roleManager;
        }
        
    }
}
