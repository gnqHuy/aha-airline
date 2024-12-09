using QAirlines.DataAccess.DbContext;
using QAirlines.Models.Token;
using QAirlines.Repositories.Custom.Interfaces;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Repositories
{
    public class RefreshTokenRepository : GenericRepository<RefreshToken, Guid>, IRefreshTokenRepository
    {
        public RefreshTokenRepository(QAirlineDbContext context) : base(context) 
        {
        }
    }
}
