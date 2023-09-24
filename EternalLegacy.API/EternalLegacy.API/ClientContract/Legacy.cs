using EternalLegacy.API.Common;

namespace EternalLegacy.API.ClientContract
{
    public class Legacy
    {
        public int LegacyId { get; set; }
        public string Name { get; set; }
        public LegacyType LegacyType { get; set; }
        public bool IsPublished { get; set; }
        public DateTime? OpenDate { get; set; }
    }
}
