using Microsoft.EntityFrameworkCore;
using Model.Model.Player;
namespace Model;

public class MainDbContext : DbContext
{
    public DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        base.OnConfiguring(optionsBuilder);
        // 这里填写数据库连接字符串
        optionsBuilder.UseSqlServer("Server=.;Database=AltV;Trusted_Connection=True;TrustServerCertificate=True;");
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}