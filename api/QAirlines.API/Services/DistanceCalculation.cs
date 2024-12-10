using System;

namespace QAirlines.API.Services
{
    public class DistanceCalculation
    {
        public double CalculateDistance(double lat1, double lon1, double lat2, double lon2)
        {
            const double EarthRadiusKm = 6371.0; // Earth's radius in kilometers

            // Convert latitude and longitude from degrees to radians
            double lat1Rad = DegreesToRadians(lat1);
            double lon1Rad = DegreesToRadians(lon1);
            double lat2Rad = DegreesToRadians(lat2);
            double lon2Rad = DegreesToRadians(lon2);

            // Calculate the differences between latitudes and longitudes
            double deltaLat = lat2Rad - lat1Rad;
            double deltaLon = lon2Rad - lon1Rad;

            // Apply the Haversine formula
            double a = Math.Sin(deltaLat / 2) * Math.Sin(deltaLat / 2) +
                       Math.Cos(lat1Rad) * Math.Cos(lat2Rad) *
                       Math.Sin(deltaLon / 2) * Math.Sin(deltaLon / 2);
            double c = 2 * Math.Atan2(Math.Sqrt(a), Math.Sqrt(1 - a));

            return EarthRadiusKm * c;
        }

        private static double DegreesToRadians(double degrees)
        {
            return degrees * Math.PI / 180.0;
        }
    }
}
