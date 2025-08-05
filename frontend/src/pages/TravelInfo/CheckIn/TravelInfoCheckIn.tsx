import React, { useEffect, useState } from 'react';
import LayoutDefault from '../../../layout/LayoutDefault';

const scrollToHash = () => {
  const hash = window.location.hash;
  if (hash) {
    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
};

const TravelInfoCheckIn = () => {
  useEffect(() => {
    scrollToHash();
  }, []);

  return (
    <LayoutDefault>
      <div className="min-h-screen bg-slate-50 overflow-x-hidden overflow-y-auto py-8">
        <div className="max-w-[75vw] mx-auto space-y-10">
          <h1 className="text-3xl text-ahaAmber-2 font-bold">Check In</h1>

          {/* Online Check-in */}
          <section id="online" className="space-y-6">
            <h2 className="text-2xl text-ahaGreen-0 font-bold">Online Check-in</h2>
            <p className="text-lg">
              Web check–in is only available for Domestic flights operated by AHA Airlines, departing from Noi Bai (HAN), Da Nang (DAD), Tan Son Nhat (SGN), Nha Trang (CXR), Quy Nhon (UIH) airports.
            </p>

            <h3 className="text-xl text-ahaGreen-0 font-bold">Check-in online instructions</h3>
            <ol className="list-decimal list-inside text-lg space-y-1">
              <li>Click “Check-in” on AHA Airlines’ website.</li>
              <li>Input PNR (Passenger name record) or ticket number and last name of one of the passengers.</li>
              <li>Select passenger and flight, then click “Next”.</li>
              <li>Read the ICI regulations carefully, then choose “Agree” and “Next”.</li>
              <li>Select additional services and proceed to pay (optional), then click “Next”.</li>
              <li>After successful check-in, print or email your boarding pass.</li>
              <li>
                At the airport, show your boarding pass at the check-in counter for baggage. If no checked baggage, proceed to the security gate.
              </li>
            </ol>

            <h3 className="text-xl text-ahaGreen-0 font-bold">Cases Where Online Check-in Is Not Applicable</h3>
            <p className="text-lg">
              Online check-in is not available for the following passenger cases:
            </p>
            <ul className="list-disc list-inside text-lg space-y-1">
              <li>Passengers with special service requests (except for meals).</li>
              <li>Passengers who have been refused carriage or deported.</li>
              <li>Passengers traveling with infants under 02 years old.</li>
              <li>Pregnant women.</li>
              <li>Passengers requiring medical assistance (e.g. wheelchair).</li>
              <li>Passengers departing from airports not listed above.</li>
            </ul>
          </section>

          {/* Airport Check-in */}
          <section id="airport" className="space-y-4">
            <h2 className="text-2xl text-ahaGreen-0 font-bold">Airport Check-in</h2>
            <p className="text-lg">
              For a great travel experience with AHA Airlines, please refer to the following procedures for your check-in at the airport.
            </p>
          </section>

          {/* Cancel Check-in */}
          <section id="cancel" className="space-y-4">
            <h2 className="text-2xl text-ahaGreen-0 font-bold">Cancel Check-in</h2>
            <p className="text-lg">
              <b>Option 1:</b> Cancel check-in status immediately after the system confirms check-in success.
            </p>
            <p className="text-lg">
              <b>Option 2:</b> Access the AHA Airlines website to cancel check-in manually.
            </p>
          </section>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default TravelInfoCheckIn;
