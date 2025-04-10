using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using webApiCurso.Context;

namespace webApiCurso.Context
{
    public class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
    {
        public AppDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();
            optionsBuilder.UseSqlServer("Server=localhost\\SQLEXPRESS;Database=ProductPruebaDB;Trusted_Connection=true;TrustServerCertificate=true");

            return new AppDbContext(optionsBuilder.Options);
        }
    }
}
