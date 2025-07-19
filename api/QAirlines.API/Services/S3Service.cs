using Amazon.S3;
using Amazon.S3.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using QAirlines.Models.Data_Transfer_Objects.S3DTO;
using System;
using System.IO;
using System.Threading.Tasks;

namespace QAirlines.API.Services
{
    public class S3Service
    {
        private readonly IAmazonS3 _client;
        private readonly S3BucketProperties _bucketProperties;


        public S3Service(IOptions<AwsCredentials> credentials, IOptions<S3BucketProperties> bucketOptions)
        {
            var region = bucketOptions.Value.Region;
            var bucket = bucketOptions.Value.BucketName;

            Console.WriteLine($"[S3Service] Region: {region}");
            Console.WriteLine($"[S3Service] Bucket: {bucket}");

            Console.WriteLine($"[S3Service] Region: {credentials.Value.ACCESS_KEY_ID}");
            Console.WriteLine($"[S3Service] Bucket: {credentials.Value.SECRET_ACCESS_KEY}");
            _client = new AmazonS3Client(
                credentials.Value.ACCESS_KEY_ID,
                credentials.Value.SECRET_ACCESS_KEY,
                new AmazonS3Config
                {
                    RegionEndpoint = Amazon.RegionEndpoint.GetBySystemName(bucketOptions.Value.Region)
                });

            _bucketProperties = bucketOptions.Value;
        }

        public async Task<string> UploadFileAsync(IFormFile file, string cityName)
        {
            var fileExtension = Path.GetExtension(file.FileName);

            var fileName = cityName
                .Trim()
                .ToLower()
                .Replace(" ", "-"); 

            var fileKey = $"{fileName}{fileExtension}";

            using var stream = new MemoryStream();
            await file.CopyToAsync(stream);
            stream.Position = 0;

            var request = new PutObjectRequest
            {
                BucketName = _bucketProperties.BucketName,
                InputStream = stream,
                Key = fileKey,
                ContentType = file.ContentType
            };

            var response = await _client.PutObjectAsync(request);

            if (response.HttpStatusCode == System.Net.HttpStatusCode.OK)
            {
                return $"https://{_bucketProperties.BucketName}.s3.{_bucketProperties.Region}.amazonaws.com/{fileKey}";
            }

            throw new Exception("Upload failed");
        }
    }
}
