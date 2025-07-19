using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using QAirlines.Models.Data_Transfer_Objects.S3DTO;
using QAirlines.API.Services;

namespace QAirlines.API;

public class Program
{
    public static void Main(string[] args)
    {
        //var builder = WebApplication.CreateBuilder(args);

        //builder.Services.Configure<AwsCredentials>(builder.Configuration.GetSection("AwsCredentials"));
        //builder.Services.Configure<S3BucketProperties>(builder.Configuration.GetSection("S3BucketProperties"));
        //builder.Services.AddSingleton<S3Service>();
        CreateHostBuilder(args).Build().Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder => webBuilder.UseStartup<Startup>());
}
