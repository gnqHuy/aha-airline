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
    public class ApplicationRoleStore(QAirlineDbContext context, IdentityErrorDescriber? describer = null)
        : RoleStore<ApplicationRole, QAirlineDbContext, Guid>(context, describer)
    {
    }
}
