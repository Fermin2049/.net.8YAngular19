using Microsoft.EntityFrameworkCore;
using Scalar.AspNetCore;
using webApiCurso.Context;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectioString = builder.Configuration.GetConnectionString("conection");

builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connectioString));

//Configure cors
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin", policy =>
        {
        policy.WithOrigins("http://localhost:4200")
               .AllowAnyHeader()
               .AllowAnyMethod();
});
});

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapScalarApiReference();
    app.MapOpenApi();
}

app.UseCors("AllowSpecificOrigin");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
