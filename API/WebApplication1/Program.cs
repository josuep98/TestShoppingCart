using Microsoft.OpenApi.Models;
using Serilog;
using WebApplication1;

Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(new ConfigurationBuilder()
        .AddJsonFile("appsettings.json")
        .Build())
    .Enrich.FromLogContext()
    .CreateLogger();

Log.Information("Inicia la aplicación");

var builder = WebApplication.CreateBuilder(args);

builder.Host.UseSerilog();

// Add services to the container.
builder.Services.AddServices();

builder.Services.AddControllers();

#region Swagger
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "API Products",
        Version = "v1",
        Description = "API para gestión de productos",
        Contact = new OpenApiContact
        {
            Name = "Josue Paucar",
            Email = "josue_dpg@hotmail.com"
        }
    });
    c.EnableAnnotations();
});
#endregion

#region CORS
var allowedOrigins = builder.Configuration.GetSection("AllowedOrigins").Get<string[]>();
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy", policy =>
    {
        policy.WithOrigins(allowedOrigins ?? Array.Empty<string>())
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Mi API v1");
    });
}

app.UseAuthorization();

app.UseCors("CorsPolicy");

app.MapControllers();

app.Run();