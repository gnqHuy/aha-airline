using QAirlines.Models.Data_Transfer_Objects;
using QAirlines.Models;
using QAirlines.UnitOfWorks;
using AutoMapper;

namespace QAirlines.API.Mapper
{
    public class MappingFunctions
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;

        public MappingFunctions(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }
        public AirportDTO AirportMapper(Airport airport)
        {
            var city = _unitOfWork.Cities.GetById(airport.CityId);
            return new AirportDTO
            {
                IATA = airport.IATA,
                Name = airport.Name,
                City = _mapper.Map<CityDTO>(city),
            };
        }

        public FlightRouteDTO FlightRouteMapper(FlightRoute flightRoute)
        {
            var fromAirport = _unitOfWork.Airports.GetByIATA(flightRoute.FromAirportIATA);
            var toAirport = _unitOfWork.Airports.GetByIATA(flightRoute.ToAirportIATA);
            var fromAirportDTO = AirportMapper(fromAirport);
            var toAirportDTO = AirportMapper(toAirport);

            return new FlightRouteDTO
            {
                Id = flightRoute.Id,
                FromAirportIATA = flightRoute.FromAirportIATA,
                ToAirportIATA = flightRoute.ToAirportIATA,
                FromAirport = fromAirportDTO,
                ToAirport = toAirportDTO,
                NoOfFlights = flightRoute.NoOfFlights,
                Distance = flightRoute.Distance,
            };
        }

        public FlightDTO FlightMapper(Flight flight)
        {
            var aircraft = _unitOfWork.Aircrafts.GetById(flight.AircraftId);
            var aircraftDTO = _mapper.Map<AircraftDTO>(aircraft);
            var flightRoute = _unitOfWork.FlightRoutes.GetById(flight.FlightRouteId);
            var flightRouteDTO = FlightRouteMapper(flightRoute);

            return new FlightDTO
            {
                Id = flightRoute.Id,
                Aircraft = aircraftDTO,
                FlightRoute = flightRouteDTO,
                BoardingTime = flight.BoardingTime,
                DepartureTime = flight.DepartureTime,
                ArrivalTime = flight.ArrivalTime,
                BoardingGate = flight.BoardingGate,
                EconomyPrice = flight.EconomyPrice,
                BusinessPrice = flight.BusinessPrice,
                Status = flight.Status
            };
        }
    }
}
