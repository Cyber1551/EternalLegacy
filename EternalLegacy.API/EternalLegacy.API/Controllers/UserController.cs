using EternalLegacy.API.ClientContract;
using Microsoft.AspNetCore.Mvc;

namespace EternalLegacy.API.Controllers
{
    public class UserController : Controller
    {
        [HttpPost("CreateUser")]
        public IActionResult CreateUser([FromBody] User user)
        {
            user.CreatedDate = DateTime.Now;
            throw new NotImplementedException();
        }
        [HttpGet("GetUserByEmail/{email}")]
        public IActionResult GetUserByEmail(string email)
        {
            // Fetches the user and roles associated with the user
            throw new NotImplementedException();
        }
        [HttpGet("GetUser/{id}")]
        public IActionResult GetUser(int id)
        {
            // Fetches the user and roles associated with the user
            throw new NotImplementedException();
        }

        [HttpDelete("DeleteUser")]
        public IActionResult DeleteUser(int id)
        {
            // this will soft delete the user
            throw new NotImplementedException();
        }
    }
}
