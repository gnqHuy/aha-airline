using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Data_Transfer_Objects.S3DTO
{
    public class AwsCredentials
    {
        public string ACCESS_KEY_ID { get; set; }
        public string SECRET_ACCESS_KEY { get; set; }
    }
}
