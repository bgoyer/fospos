using Microsoft.EntityFrameworkCore;
using FosposApi.Server.Database;
using Serilog;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();

try
{
    var builder = WebApplication.CreateBuilder(args);

    builder.Host.UseSerilog((ctx, config) =>
    {
        config.WriteTo.Console();
        config.ReadFrom.Configuration(ctx.Configuration);
    });

    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddOpenApiDocument(config =>
    {
        config.DocumentName = "FOS PoS Api";
        config.Title = "Free, Open-Source Point of Sale API v1";
        config.Version = "v1";
    });

    // Add services to the container.
    builder.Services.AddControllers();
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddSwaggerGen();

    // Configure DbContext
    var cnn = builder.Configuration.GetConnectionString("DefaultConnection");
    builder.Services.AddDbContext<PosDbContext>(options => options.UseSqlite(cnn));
    builder.Services.AddDatabaseDeveloperPageExceptionFilter();

    var app = builder.Build();

    // Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.UseOpenApi();
        app.UseSwaggerUi(config =>
        {
            config.DocumentTitle = "Point of Sale API";
            config.Path = "/swagger";
            config.DocumentPath = "/swagger/{documentName}/swagger.json";
            config.DocExpansion = "list";
        });
    }

    app.UseHttpsRedirection();

    app.UseAuthorization();

    app.MapControllers();

    app.Run();
}
catch (Exception ex)
{
    Log.Fatal(ex, "server terminated unexpectedly");
}
finally
{
    Log.CloseAndFlush();
}