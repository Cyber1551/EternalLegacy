namespace EternalLegacy.API.DomainContract;

public class UserDomainContract
{
    public int UserId { get; set; }
    public string Email { get; set; }
    public DateTime CreatedDate { get; set; }
    public bool IsActive { get; set; }
}