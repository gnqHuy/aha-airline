using QAirlines.DataAccess.DbContext;
using QAirlines.Models.User;
using QAirlines.Repositories.Custom.Interfaces;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Repositories
{
    public class ApplicationUserRepository : GenericRepository<ApplicationUser, Guid>, IApplicationUserRepository
    {
        public ApplicationUserRepository(QAirlineDbContext context) : base(context) { }
    }
}
