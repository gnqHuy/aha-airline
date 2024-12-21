using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QAirlines.API.Mapper;
using QAirlines.API.Services;
using QAirlines.Models;
using QAirlines.Models.Data_Transfer_Objects;
using QAirlines.Models.Request;
using QAirlines.Models.User;
using QAirlines.UnitOfWorks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace QAirlines.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FlightRoutesController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly MappingFunctions _mappingFunctions;
        private readonly DistanceCalculation _calculation;

        //private IEnumerable<FlightRouteDTO> Mapper(IEnumerable<FlightRoute> flightRoutes)
        //{
        //    var flightRouteDTOs = flightRoutes
        //        .Where(fr => fr != null)
        //        .Select(flightroute =>
        //        {
        //            var fromAirport = _unitOfWork.Airports.GetById(flightroute.)
        //        });
        //    return flightRouteDTOs;
        //}

        public FlightRoutesController(IUnitOfWork unitOfWork, MappingFunctions mappingFunctions, DistanceCalculation calculation)
        {
            _unitOfWork = unitOfWork;
            _mappingFunctions = mappingFunctions;
            _calculation = calculation;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var flightroutes = await _unitOfWork.FlightRoutes.GetAllAsync();
            if (flightroutes != null)
            {
                return Ok(flightroutes);
            }
            return BadRequest();
        }

        [HttpGet("DTO")]
        //[Authorize(Roles = Role.FlightAdmin)]
        public async Task<IActionResult> GetAllDTO()
        {
            var flightRoutes = await _unitOfWork.FlightRoutes.GetAllAsync();

            if (flightRoutes != null) 
            {
                var flightRouteDTOs = flightRoutes
                    .Where(fr => fr != null)
                    .Select(flightroute => _mappingFunctions.FlightRouteMapper(flightroute)).ToList();
                return Ok(flightRouteDTOs);
            }
            return BadRequest();
        }

        [HttpGet("FromRouteInfo")]
        public async Task<IEnumerable<FlightRouteDTO>> GetFromRequest([FromQuery] FlightRouteRequest request)
        {
            var flightroutes = await _unitOfWork.FlightRoutes.FindRoutesFromRequestAsync(request);
            var flightRouteDTOs = flightroutes
                .Where(fr => fr != null)
                .Select(flightRoute => _mappingFunctions.FlightRouteMapper(flightRoute)).ToList();

            return flightRouteDTOs;
        }

        [HttpPost("Range")]
        public async Task AddFlightRoutes([FromBody] IEnumerable<FlightRoute> routes)
        {
            await _unitOfWork.FlightRoutes.AddRangeAsync(routes);
            _unitOfWork.Commit();
        }

        [HttpPost]
        public IActionResult AddFlightRoute(string fromAirportIATA, string toAirportIATA)
        {
            var request = new FlightRouteRequest
            {
                FromAirportIATA = fromAirportIATA,
                ToAirportIATA = toAirportIATA,
            };

            var fr = _unitOfWork.FlightRoutes.FindRoutesFromRequest(request);
            if (!fr.Any())
            {
                var fromAirport = _unitOfWork.Airports.GetByIATA(fromAirportIATA);
                var toAirport = _unitOfWork.Airports.GetByIATA(toAirportIATA);
                var distance = _calculation.CalculateDistance(fromAirport.Latitude ?? 0, fromAirport.Longitude ?? 0, toAirport.Latitude ?? 0, toAirport.Longitude ?? 0);

                var flightRoute = new FlightRoute
                {
                    FromAirportIATA = fromAirportIATA,
                    ToAirportIATA = toAirportIATA,
                    NoOfFlights = 0,
                    Distance = distance,
                };

                _unitOfWork.FlightRoutes.Add(flightRoute);
                _unitOfWork.Commit();
                return Ok();
            }
            else
            {
                return BadRequest("Flight route existed.");
            }
        }

        [HttpPost("AutoGenerate")]
        public async Task GenerateRoutes()
        {
            var airports = await _unitOfWork.Airports.GetByCountryName("Vietnam");
            long size = airports.LongCount();

            for (int i = 0; i < size; i++)
            {
                for (int j = 0; j < size; j++)
                {
                    if (i == j) continue;

                    var airport1 = airports.ElementAt(i);
                    var airport2 = airports.ElementAt(j);
                    double? lat1 = airport1.Latitude;
                    double? lat2 = airport2.Latitude;
                    double? lon1 = airport1.Longitude;
                    double? lon2 = airport2.Longitude;
                    double distance = _calculation.CalculateDistance(lat1 ?? 0, lon1 ?? 0, lat2 ?? 0, lon2 ?? 0);

                    if (distance > 450)
                    {
                        var flightRoute = new FlightRoute
                        {
                            FromAirportIATA = airport1.IATA,
                            ToAirportIATA = airport2.IATA,
                            NoOfFlights = 0,
                            Distance = distance,
                        };
                        _unitOfWork.FlightRoutes.Add(flightRoute);
                    }
                }
            }
            _unitOfWork.Commit();
        }

        [HttpPut("NoOfFlights")]
        public async Task<IActionResult> UpdateNoOfFlights([FromQuery] FlightRouteRequest request, [FromQuery] int amount)
        {
            var flightroute = await _unitOfWork.FlightRoutes.UpdateNoOfFlights(request, amount);

            if (flightroute != null)
            {
                _unitOfWork.Commit();
                return Ok(flightroute);
            }
            return BadRequest("Cannot find route");
        }
    }
}
