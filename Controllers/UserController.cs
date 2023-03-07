namespace UserOnly.Controllers;
public class UserController : ControllerFather
{
    public UserController(ApplicationDbContext context):base(context){}
    [HttpPost(Name = "signUp")]
    public async Task<IActionResult> addnew(UserDTO userDTO)
    {
        var u = new User 
        { 
           name = userDTO.name  , password = userDTO.password ,
            mobile1 = userDTO.mobile1 , mobile2 = userDTO.mobile2
        };
        _context.Add(u);
        foreach (var ad in userDTO.Addresses)
        {
            var adrs = new Address()
            {
                address = ad ,
                User = u
            };
            _context.Addresses.Add(adrs);
        }
        await _context.SaveChangesAsync();
        return Ok("Ok");
    }


    [HttpGet(Name = "getAll")]
    public async Task<IActionResult> getAll()
    {
        var userAll = await _context.Users.ToListAsync();
        var adressAll = await _context.Addresses.ToListAsync();
        var res = userAll.Join(adressAll,user => user.Id , adrs => adrs.UserId , 
        (user,adrs) => new {
            u_id = user.Id , user_name = user.name , 
            //pass = user.password ,
             first_mobile = user.mobile2 , second_mobile = user.mobile2 ,
            address = adrs.address
        }
        );

       // var adrs = new Address(){ address = "X" , UserId = 1 };
       //foreach(var user in userAll){
         //  var l = await _context.Addresses.Where(ad => ad.Id == user.Id).ToListAsync();
          // user.Addresses.Add(adrs);
       //}
    //    var innerJoin = strList1.Join(strList2,
    //                   str1 => str1, 
    //                   str2 => str2, 
    //                   (str1, str2) => str1);
        return Ok(res);
    }
    
    // [HttpGet(template: "GetFilter")]
    // public async Task<IActionResult> GetFilter(string start)
    // {
    //     var emp = await deliveries.Where(e => e.name.IndexOf(start) == 0).ToListAsync();
    //     if(emp.ToArray().Length == 0)
    //         return NotFound();
    //     return Ok(emp);
    // }
    // [HttpDelete(template: "DeleteEmp")]
    // public async Task<IActionResult> DeleteEmps()
    // {
    //     var emp = await deliveries.ToListAsync();
    //     _context.Employees.RemoveRange(emp);
    //     _context.SaveChanges();
    //     return Ok();
    // }
}