using EternalLegacy.API.Common;

namespace EternalLegacy.API.ClientContract
{
    public class LegacyContent
    {
        public int LegacyContentId { get; set; }
        public int LegacyId { get; set; }
        public int Order { get; set; }
        public string ContentId { get; set; }
        public string Caption { get; set; }
        public DateType DateType { get; set; }
        public DateTime CreatedDateTime { get; set; }
    }
}
