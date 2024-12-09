using Microsoft.EntityFrameworkCore;
using QAirlines.DataAccess.DbContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Generic
{
    public class GenericRepository<T, Key> : IGenericRepository<T, Key> where T : class
    {
        protected readonly QAirlineDbContext _context;

        public GenericRepository(QAirlineDbContext context)
        {
            _context = context;
        }

        public IEnumerable<T> GetAll() 
        {
            return _context.Set<T>().ToList();
        }

        public async Task<IEnumerable<T>> GetAllAsync() 
        {
            var list = await _context.Set<T>().ToListAsync();
            return list;
        }

        public T GetById(Key id)
        {
            return _context.Set<T>().Find(id);
        }

        public async Task<T> GetByIdAsync(Key id)
        {
            var target = await _context.Set<T>().FindAsync(id);
            return target;
        }

        public IEnumerable<T> FindAll(Expression<Func<T, bool>> expression)
        {
            return _context.Set<T>().Where(expression).ToList();
        }

        public async Task<IEnumerable<T>> FindAllAsync(Expression<Func<T, bool>> expression)
        {
            var list = await _context.Set<T>().Where(expression).ToListAsync();
            return list;
        }

        public void Add(T entity) 
        {
            _context.Set<T>().Add(entity);
        }

        public async Task AddAsync(T entity)
        {
            await _context.Set<T>().AddAsync(entity);
        }

        public virtual void AddRange(IEnumerable<T> entities)
        {
            _context.Set<T>().AddRange(entities);
        }

        public virtual async Task AddRangeAsync(IEnumerable<T> entities)
        {
            await _context.Set<T>().AddRangeAsync(entities);
        }

        public void Remove(Key Id) 
        {
            T entity = GetById(Id);
            if (entity != null)
            {
                _context.Set<T>().Remove(entity);
            }
        }

        public void RemoveRange(IEnumerable<T> entities)
        {
            _context.Set<T>().RemoveRange(entities);
        }
    }
}
