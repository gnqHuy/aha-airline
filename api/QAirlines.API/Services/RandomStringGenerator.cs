using System.Security.Cryptography;

namespace QAirlines.API.Services
{
    public class RandomStringGenerator
    {
        public string GenerateRandomString()
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            char[] result = new char[6];
            byte[] randomBytes = new byte[6];

            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(randomBytes);
            }

            for (int i = 0; i < result.Length; i++)
            {
                result[i] = chars[randomBytes[i] % chars.Length];
            }

            return new string(result);
        }
    }
}
