using EternalLegacy.API.Common;

namespace EternalLegacy.API.DomainContract
{
    public class UserRoleDomainContract
    {
        public int UserRoleId { get; set; }
        public int UserId { get; set; }
        public int LegacyId { get; set; }
        public RoleType Role { get; set; }
    }
}
