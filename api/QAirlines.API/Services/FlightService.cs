using Microsoft.VisualBasic;
using QAirlines.API.Mapper;
using QAirlines.Models;
using QAirlines.Models.Enums;
using QAirlines.Models.Request;
using QAirlines.Models.Response;
using QAirlines.UnitOfWorks;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace QAirlines.API.Services
{
    public class FlightService
    {
        private const double operationCost = 1.3;
        private const double businessClassCoefficent = 1.5;
        private readonly IUnitOfWork _unitOfWork;
        private readonly MappingFunctions _mappingFunctions;

        public FlightService(IUnitOfWork unitOfWork, MappingFunctions mappingFunctions)
        {
            _unitOfWork = unitOfWork;
            _mappingFunctions = mappingFunctions;
        }

        #region DateTime Related Functions
        private DateTime RoundTime(DateTime dateTime)
        {
            int totalMinutes = (int)dateTime.TimeOfDay.TotalMinutes;
            int remainder = totalMinutes % 5;
            int roundedMinutes = remainder >= 3 ? totalMinutes + (5 - remainder) : totalMinutes - remainder;

            return dateTime.Date.AddMinutes(roundedMinutes);
        }

        private DateTime GetBoardingTime(DateTime dateTime)
        {
            return dateTime.AddMinutes(30);
        }

        private DateTime GetDepartureTime(DateTime dateTime)
        {
            return dateTime.AddHours(1);
        }

        private DateTime GetArrivalTime(DateTime departureTime, double distance)
        {
            const double averageSpeed = 800;
            double travelTime = distance / averageSpeed;

            return departureTime.AddHours(travelTime);
        }
        #endregion

        #region Randomizing Functions
        private FlightRoute RandomRoute(IEnumerable<FlightRoute> routes)
        {
            var routeList = routes.ToList();
            int size = routeList.Count;

            byte[] randomNumber = new byte[4];
            RandomNumberGenerator.Fill(randomNumber);
            int index = BitConverter.ToInt32(randomNumber, 0) & int.MaxValue;

            return routeList[index % size];
        }

        private string RandomGate(int min, int max)
        {
            int range = max - min + 1;

            byte[] randomNumber = new byte[4];
            RandomNumberGenerator.Fill(randomNumber);
            int randomValue = BitConverter.ToInt32(randomNumber, 0) & int.MaxValue;

            int gateNumber = (randomValue % range) + min;

            return $"{gateNumber}/T1";
        }
        #endregion

        #region Price Calculation
        private double HourlyCoefficent(DateTime time)
        {
            int hour = time.Hour;

            if (hour >= 7 && hour < 11)
            {
                return 1.9;
            }
            else if (hour >= 11 && hour < 14)
            {
                return 1.75;
            }
            else if (hour >= 14 && hour < 15)
            {
                return 1.5;
            }
            else if ((hour >= 15 && hour < 18) || (hour >= 5 && hour < 7))
            {
                return 1.4;
            }
            else if (hour >= 18 && hour < 22)
            {
                return 1.2;
            }
            else if (hour >= 22 && hour < 23)
            {
                return 1.1;
            }
            else
            {
                return 1;
            }
        }

        private double MonthlyCoefficent(DateTime time)
        {
            int month = time.Month;
            switch (month)
            {
                case 1:
                case 2:
                case 3:
                    return 1.2; break;
                case 4:
                case 5:
                case 6:
                    return 1;
                case 7:
                case 8:
                case 9:
                    return 1.4; break ;
                case 10:
                case 11:
                case 12:
                    return 1.2; break;
                default:
                    return 1.0;
            }
        }

        private double CalculatePrice(FlightRoute route, DateTime dateTime) 
        {
            return (route.Distance ?? 0) * operationCost * HourlyCoefficent(dateTime) * MonthlyCoefficent(dateTime);
        }
        #endregion

        #region Check Aircraft Availability
        private bool IsAircraftAvailable(Aircraft aircraft, DateTime dateTime)
        {
            if (aircraft == null)
            {
                throw new ArgumentNullException("Aircraft or DateTime can't be null");
            }
            return aircraft.AvailableAt < dateTime;
        }

        private bool AreAircraftsAvailable(IEnumerable<Aircraft> aircrafts, DateTime dateTime)
        {
            foreach (Aircraft aircraft in aircrafts)
            {
                if (aircraft == null)
                {
                    throw new ArgumentNullException("Aircraft or DateTime can't be null");
                }
                if (aircraft.AvailableAt > dateTime) 
                {
                    return false;
                }
            }
            return true;
        }
        #endregion
       
        public async Task<IEnumerable<FlightPreview>> GetFlightPreviews(FlightPreviewRequest request)
        {
            var flightPreviews = new List<FlightPreview>();
            var flightRoutes = new List<FlightRoute>();

            if (string.IsNullOrEmpty(request.FromAirportIATA) && string.IsNullOrEmpty(request.ToAirportIATA))
            {
                flightRoutes = _unitOfWork.FlightRoutes.FindMostPopularRoutes().ToList();
            } 
            else
            {
                FlightRouteRequest frRequest = new FlightRouteRequest
                {
                    FromAirportIATA = request.FromAirportIATA,
                    ToAirportIATA = request.ToAirportIATA
                };
                if (request.PageSize == 0)
                {
                    request.PageSize = 9;
                }
                flightRoutes = _unitOfWork.FlightRoutes.FindPagedRoutesFromRequest(frRequest, request.PageSize, request.PageNumber).ToList();
            }

            foreach (var flightRoute in flightRoutes)
            {
                var flight = await _unitOfWork.Flights.GetCheapestByRouteId(flightRoute.Id);
                var fromAirport = _mappingFunctions.AirportMapper(_unitOfWork.Airports.GetByIATA(flightRoute.FromAirportIATA));
                var toAirport = _mappingFunctions.AirportMapper(_unitOfWork.Airports.GetByIATA(flightRoute.ToAirportIATA));

                var flightPreview = new FlightPreview
                {
                    FromAirport = fromAirport,
                    ToAirport = toAirport,
                    DepartureTime = flight.DepartureTime,
                    MinimumPrice = flight.EconomyPrice,
                };

                flightPreviews.Add(flightPreview);
            }

            return flightPreviews;
        }

        public async Task<IEnumerable<Flight>> GetFromRequest(string fromAirportIATA,  string toAirportIATA, DateTime? departTime)
        {
            var flightRouteRequest = new FlightRouteRequest
            {
                FromAirportIATA = fromAirportIATA,
                ToAirportIATA = toAirportIATA
            };

            var route = await _unitOfWork.FlightRoutes.FindRoutesFromRequestAsync(flightRouteRequest);

            var flightRequest = new FlightRequest
            {
                RouteId = route.ElementAt(0).Id,
                DepartTime = departTime ?? DateTime.Now.AddDays(1),
            };

            var flights = await _unitOfWork.Flights.GetFromRequest(flightRequest);

            return flights;
        }

        public async Task<IEnumerable<Flight>> GetFromAircraftAndRoute(string aircraftName, string fromAirportIATA, string toAirportIATA)
        {
            var flightRouteRequest = new FlightRouteRequest
            {
                FromAirportIATA = fromAirportIATA,
                ToAirportIATA = toAirportIATA
            };

            var route = await _unitOfWork.FlightRoutes.FindRoutesFromRequestAsync(flightRouteRequest);
            var aircraft = await _unitOfWork.Aircrafts.GetByNameAsync(aircraftName);

            var flights = await _unitOfWork.Flights.GetFromAircraftAndRoute(aircraft.Id, route.ElementAt(0).Id);

            return flights;
        }

        public async Task<IEnumerable<Flight>> GenerateContinuousRandomFlight(DateTime dateTime)
        {
            var flightRoutes = _unitOfWork.FlightRoutes.GetAll();
            var aircrafts = _unitOfWork.Aircrafts.GetAll();
            var flights = new List<Flight>();

            while (AreAircraftsAvailable(aircrafts, dateTime)) 
            {
                foreach (var aircraft in aircrafts) 
                {
                    var request = new FlightRouteRequest
                    {
                        FromAirportIATA = aircraft.Terminal
                    };

                    var filteredRoutes = await _unitOfWork.FlightRoutes.FindRoutesFromRequestAsync(request);
                    var nextRoute = RandomRoute(filteredRoutes);

                    DateTime boardingTime = RoundTime(GetBoardingTime(aircraft.AvailableAt));
                    DateTime departureTime = RoundTime(GetDepartureTime(aircraft.AvailableAt));
                    DateTime arrivalTime = RoundTime(GetArrivalTime(departureTime, nextRoute.Distance ?? 0));

                    int economyPrice = (int)(CalculatePrice(nextRoute, departureTime)) * 1000;
                    int businessPrice = (int)(economyPrice * businessClassCoefficent);

                    aircraft.Terminal = nextRoute.ToAirportIATA;
                    aircraft.AvailableAt = arrivalTime;
                    nextRoute.NoOfFlights++;

                    int ecoSeats = 0;
                    int bsnSeats = 0;

                    if (aircraft.NoOfSeats < 200)
                    {
                        bsnSeats = 36;
                    }
                    if (aircraft.NoOfSeats < 300 && aircraft.NoOfSeats > 200)
                    {
                        bsnSeats = 48;
                    }
                    if (aircraft.NoOfSeats < 400 && aircraft.NoOfSeats > 300)
                    {
                        bsnSeats = 60;
                    }
                    if (aircraft.NoOfSeats < 500 && aircraft.NoOfSeats > 400)
                    {
                        bsnSeats = 72;
                    }

                    ecoSeats = aircraft.NoOfSeats - bsnSeats;

                    var flight = new Flight
                    {
                        AircraftId = aircraft.Id,
                        FlightRouteId = nextRoute.Id,
                        BoardingTime = boardingTime,
                        DepartureTime = departureTime,
                        ArrivalTime = arrivalTime,
                        Status = FlightStatus.Upcomming,
                        BoardingGate = RandomGate(1, 20),
                        EconomyPrice = economyPrice,
                        BusinessPrice = businessPrice,
                        RemainingEcoSeats = ecoSeats,
                        RemainingBsnSeats = bsnSeats,
                    };
                    flights.Add(flight);
                }
            }

            return flights;
        }

        public async Task<int> GenerateSeats()
        {
            var aircrafts = await _unitOfWork.Aircrafts.GetAllAsync();
            int count = 0;

            foreach (var aircraft in aircrafts)
            {
                int totalRows = aircraft.NoOfSeats / 6;
                string[] seatLetters = { "A", "B", "C", "D", "E", "F" };
                int bsnSeats = 0;

                if (aircraft.NoOfSeats < 200)
                {
                    bsnSeats = 36;
                }
                if (aircraft.NoOfSeats < 300 && aircraft.NoOfSeats > 200)
                {
                    bsnSeats = 48;
                }
                if (aircraft.NoOfSeats < 400 && aircraft.NoOfSeats > 300)
                {
                    bsnSeats = 60;
                }
                if (aircraft.NoOfSeats < 500 && aircraft.NoOfSeats > 400)
                {
                    bsnSeats = 72;
                }

                for (int i = 0; i < aircraft.NoOfSeats; i++)
                {
                    int logicalRowNumber = (i / 6) + 1;
                    int actualRowNumber = logicalRowNumber >= 13 ? logicalRowNumber + 1 : logicalRowNumber;

                    string seatPosition = $"{actualRowNumber}{seatLetters[i % 6]}";

                    SeatClass seatClass = i < bsnSeats ? SeatClass.Business : SeatClass.Economy;

                    var seat = new Seat
                    {
                        AircraftId = aircraft.Id,
                        Number = i + 1,
                        Position = seatPosition,
                        Class = seatClass,
                        IsAvaiable = true,
                    };

                    _unitOfWork.Seats.Add(seat);
                    count++;
                }
            }

            _unitOfWork.Commit(); 
            return count;
        }


        //public async Task ResetRemainingSeats()
        //{
        //    var flights = await _unitOfWork.Flights.GetAllAsync();

        //    foreach (var flight in flights)
        //    {
        //        var aircraft = _unitOfWork.Aircrafts.GetById(flight.AircraftId);
        //        flight.RemainingSeats = aircraft.NoOfSeats;
        //    }
        //    _unitOfWork.Commit();
        //}
    }
}
