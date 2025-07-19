using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Data_Transfer_Objects.S3DTO
{
    public class S3BucketProperties
    {
        public string BucketName { get; set; } = string.Empty;
        public string Region { get; set; } = string.Empty;
    }

}
