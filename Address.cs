public class Address{
    public int Id { get; set; }
    public string address { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
}