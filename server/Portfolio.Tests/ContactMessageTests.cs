using Portfolio.Api;

namespace Portfolio.Tests;

public class ContactMessageTests
{
    private static ContactMessage Valid() => new("Aisyah", "aisyah@company.com", "", "We have a .NET backend role open.");

    [Fact]
    public void Accepts_a_complete_message() => Assert.Empty(Valid().Validate());

    [Theory]
    [InlineData("", "a@b.com", "Long enough message", "name")]
    [InlineData("Ali", "not-an-email", "Long enough message", "email")]
    [InlineData("Ali", "ali@localhost", "Long enough message", "email")]
    [InlineData("Ali", "ali@b.com", "short", "message")]
    public void Rejects_bad_field(string name, string email, string message, string field)
    {
        var errors = new ContactMessage(name, email, "", message).Validate();
        Assert.Equal([field], errors.Keys);
    }

    [Fact]
    public void Rejects_oversized_message() =>
        Assert.Contains("message", (Valid() with { Message = new string('x', 4001) }).Validate().Keys);
}
