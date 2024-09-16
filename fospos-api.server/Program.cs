using Microsoft.EntityFrameworkCore;
using Serilog;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();

try
{
    var builder = WebApplication.CreateBuilder(args);

    builder.Host.UseSerilog((ctx, config) => { 
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
    builder.Services.AddDbContext<PosDb>(opt => opt.UseInMemoryDatabase("PosDb"));
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

    // Register controllers
    ItemDetailsController.Configure(app);
    OrdersController.Configure(app);
    UsersController.Configure(app);

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