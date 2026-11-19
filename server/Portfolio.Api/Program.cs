using System.Text.Json;
using System.Threading.RateLimiting;
using Portfolio.Api;

var builder = WebApplication.CreateBuilder(args);

// 5 messages per 10 minutes per client IP keeps the inbox file safe from a bot loop.
builder.Services.AddRateLimiter(o =>
{
    o.RejectionStatusCode = StatusCodes.Status429TooManyRequests;
    o.AddPolicy("contact", ctx => RateLimitPartition.GetFixedWindowLimiter(
        ctx.Connection.RemoteIpAddress?.ToString() ?? "unknown",
        _ => new FixedWindowRateLimiterOptions { PermitLimit = 5, Window = TimeSpan.FromMinutes(10) }));
});

var app = builder.Build();

var inbox = Path.GetFullPath(app.Configuration["Contact:InboxPath"] ?? "data/messages.jsonl");
Directory.CreateDirectory(Path.GetDirectoryName(inbox)!);
var inboxLock = new SemaphoreSlim(1, 1);

app.UseRateLimiter();
app.UseDefaultFiles();
app.UseStaticFiles();

// The page's form (system.js) posts multipart FormData and reads only the status code.
app.MapPost("/api/contact", async (HttpRequest request, ILogger<Program> log) =>
{
    if (!request.HasFormContentType) return Results.BadRequest(new { error = "Send the form as form data." });
    var form = await request.ReadFormAsync();
    var message = new ContactMessage(form["name"].ToString(), form["email"].ToString(), form["company"].ToString(), form["message"].ToString());

    var errors = message.Validate();
    if (errors.Count > 0) return Results.ValidationProblem(errors);

    var line = JsonSerializer.Serialize(new { at = DateTimeOffset.UtcNow, message.Name, message.Email, message.Company, message.Message });
    await inboxLock.WaitAsync();
    try { await File.AppendAllTextAsync(inbox, line + Environment.NewLine); }
    finally { inboxLock.Release(); }

    log.LogInformation("Contact message saved to {Inbox}", inbox);
    return Results.Ok(new { ok = true });
})
.DisableAntiforgery()
.RequireRateLimiting("contact");

app.MapFallbackToFile("index.html");

app.Run();
