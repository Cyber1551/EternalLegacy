using EternalLegacy.API.Common;

namespace EternalLegacy.API.ClientContract
{
    public class UserRole
    {
        public int UserRoleId { get; set; }
        public int UserId { get; set; }
        public int LegacyId { get; set; }
        public RoleType Role { get; set; }
    }
}
