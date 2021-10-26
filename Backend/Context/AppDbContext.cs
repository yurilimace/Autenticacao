using Autenticacao.Entidade;
using Microsoft.EntityFrameworkCore;


namespace Autenticacao.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
          
        }
        public DbSet<Usuario> Usuarios { get; set; }
    }
}
