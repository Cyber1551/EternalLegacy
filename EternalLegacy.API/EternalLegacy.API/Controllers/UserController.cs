using EternalLegacy.API.ClientContract;
using EternalLegacy.API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace EternalLegacy.API.Controllers
{
    public class UserController : Controller
    {
        public IConfiguration _configuration { get; }
        public UserRepository _userRepository { get; set; }

        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
            _userRepository = new UserRepository(configuration);
        }

        [HttpPost("CreateUser")]
        public async Task<IActionResult> CreateUser([FromBody] User user)
        {
            user.CreatedDate = DateTime.Now;
            var result = await _userRepository.CreateUser(user);
            return Ok(result);
        }
        [HttpGet("GetUserByEmail/{email}")]
        public async Task<IActionResult> GetUserByEmail(string email)
        {
            // Fetches the user and roles associated with the user
            var result = await _userRepository.GetUserByEmail(email);
            return Ok(result);
        }
        [HttpGet("GetUser/{id}")]
        public async  Task<IActionResult> GetUser(int id)
        {
            // Fetches the user and roles associated with the user
            var result = await _userRepository.GetUserByUserId(id);
            return Ok(result);
        }

        [HttpDelete("DeleteUser")]
        public IActionResult DeleteUser(int id)
        {
            // this will soft delete the user
            throw new NotImplementedException();
        }
    }
}
