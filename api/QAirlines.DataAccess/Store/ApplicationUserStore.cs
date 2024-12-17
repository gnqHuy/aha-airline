using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using QAirlines.DataAccess.DbContext;
using QAirlines.Models.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.DataAccess.Store
{
    public class ApplicationUserStore(QAirlineDbContext context, IdentityErrorDescriber? describer = null)
        : UserStore<
        ApplicationUser,
        ApplicationRole,
        QAirlineDbContext,
        Guid,
        IdentityUserClaim<Guid>,
        IdentityUserRole<Guid>,
        IdentityUserLogin<Guid>,
        IdentityUserToken<Guid>,
        IdentityRoleClaim<Guid>
        >(context, describer)
    {
    }
}
