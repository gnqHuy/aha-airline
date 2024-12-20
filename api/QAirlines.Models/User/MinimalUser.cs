using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.User
{
    public class MinimalUser
    {
        public string Username { get; set; }
        public List<string> Roles { get; set; }
    }
}
