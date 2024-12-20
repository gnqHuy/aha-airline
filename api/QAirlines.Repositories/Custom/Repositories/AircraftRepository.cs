using Microsoft.EntityFrameworkCore;
using QAirlines.DataAccess.DbContext;
using QAirlines.Models;
using QAirlines.Repositories.Custom.Interfaces;
using QAirlines.Repositories.Generic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QAirlines.Repositories.Custom.Repositories
{
    public class AircraftRepository : GenericRepository<Aircraft, Guid>, IAircraftRepository
    {
        public AircraftRepository(QAirlineDbContext context) : base(context) { }

        public IEnumerable<Aircraft> GetLargestAircrafts(int count)
        {
            return _context.Aircrafts.OrderByDescending(a => a.NoOfSeats).Take(count).ToList();
        }

        public override void AddRange(IEnumerable<Aircraft> aircrafts)
        {
            foreach (Aircraft aircraft in aircrafts)
            {
                aircraft.AvailableAt = DateTime.Now;
                _context.Aircrafts.Add(aircraft);
            }
        }

        public void UpdateAircrafts()
        {
            var aircrafts = _context.Aircrafts.OrderBy(a => a.Id).ToList();

            for (int i = 0; i < aircrafts.Count; i++)
            {
                var aircraft = aircrafts[i];
                int position = i + 1;

                aircraft.Model = aircraft.Name;
                aircraft.Name = position < 10 ? $"AHA-00{position}" : $"AHA-0{position}";
            }
        }

        public void UpdateNoOfSeats()
        {
            var aircrafts = _context.Aircrafts.ToList();

            foreach(Aircraft aircraft in aircrafts)
            {
                if (aircraft.Model == "Boeing 787-9 Dreamliner")
                {
                    aircraft.NoOfSeats = 294;
                }
                if (aircraft.Model == "Airbus A350-900")
                {
                    aircraft.NoOfSeats = 312;
                }
                if (aircraft.Model == "Boeing 747-8")
                {
                    aircraft.NoOfSeats = 408;
                }
                if (aircraft.Model == "Boeing 737-800")
                {
                    aircraft.NoOfSeats = 186;
                }
            }
        }


        public override async Task AddRangeAsync(IEnumerable<Aircraft> aircrafts)
        {
            foreach (Aircraft aircraft in aircrafts)
            {
                aircraft.AvailableAt = DateTime.Now;
                await _context.Aircrafts.AddAsync(aircraft);
            }
        }

        public async Task ResetAvailableTime()
        {
            var aircrafts = await _context.Aircrafts.ToListAsync();
            foreach (Aircraft aircraft in aircrafts)
            {
                aircraft.AvailableAt = DateTime.Now;
            }
        }
    }
}
