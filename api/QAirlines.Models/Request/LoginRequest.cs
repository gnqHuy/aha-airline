using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Request
{
    public class LoginRequest
    {
        [Required(ErrorMessage = "Please enter your username or email")]
        public string UsernameOrEmail { get; set; }

        [Required(ErrorMessage = "Please enter your password")]
        public string Password { get; set; }
    }
}
