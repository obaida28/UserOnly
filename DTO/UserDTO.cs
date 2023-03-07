public class UserDTO{
    [MaxLength(length: 100)]
    public string name { get; set; }
    [MaxLength(length: 100)]
    public string password{get ;set ;}
    [MaxLength(length: 10)]
    [RegularExpression("^([0-9]{10})$", ErrorMessage = "Invalid Mobile Number.")]
    public string mobile1 { get; set; }
    [MaxLength(length: 10)]
    [RegularExpression("^([0-9]{10})$", ErrorMessage = "Invalid Mobile Number.")]
    public string? mobile2 { get; set; }
    public List<string> Addresses { get; set; }
}