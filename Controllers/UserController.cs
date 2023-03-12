namespace UserOnly.Controllers;
public class UserController : ControllerFather
{
    public UserController(ApplicationDbContext context):base(context){}
    [HttpPost(Name = "signUp")]
    public async Task<IActionResult> add_user(UserDTO userDTO)
    {
        var u = new User 
        { 
           name = userDTO.name  , password = userDTO.password ,
           mobile1 = userDTO.mobile1 , mobile2 = userDTO.mobile2
        };
        _context.Add(u);
        var list = new List<Address>();
        foreach(var str in userDTO.Addresses)
        {
            list.Add(new Address()
            {
                address = str ,
                User = u
            }
        );
        }
        _context.Addresses.AddRange(list);
        await _context.SaveChangesAsync();
        return Ok("Ok");
    }
    [HttpGet(Name = "getAll")]
    public async Task<IActionResult> getAll()
    {
        var userAll = await _context.Users.ToListAsync();
        var list = new List<UserDTO>();
        foreach(var user in userAll)
        {
            list.Add
            (
                new UserDTO
                {
                    name = user.name , mobile1 = user.mobile1 , mobile2 = user.mobile2, password = user.password ,
                    Addresses = _context.Addresses.Where(
                        ad => user.Id == ad.UserId).Select(ad=> ad.address).ToList()
                }
            );
        }
        return Ok(list);
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
/*       
 // var userAll = (from user in _context.Users
        //               join adrs in _context.Addresses
        //               on user.Id equals adrs.UserId
        //               select new 
        //               {  
        //                 u_id = user.Id , user_name = user.name , pass = user.password ,
        //                 first_mobile = user.mobile2 , second_mobile = user.mobile2 ,
        //                 address = adrs.address
        //               }).ToList();

        // .Select(us => new AddressDTO
        // {
        //     name = us.name , mobile1 = us.mobile1 , mobile2 = us.mobile2 ,
        //     password = us.password , Address = us.ad
        // }).ToListAsync();

        // var userAll = await _context.Addresses.Include(us => us.User)
        // .Select(us => new AddressDTO
        // {
        //     name = us.User.name , mobile1 = us.User.mobile1 , mobile2 = us.User.mobile2 ,
        //     password = us.User.password , Address = us.address
        // }).ToListAsync();
        // var userAll = await _context.Users.ToListAsync();
        // var adressAll = await _context.Addresses.ToListAsync();
        // var res = userAll.Join(adressAll,user => user.Id , adrs => adrs.UserId , 
        // (user,adrs) => new {
        //     u_id = user.Id , user_name = user.name , 
        //     //pass = user.password ,
        //      first_mobile = user.mobile2 , second_mobile = user.mobile2 ,
        //     address = adrs.address
        // }
        // );

       // var adrs = new Address(){ address = "X" , UserId = 1 };
       //foreach(var user in userAll){
         //  var l = await _context.Addresses.Where(ad => ad.Id == user.Id).ToListAsync();
          // user.Addresses.Add(adrs);
       //}
    //    var innerJoin = strList1.Join(strList2,
    //                   str1 => str1, 
    //                   str2 => str2, 
    //                   (str1, str2) => str1);*/