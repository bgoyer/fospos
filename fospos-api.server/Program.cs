using System.Net;
using Microsoft.EntityFrameworkCore;
using FosposApi.Server.Database;
using Serilog;

Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .CreateLogger();

try
{
    var builder = WebApplication.CreateBuilder(args);

    // Serilog
    builder.Host.UseSerilog((ctx, config) =>
    {
        config.WriteTo.Console();
        config.ReadFrom.Configuration(ctx.Configuration);
    });

    // Swagger 
    builder.Services.AddEndpointsApiExplorer();
    builder.Services.AddOpenApiDocument(config =>
    {
        config.DocumentName = "FOS PoS Api";
        config.Title = "Free, Open-Source Point of Sale API v1";
        config.Version = "v1";
    });
    builder.Services.AddSwaggerGen();

    // Add services to the container.
    builder.Services.AddControllers();

    // Configure DbContext
    var cnn = builder.Configuration.GetConnectionString("DefaultConnection");
    builder.Services.AddDbContext<PosDbContext>(options => options.UseSqlite(cnn));
    builder.Services.AddDatabaseDeveloperPageExceptionFilter();

    // Configure Webserver
    builder.Services.AddCors(options => {
        options.AddDefaultPolicy(builder => {
            builder.AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
        });
    });
    // builder.WebHost.UseKestrel(options => {
    //     options.Listen(IPAddress.Any, 8000);
    //     options.Listen(IPAddress.Any, 8001, opts => {
    //         opts.UseHttps("../certs/localhost.pfx", "12345");
    //     });
    // });

    var app = builder.Build();

    // Use Swagger Middleware
    app.UseOpenApi();
    app.UseSwaggerUi(config =>
    {
        config.DocumentTitle = "Point of Sale API";
        config.Path = "/swagger";
        config.DocumentPath = "/swagger/{documentName}/swagger.json";
        config.DocExpansion = "list";
    });

    // Use the HTTP request pipeline.
    app.UseHttpsRedirection();
    app.UseCors();
    app.UseAuthorization();
    app.MapControllers();
    app.MapStaticAssets();
    
    if(app.Environment.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }
    else
    {
        app.UseExceptionHandler("/Home/Error");
        app.UseHsts();
        app.MapFallbackToFile("index.html");
    }

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