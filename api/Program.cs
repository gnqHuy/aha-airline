var builder = WebApplication.CreateBuilder(args);
string[] origins = builder.Configuration.GetSection("AllowedOrigins").Value.Split(",");
string CORS_policy = "_CORS_policy";

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: CORS_policy,
        policy =>
        {
            if (origins.Contains("*"))
            {
                policy
                    .AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
            } else
            {
                policy
                    .WithOrigins(origins)
                    .AllowAnyHeader()
                    .AllowAnyMethod();
            }
        });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(CORS_policy);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
