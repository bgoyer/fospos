using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FosposApi.Server.Database;

namespace FosposApi.Server.Controllers
{
    // Generic controller template
    public class GenericController<T> : ControllerBase where T : class
    {
        private readonly PosDbContext _dbContext;

        public GenericController(PosDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<T>>> GetAll()
        {
            return await _dbContext.Set<T>().ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<T>> Get(int id)
        {
            var entity = await _dbContext.Set<T>().FindAsync(id);
            if (entity == null) return NotFound();
            return entity;
        }

        [HttpPost]
        public async Task<ActionResult<T>> Post(T entity)
        {
            _dbContext.Set<T>().Add(entity);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = entity }, entity);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, T updatedEntity)
        {
            if (!_dbContext.Set<T>().Any(e => e.Equals(updatedEntity))) return BadRequest();

            _dbContext.Entry(updatedEntity).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var entity = await _dbContext.Set<T>().FindAsync(id);
            if (entity == null) return NotFound();

            _dbContext.Set<T>().Remove(entity);
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }
    }
}