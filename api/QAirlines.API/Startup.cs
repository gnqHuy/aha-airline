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

            #endregion

            #region Repositories

            services.AddScoped<IAircraftRepository, AircraftRepository>();
            services.AddScoped<IAirportRepository, AirportRepository>();
            services.AddScoped<ICancellationRepository, CancellationRepository>();
            services.AddScoped<ICityRepository, CityRepository>();
            services.AddScoped<ICountryRepository, CountryRepository>();
            services.AddScoped<IFlightRepository, FlightRepository>();
            services.AddScoped<IFlightRouteRepository, FlightRouteRepository>();

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
            services.AddIdentity<ApplicationUser, ApplicationRole>(
                options => 
                {
                    options.Password.RequireDigit = true;
                    options.Password.RequiredLength = 12;
                    options.Password.RequireUppercase = true;
                    options.Password.RequireLowercase = true;
                    options.Password.RequireNonAlphanumeric = true;
                }).AddEntityFrameworkStores<QAirlineDbContext>();
            //    .AddJsonOptions(options =>
            //{
            //    options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.Preserve;
            //});
            services.AddSwaggerGen();
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
