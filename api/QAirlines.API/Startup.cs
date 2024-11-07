using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using QAirlines.DataAccess.DbContext;


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
            #region Migration Assembly

            services.AddDbContext<QAirlineDbContext>(
                options =>
                    options.UseMySql(
                        Configuration.GetConnectionString("Default"),
                        ServerVersion.AutoDetect(Configuration.GetConnectionString("Default")),
                        builder => builder.MigrationsAssembly("QAirlines.Migrations")
                    )
            );

            #endregion

            services.AddHttpContextAccessor();
            services.AddResponseCaching();
            services.AddControllers();
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
