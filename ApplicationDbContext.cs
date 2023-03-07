public class ApplicationDbContext : DbContext {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options){}
    public DbSet<User> Users {get; set;}
    public DbSet<Address> Addresses { get; set; }
}