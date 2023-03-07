public class User{
    public int Id { get; set; }
    [MaxLength(length: 100)]
    public string name { get; set; }
    // the mapped-to-column property 
    // protected virtual string PasswordStored{get ;set ;}
    // [NotMapped]
    // public string Password
    // {
    //     get { return Decrypt(PasswordStored); }
    //     set { PasswordStored = Encrypt(value); }
    // }
    [MaxLength(length: 100)]
    public string password{get ;set ;}
    [MaxLength(length: 10)]
    [RegularExpression("^([0-9]{10})$", ErrorMessage = "Invalid Mobile Number.")]
    public string mobile1 { get; set; }
    [MaxLength(length: 10)]
    [RegularExpression("^([0-9]{10})$", ErrorMessage = "Invalid Mobile Number.")]
    public string? mobile2 { get; set; }
    public List<Address> Addresses { get; set; }
}