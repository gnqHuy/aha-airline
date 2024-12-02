using AutoMapper;
using QAirlines.Models;
using QAirlines.Models.Data_Transfer_Objects;

namespace QAirlines.API.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile() 
        {
            CreateMap<Airport, AirportDTO>();
            CreateMap<Aircraft, AircraftDTO>();
            CreateMap<Flight, FlightDTO>();
            CreateMap<FlightRoute, FlightRouteDTO>();
            CreateMap<City, CityDTO>();
        }
    }
}
