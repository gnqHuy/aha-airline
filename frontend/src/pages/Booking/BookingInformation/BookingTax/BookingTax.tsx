import React from "react";

const BookingTax = () => {
  return (
    <div className="text-[#1A4532] px-4 md:px-0 max-w-[75vw] mx-auto space-y-10">
      {/* Title */}
      <h2 className="text-3xl font-bold">Tax, Fee & Surcharge</h2>

      {/* What is an airline ticket */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">What is an airline ticket?</h3>
        <p className="text-lg">
          An airline ticket is a contract for transportation services between an airline and a passenger, represented in the form of an electronic ticket (all passenger and itinerary information is stored electronically).
        </p>
        <p className="text-lg">Information displayed on the electronic ticket includes:</p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          <li>PNR code</li>
          <li>Passenger information: Passenger name, electronic ticket number, invoice number</li>
          <li>Itinerary: Departure & return flights, date/time, flight number, baggage allowance</li>
          <li>Payment: Outbound & return fare, total taxes and fees</li>
          <li>Important passenger-related airline rules and terms</li>
        </ul>
        <p className="text-lg">
          Passengers can store the PNR code in various forms (text, image, note, email...). At the airport, passengers present the matching booking code with the system’s ticket number. Bamboo Airways will print and deliver the boarding pass.
        </p>
      </section>

      {/* Divider */}
      <hr className="border border-gray-400" />

      {/* What is a boarding pass */}
      <section className="space-y-4">
        <h3 className="text-2xl font-bold">What is a boarding pass?</h3>
        <p className="text-lg">
          A boarding pass has two parts. One is detached by staff, the other retained by the passenger so the flight attendants can guide them to their seat.
        </p>
        <p className="text-lg">
          It includes: Passenger name, flight number, departure/arrival points, seat number, seat class, date/time, departure gate.
        </p>
      </section>

      {/* Divider */}
      <hr className="border border-gray-400" />

      {/* How is airfare calculated */}
      <section className="space-y-6">
        <h3 className="text-2xl font-bold">How is the airfare calculated?</h3>
        <p className="text-lg">
          Bamboo Airways' airfare <strong>(domestic routes only)</strong> includes:
        </p>

        {/* 1. Base fare */}
        <div className="space-y-2">
          <h4 className="text-xl font-bold">1. Base fare</h4>
          <p className="text-lg">
            Base fare is the charge for transporting passengers between airports, excluding taxes and fees. It depends on your itinerary.
          </p>
        </div>

        {/* 2. Ticketing fee */}
        <div className="space-y-2">
          <h4 className="text-xl font-bold">
            2. Ticketing fee <i>(per adult/child ticket)</i>
          </h4>
          <p className="text-lg">Based on point of departure.</p>
          <p className="text-lg">
            For domestic flights from Vietnam, ticketing fee is <strong>55,000 VND</strong> for tickets issued/exchanged from Aug 30, 2023.
          </p>
        </div>

        {/* 3. Admin surcharge */}
        <div className="space-y-2">
          <h4 className="text-xl font-bold">
            3. Admin surcharge <i>(per adult/child segment)</i>
          </h4>
          <p className="text-lg">Covers admin system costs based on itinerary.</p>
          <p className="text-lg">
            Fee: <strong>430,000 VND</strong> — applicable across all sales channels.
          </p>
        </div>

        {/* 4. Airport tax */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold">
            4. Airport tax <i>(per adult/child segment)</i>
          </h4>
          <p className="text-lg">Applied based on airport regulations:</p>

          <h5 className="font-bold">4.1. Passenger service charge</h5>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            <li>
              <b>IATA: HAN, SGN, DAD, etc.</b><br />
              Adult: <strong>100,000 VND</strong>, Child: <strong>50,000 VND</strong>
            </li>
            <li>
              <b>IATA: THD, VDH, PXU, etc.</b><br />
              Adult: <strong>80,000 VND</strong>, Child: <strong>40,000 VND</strong>
            </li>
            <li>
              <b>IATA: VCS, DIN, CAH, etc.</b><br />
              Adult: <strong>60,000 VND</strong>, Child: <strong>30,000 VND</strong>
            </li>
          </ul>

          <h5 className="font-bold mt-4">4.2. Passenger & Baggage Security Screening</h5>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            <li>Adult (12+): <strong>20,000 VND</strong></li>
            <li>Child (2–12): <strong>10,000 VND</strong></li>
          </ul>
        </div>

        {/* 5. VAT */}
        <div className="space-y-2">
          <h4 className="text-xl font-bold">
            5. Value Added Tax (VAT) <i>(per adult/child segment)</i>
          </h4>
          <p className="text-lg">
            Domestic flights are subject to VAT as regulated by the Vietnamese government. Current VAT rate is <strong>10%</strong> since Jan 1, 2024.
          </p>
          <p className="text-lg">
            Airfare varies based on booking time. Changes to itinerary may affect total price and surcharges.
          </p>
        </div>
      </section>
    </div>
  );
};

export default BookingTax;
