public class ApplicationDbContext : DbContext {
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options){}
    
    protected override void OnModelCreating(ModelBuilder modelBuilder){
        //modelBuilder.Entity<>()
    }

    public DbSet<User> Users {get; set;}
    public DbSet<Address> Addresses { get; set; }
    public DbSet<Product> Products {get; set;}
    public DbSet<PGroup> Groups { get; set; }
}