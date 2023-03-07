using Microsoft.AspNetCore.Mvc;
namespace UserOnly.Controllers;
[ApiController]
[Route("[controller]")]
public class ControllerFather : ControllerBase
{
    protected readonly ApplicationDbContext _context;
    public ControllerFather(ApplicationDbContext context)
    {
         _context = context;
    }
}