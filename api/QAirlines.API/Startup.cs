using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using QAirlines.DataAccess.DbContext;
using QAirlines.Repositories.Generic;
using QAirlines.Repositories.Custom.Interfaces;
using QAirlines.Repositories.Custom.Repositories;
using QAirlines.Models;
using System;
using QAirlines.UnitOfWorks;
using QAirlines.API.Mapper;
using QAirlines.Models.User;
using QAirlines.API.Services;
using QAirlines.DataAccess.Store;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.OpenApi.Models;
using System.Collections.Generic;
using QAirlines.Models.Data_Transfer_Objects.S3DTO;


namespace QAirlines.API
{
    public class Startup
    {
        public IConfiguration Configuration { get; set; }

        public Startup(IConfiguration configuration) 
        {
            Configuration = configuration;
        }

        public void ConfigureServices(IServiceCollection services)
        {
            #region DbContext

            services.AddDbContext<QAirlineDbContext>(
                options =>
                    options
                    .UseMySql(
                        Configuration.GetConnectionString("Default"),
                        ServerVersion.AutoDetect(Configuration.GetConnectionString("Default")),
                        builder => builder.MigrationsAssembly("QAirlines.Migrations")
                    )
                    .EnableSensitiveDataLogging()
            );

            #endregion

            #region Services

            services.AddScoped<DistanceCalculation>();
            services.AddScoped<FlightService>();
            services.AddScoped<AuthService>();
            services.AddScoped<TicketService>();
            services.AddScoped<RandomStringGenerator>();

            #endregion

            #region Repositories

            services.AddScoped<IAircraftRepository, AircraftRepository>();
            services.AddScoped<IAirportRepository, AirportRepository>();
            services.AddScoped<ICancellationRepository, CancellationRepository>();
            services.AddScoped<ICityRepository, CityRepository>();
            services.AddScoped<ICountryRepository, CountryRepository>();
            services.AddScoped<IFlightRepository, FlightRepository>();
            services.AddScoped<IFlightRouteRepository, FlightRouteRepository>();
            services.AddScoped<ISeatRepository, SeatRepository>();
            services.AddScoped<ITicketRepository, TicketRepository>();
            services.AddScoped<IReservationRepository, ReservationRepository>();

            #endregion

            #region Mapper

            services.AddAutoMapper(config => config.AddProfile<MappingProfile>(), typeof(Startup));
            services.AddScoped<MappingFunctions>();

            #endregion

            #region Unit Of Work

            services.AddScoped<IUnitOfWork, UnitOfWork>();

            #endregion

            services.AddHttpContextAccessor();
            services.AddResponseCaching();
            services.AddControllers();
            services.AddSwaggerGen(options =>
            {
                options.AddSecurityDefinition("Bearer", new Microsoft.OpenApi.Models.OpenApiSecurityScheme
                {
                    Name = "Authorization",
                    In = Microsoft.OpenApi.Models.ParameterLocation.Header,
                    Description = "Please enter your token with this format: ''Bearer YOUR_TOKEN''",
                    Type = Microsoft.OpenApi.Models.SecuritySchemeType.ApiKey,
                    BearerFormat = "JWT",
                    Scheme = "bearer"
                });
                options.AddSecurityRequirement(new Microsoft.OpenApi.Models.OpenApiSecurityRequirement
                {
                    {
                        new OpenApiSecurityScheme
                        {
                            Name = "Bearer",
                            In = ParameterLocation.Header,
                            Reference = new OpenApiReference
                            {
                                Id = "Bearer",
                                Type = ReferenceType.SecurityScheme
                            }
                        },
                        new List<string>()
                    }
                });
             });
            services
                .AddIdentity<ApplicationUser, ApplicationRole>(
                    options => 
                    {
                        options.Password.RequireDigit = true;
                        options.Password.RequiredLength = 12;
                        options.Password.RequireUppercase = true;
                        options.Password.RequireLowercase = true;
                        options.Password.RequireNonAlphanumeric = true;
                    })
                .AddUserStore<ApplicationUserStore>()
                .AddRoleStore<ApplicationRoleStore>()
                .AddEntityFrameworkStores<QAirlineDbContext>()
                .AddDefaultTokenProviders();

            services.AddScoped<IUserStore<ApplicationUser>, ApplicationUserStore>();
            services.AddScoped<IRoleStore<ApplicationRole>, ApplicationRoleStore>();

            services.AddAuthentication(options =>
            {
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(options =>
            {
                options.SaveToken = true;
                options.RequireHttpsMetadata = false;
                options.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidIssuer = Configuration["JWT:ValidIssuer"],
                    ValidAudience = Configuration["JWT:ValidAudience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["JWT:Secret"]))
                };
            });
            services.Configure<AwsCredentials>(Configuration.GetSection("AwsCredentials"));
            services.Configure<S3BucketProperties>(Configuration.GetSection("S3BucketProperties"));
            services.AddSingleton<S3Service>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            string[] origins = Configuration.GetSection("AllowedOrigins").Value!.Split(",");

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            if (origins.Contains("*"))
            {
                app.UseCors(builder => builder
                   .SetIsOriginAllowed(origin => true)
                   .AllowAnyHeader()
                   .AllowAnyMethod()
                   .AllowCredentials()
                );
            }
            else
            {
                app.UseCors(builder => builder
                    .SetIsOriginAllowedToAllowWildcardSubdomains()
                    .WithOrigins(origins)
                    .AllowAnyHeader()
                    .AllowAnyMethod()
                    .AllowCredentials());
            }

            app.UseHttpsRedirection();
            app.UseSwagger();
            app.UseSwaggerUI();

            app.UseRouting();
            
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints => { 
                endpoints.MapControllers();
            });
        }
    }
}
