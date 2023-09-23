using EternalLegacy.API.Common;

namespace EternalLegacy.API.DomainContract
{
    public class LegacyDomainContract
    {
        public int LegacyId { get; set; }
        public LegacyType LegacyType { get; set; }
        public bool IsPublished { get; set; }
        public DateTime OpenCapsuleAt { get; set; }
    }
}
