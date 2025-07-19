using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Models.Data_Transfer_Objects.S3DTO
{
    public class UploadFileResponse
    {
        public int HttpStatusCode { get; set; }
        public string FileURL { get; set; }
        public string Error { get; set; }
    }
}
