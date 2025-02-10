using Microsoft.AspNetCore.Identity;
using QAirlines.Models.Token;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.User
{
    public class ApplicationUser : IdentityUser<Guid>
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int CreditPoints { get; set; }
        public virtual List<Ticket> Tickets { get; set; } = new List<Ticket>();
        public virtual List<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();
        public virtual ICollection<ApplicationUserRole> UserRoles { get; set; } = new List<ApplicationUserRole>();
    }
}
