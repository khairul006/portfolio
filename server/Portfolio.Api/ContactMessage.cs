using System.Net.Mail;

namespace Portfolio.Api;

public sealed record ContactMessage(string Name, string Email, string Company, string Message)
{
    // Keys match the form's field names so the page could show each error under its field.
    public Dictionary<string, string[]> Validate()
    {
        var errors = new Dictionary<string, string[]>();
        if (string.IsNullOrWhiteSpace(Name) || Name.Length > 100)
            errors["name"] = ["Write your name, up to 100 characters."];
        if (Email.Length > 200 || !MailAddress.TryCreate(Email.Trim(), out var mail) || !mail.Host.Contains('.'))
            errors["email"] = ["Write an email address with an @, like name@company.com."];
        if (Company.Length > 120)
            errors["company"] = ["Keep the company name under 120 characters."];
        if (string.IsNullOrWhiteSpace(Message) || Message.Trim().Length < 10 || Message.Length > 4000)
            errors["message"] = ["Write a message of 10 to 4,000 characters."];
        return errors;
    }
}
