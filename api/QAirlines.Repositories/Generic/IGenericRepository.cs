using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using QAirlines.Models;

namespace QAirlines.Repositories.Generic
{
    public interface IGenericRepository<T, Key> where T : class
    {
        T GetById(Key id);
        Task<T> GetByIdAsync(Key id);
        Task<IEnumerable<T>> GetByIdsAsync(IEnumerable<Key> ids);
        IEnumerable<T> GetAll();
        Task<IEnumerable<T>> GetAllAsync();
        Task<IEnumerable<T>> GetPagedAsync(int pageSize, int pageNumber);
        IEnumerable<T> FindAll(Expression<Func<T, bool>> expression);
        Task<IEnumerable<T>> FindAllAsync(Expression<Func<T, bool>> expression);
        void Add(T entity);
        Task AddAsync(T entity);
        void AddRange(IEnumerable<T> entities);
        Task AddRangeAsync(IEnumerable<T> entities);
        void Remove(Key id);
        void RemoveRange(IEnumerable<T> entities);
    }
}
