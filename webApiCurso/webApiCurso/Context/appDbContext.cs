using Microsoft.EntityFrameworkCore;
using webApiCurso.Models;

namespace webApiCurso.Context
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
        }

        public DbSet<Products> Products { get; set; }
    }
}
