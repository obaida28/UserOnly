namespace UserOnly.Controllers;
public class ProductController : ControllerFather
{
    public ProductController(ApplicationDbContext context):base(context){}
    [HttpPost(Name = "signUp1")]
    public async Task<IActionResult> add_prod()
    {
        ProductBase g1 = new PGroup(){
            name = "g1" , state = "b"
        };
        ProductBase g2 = new PGroup(){
            name = "g2" , state = "b"
        };
        ProductBase g3 = new PGroup(){
            name = "g3" , state = "b"
        };
        g1.add(g2);
        ProductBase p1 = new Product(){
            name = "p1" , state = "b"
        };
        g1.add(p1);
        ProductBase p2 = new Product(){
            name = "p2" , state = "b"
        };
        ProductBase p3 = new Product(){
            name = "p3" , state = "b"
        };
        g2.add(p2);
        g2.add(p3);
        var list = new List<ProductBase>()
        {
            g1,g2,g3,p1,p2,p3
        };
        _context.AddRange(list);
        await _context.SaveChangesAsync();
        return Ok("X");
    }
//     [HttpGet(Name = "getAll1")]
//     public IActionResult getAll1()
//     {
//         // var userAll = await _context.Users.Include(u => u.Addresses).ToListAsync();
//         // return Ok(userAll);
//         IProduct g1 = new PGroup(){
//             name = "a" , state = "b"
//         };
//         IProduct p1 = new Product(){
//             name = "a1" , state = "b"
//         };
//         IProduct p2 = new Product(){
//             name = "a2" , state = "b"
//         };
//         IProduct p3 = new Product(){
//             name = "a2" , state = "b"
//         };
//         IProduct p4 = new Product(){
//             name = "a2" , state = "b"
//         };
//         IProduct g2 = new PGroup(){
//             name = "a" , state = "b"
//         };
//         g1.add(p1);
//         g1.add(p2);
//         g1.add(p3);
//         g2.add(p4);
//         g2.add(g1);
//         _context.Add(p1);
//         _context.Add(p2);
//         _context.Add(p3);
//         _context.Add(p4);
//         _context.Add(g1);
//         _context.Add(g2);
//         _context.SaveChanges();
//         return Ok(g2.getCount());//
// //return(Ok("X"));
//         // var userAll = await _context.Users.ToListAsync();
//         // var list = new List<UserDTO>();
//         // foreach(var user in userAll)
//         // {
//         //     list.Add
//         //     (
//         //         new UserDTO
//         //         {
//         //             u_id = user.Id , name = user.name , mobile1 = user.mobile1 , mobile2 = user.mobile2, 
//         //             password = user.password ,
//         //             Addresses = _context.Addresses.Where(
//         //                 ad => user.Id == ad.UserId).Select(ad=> ad.address).ToList()
//         //         }
//         //     );
//         // }
//         // return Ok(list);
//     }
//     // [HttpGet(template: "GetFilter")]
//     // public async Task<IActionResult> GetFilter(string start)
//     // {
//     //     var emp = await deliveries.Where(e => e.name.IndexOf(start) == 0).ToListAsync();
//     //     if(emp.ToArray().Length == 0)
//     //         return NotFound();
//     //     return Ok(emp);
//     // }
//     // [HttpDelete(template: "DeleteEmp")]
//     // public async Task<IActionResult> DeleteEmps()
//     // {
//     //     var emp = await deliveries.ToListAsync();
//     //     _context.Employees.RemoveRange(emp);
//     //     _context.SaveChanges();
//     //     return Ok();    
    
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

    [HttpGet(Name = "getTree")]
    public async Task<IActionResult> getTree()
    {
        //var all = await _context.Groups.Include(g => (g as ProductBase).Products).ToListAsync();
        //var all = await _context.Groups.Include(g => g.GroupParent).ToListAsync();
        var list = new List<ProductDTO>();
        var allGroups = await _context.Groups.ToListAsync();
        List<PGroup> childList = allGroups.Where(g => g.GroupParent == null).ToList();
        IEnumerable<ProductBase> parentList = childList; 

        parentList.ToList().ForEach(li => list.Add(
            new ProductDTO(){
                ele = li,
                sons = new List<ProductBase>()
            }
        ));

        list.ForEach(li => li.sons.AddRange(
            allGroups.Where(g => g.GroupParent == li.ele).ToList()
        ));


        var allProducts = await _context.Products.ToListAsync();
        list.ForEach(li => li.sons.AddRange(
            allProducts.Where(p => p.GroupParent == li.ele).ToList()
        ));

        /**/
        // var pall = await _context.Products.ToListAsync();
        // foreach(var a in all)
        // {
        //     a.addRange
        //     (
        //        pall.Where(p => p.GroupParent == a).ToList()
        //     );
        // }

        // var q = (from all in v.A join b in v.B
        // on a.i equals b.j
        // where a.k == "aaa" && a.h == 0
        // select new {T = a.i, Z = a.z })
        // .AsEnumerable()
        // .Select(x => new { T = x.T, S = someMethod(x.Z).ToString() })
       // var all_ = all.Where(p => p.getCount() == 0);
        return Ok(list);
    }
}