namespace UserOnly.Controllers;
public class AddressController : ControllerFather
{
    public AddressController(ApplicationDbContext context):base(context){}
    [HttpPost(Name = "add_address")]
    public async Task<IActionResult> add_address(AddressDTO adrsDTO)
    {
        var user = _context.Users.Find(adrsDTO.User_id);
        var list = new List<Address>();
        foreach(var str in adrsDTO.Address)
        {
            list.Add(
                new Address()
                {
                    address = str ,
                    User = user
                }
            );
        }
        _context.Addresses.AddRange(list);
        await _context.SaveChangesAsync();
        return Ok("Ok");
    }
    [HttpGet(Name = "getAllAdderess")]
    public async Task<IActionResult> getAllAdderess(int User_id)
    {
        var list = _context.Addresses.Where(adrs => adrs.UserId == User_id);
        return Ok(list);
    }
}