using QAirlines.Models.Base;
using QAirlines.Models.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Token
{
    public class RefreshToken : IEntity<Guid>
    {
        public Guid Id { get; set; }
        public Guid AppUserId { get; set; }
        public string Token {  get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime? ExpiredAt { get; set; }
        public string? ReasonOfRevocation { get; set; }
        public virtual ApplicationUser User { get; set; }
    }
}
