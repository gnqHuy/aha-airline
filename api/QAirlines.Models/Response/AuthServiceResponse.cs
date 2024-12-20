using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using QAirlines.Models.User;

namespace QAirlines.Models.Response
{
    public class AuthServiceResponse
    {
        public bool IsSuccess { get; set; }
        public MinimalUser User {  get; set; }
        public string? Message { get; set; }
        public string? Token { get; set; }
    }
}
