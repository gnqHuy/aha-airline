using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using QAirlines.Models.Request;
using QAirlines.Models.Response;
using QAirlines.Models.User;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.API.Services
{
    public class AuthService
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<ApplicationRole> _roleManager;
        private readonly IConfiguration _configuration;

        public AuthService(UserManager<ApplicationUser> userManager, RoleManager<ApplicationRole> roleManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _configuration = configuration;
        }

        private string GenerateJWT(List<Claim> claims)
        {
            var secret = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            var tokenObject =
                new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddHours(double.Parse(_configuration["JWT:TTL"])),
                    claims: claims,
                    signingCredentials: new SigningCredentials(secret, SecurityAlgorithms.HmacSha256)
                );

            string token = new JwtSecurityTokenHandler().WriteToken(tokenObject);

            return token;
        }

        public async  Task<AuthServiceResponse> SeedRoles()
        {
            bool userRoleExists = await _roleManager.RoleExistsAsync(Role.User);
            bool contentAdminRoleExists = await _roleManager.RoleExistsAsync(Role.ContentAdmin);
            bool flightAdminRoleExists = await _roleManager.RoleExistsAsync(Role.FlightAdmin);
            bool superAdminRoleExists = await _roleManager.RoleExistsAsync(Role.SuperAdmin);

            string existingRoles = "";

            if (userRoleExists)
            {
                existingRoles += Role.User + " ";
            }
            if (contentAdminRoleExists)
            {
                existingRoles += Role.ContentAdmin + " ";
            }
            if (flightAdminRoleExists)
            {
                existingRoles += Role.FlightAdmin + " ";
            }
            if (superAdminRoleExists)
            {
                existingRoles += Role.SuperAdmin + " ";
            }

            if (!string.IsNullOrEmpty(existingRoles))
            {
                return new AuthServiceResponse
                {
                    IsSuccess = false,
                    Message = $"{existingRoles} role already exist."
                };
            }

            await _roleManager.CreateAsync(new ApplicationRole(Role.User));
            await _roleManager.CreateAsync(new ApplicationRole(Role.ContentAdmin));
            await _roleManager.CreateAsync(new ApplicationRole(Role.FlightAdmin));
            await _roleManager.CreateAsync(new ApplicationRole(Role.SuperAdmin));

            return new AuthServiceResponse
            {
                IsSuccess = true,
                Message = "Roles seeded succesfully."
            };
        }

        public async Task<AuthServiceResponse> Register(RegisterRequest request)
        {
            var isUserExist = await _userManager.FindByNameAsync(request.Username);

            if (isUserExist != null) 
            {
                return new AuthServiceResponse
                {
                    IsSuccess = false,
                    Message = "This username already exists, please try another one."
                };
            }

            ApplicationUser user = new ApplicationUser()
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                UserName = request.Username,
                Email = request.Email,
                SecurityStamp = Guid.NewGuid().ToString(),
            };

            var createUser = await _userManager.CreateAsync(user, request.Password);

            if (!createUser.Succeeded)
            {
                string errorLog = "User creation failed with errors: \n";

                foreach (var error in createUser.Errors)
                {
                    errorLog += error.Description + "\n";
                }

                return new AuthServiceResponse
                {
                    IsSuccess = false,
                    Message = errorLog
                };
            }

            await _userManager.AddToRoleAsync(user, Role.User);

            return new AuthServiceResponse
            {
                IsSuccess = true,
                Message = $"User {request.Username} created successfully."
            };
        }

        public async Task<AuthServiceResponse> Login(LoginRequest request)
        {
            ApplicationUser user;
            if (request.UsernameOrEmail.Contains("@"))
            {
                user = await _userManager.FindByEmailAsync(request.UsernameOrEmail);
            }
            user = await _userManager.FindByNameAsync(request.UsernameOrEmail);

            if (user == null)
            {
                return new AuthServiceResponse
                {
                    IsSuccess = false,
                    Message = $"{request.UsernameOrEmail} does not exist."
                };
            }

            bool isPasswordCorrect = await _userManager.CheckPasswordAsync(user, request.Password);

            if (!isPasswordCorrect)
            {
                return new AuthServiceResponse
                {
                    IsSuccess = false,
                    Message = "Incorrect Password. Please try again."
                };
            }

            var roles = await _userManager.GetRolesAsync(user);

            var authClaims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.UserName),
                new Claim("TokenId", Guid.NewGuid().ToString()),
                new Claim("FirstName", user.FirstName),
                new Claim("LastName", user.LastName)
            };

            foreach (var role in roles)
            {
                authClaims.Add(new Claim(ClaimTypes.Role, role));
            }

            string token = GenerateJWT(authClaims);

            return new AuthServiceResponse
            {
                IsSuccess = true,
                User = new MinimalUser
                {
                    Username = user.UserName,
                    Roles = roles.ToList()
                },
                Message = "Login successfully.",
                Token = token
            };
        }

        public async Task<AuthServiceResponse> MakeFlightAdmin(string usernameOrEmail)
        {
            ApplicationUser user;
            if (usernameOrEmail.Contains("@"))
            {
                user = await _userManager.FindByEmailAsync(usernameOrEmail);
            }
            user = await _userManager.FindByNameAsync(usernameOrEmail);

            if (user == null)
            {
                return new AuthServiceResponse
                {
                    IsSuccess = false,
                    Message = $"{usernameOrEmail} does not exist."
                };
            }

            await _userManager.AddToRoleAsync(user, Role.FlightAdmin);
            return new AuthServiceResponse
            {
                IsSuccess = true,
                Message = "Role updated successfully."
            };
        }
    }
}
