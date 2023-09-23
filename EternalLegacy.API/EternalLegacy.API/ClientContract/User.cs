namespace EternalLegacy.API.ClientContract
{
    public class User
    {
        public int UserId { get; set; }
        public string UserEmail { get; set; }
        public DateTime CreatedDate { get; set; }
        public bool IsActive { get; set; }
    }
}
