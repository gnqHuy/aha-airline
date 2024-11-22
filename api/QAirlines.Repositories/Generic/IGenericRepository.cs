using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Generic
{
    public interface IGenericRepository<T, Key> where T : class
    {
        T GetById(Key id);
        Task<T> GetByIdAsync(Key id);
        IEnumerable<T> GetAll();
        Task<IEnumerable<T>> GetAllAsync();
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
