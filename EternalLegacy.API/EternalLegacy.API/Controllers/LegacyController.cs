using EternalLegacy.API.ClientContract;
using EternalLegacy.API.Repository;
using Microsoft.AspNetCore.Mvc;

namespace EternalLegacy.API.Controllers
{
    public class LegacyController : Controller
    {
        public IConfiguration _configuration { get; }
        public LegacyRepository _legacyRepository { get; set; }

        public LegacyController(IConfiguration configuration)
        {
            _configuration = configuration;
            _legacyRepository = new LegacyRepository(configuration);
        }

        [HttpGet("GetLegaciesByLegacyId/{id}")]
        public async Task<IActionResult> GetLegacyByLegacyId(int id)
        {
            var result = await _legacyRepository.GetLegacyByLegacyId(id);
            return Ok(result);
        }

        [HttpGet("GetLegaciesByUserEmail/{email}")]
        public async Task<IActionResult> GetLegaciesByUserId(string email)
        {
            var result = await _legacyRepository.GetLegaciesByUserEmail(email);
            return Ok(result);
        }

        [HttpPost("Create")]
        public async Task<IActionResult> CreateNewLegacy([FromBody] Legacy legacy)
        {
            var result = await _legacyRepository.CreateNewLegacy(legacy);
            return Ok(result);
        }

        [HttpGet("GetLegacyContentByLegacyId/{id}")]
        public async Task<IActionResult> GetLegacyContentByLegacyId(int id)
        {
            var result = await _legacyRepository.GetLegacyContentByLegacyId(id);
            return Ok(result);
        }



    }
}
