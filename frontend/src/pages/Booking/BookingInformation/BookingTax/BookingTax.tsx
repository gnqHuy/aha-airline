import React from 'react'

type Props = {}

const BookingTax = (props: Props) => {
  return (
    <div className = "">
        <p className = " text-3xl text-[#1A4532] font-bold">Tax, Fee & Surcharge</p>
        <div className = "w-[70rem]">
            <p className = " text-2xl text-[#1A4532] font-bold">What is an airline ticket?</p>
            <p className = "text-lg">An airline ticket is a contract for transportation services between an airline and a passenger, represented in the form of an electronic ticket (All passenger and itinerary information is stored electronically).</p>
            <p className = "text-lg">Information displayed on the electronic ticket includes:</p>
            <ul>
                <li className = "mb-[0.5rem]">PNR code</li>
                <li className = "mb-[0.5rem]">Passenger information: Passenger name, electronic ticket number, invoice number</li>
                <li className = "mb-[0.5rem]">Itinerary information: Departure flight, return flight, date and time of flights, flight number, baggage allowancec</li>
                <li className = "mb-[0.5rem]">Payment details: Price of the outbound flight ticket, price of the return flight ticket, total taxes and fees</li>
                <li>Important passenger-related information regarding the regulations, rules, and terms of the airline</li>
            </ul>
            <p className = "text-lg relative top-[1rem]">Passengers can store the PNR code in various forms, such as text messages, images, handwritten notes, emails, etc. When checking in at the airport, passengers provide the matching booking code with the ticket number stored in the system. Bamboo Airways will then print and deliver the boarding pass to the customer.</p>
        </div>
        <div className = "w-[70rem] h-[0.05rem] bg-[gray] relative top-[2rem]"></div>
        <div className = "w-[70rem]">
            <p className = " text-2xl text-[#1A4532] font-bold relative top-[1.5rem]">What is a boarding pass?</p>
            <p className = "text-lg">A boarding pass consists of two parts, one of which is detached by the airline staff during the boarding process. The remaining part is retained by the passenger so that when boarding the aircraft, the flight attendants can guide passengers to their assigned seats as indicated on the pass.</p>
            <p className = "text-lg">Information on the boarding pass includes: Passenger name, flight number, departure and arrival points, seat number, seat class, date and time of the flight, and the departure gate.</p>
        </div>
        <div className = "w-[70rem] h-[0.05rem] bg-[gray] relative top-[1.5rem]"></div>
        <div className = "w-[70rem]">
            <p className = " text-2xl text-[#1A4532] font-bold relative top-[1rem]">How is the airfare calculated?</p>
            <p className = "text-lg">Bamboo Airways' airfare <b>(applicable only for domestic routes)</b> consists of the following components:</p>
            <div>
                <p className = "text-xl font-bold">1.Base fare</p>
                <p className = "text-lg relative bottom-[0.5rem]">Base fare is the fare applied by Bamboo Airways for the transportation of passengers from departure airport to the final destination, excluding taxes, fees and surcharges. Base fare is determined by your particular itinerary.</p>
            </div>
            <div className = "relative top-[1rem]">
                <p className = "text-xl font-bold">2. Ticketing fee <i>(applicable for adults, children - per ticket)</i></p>
                <p className = "text-lg relative bottom-[0.5rem]">Ticketing fee (OB fee) is based on Point of Departure.</p>
                <p className = "text-lg relative bottom-[1.5rem]">For domestic flights originating in Vietnam (VN), there is a ticketing fee of <b>55,000</b> VND, applicable to tickets issued/exchanged from August 30, 2023, and for journeys commencing from August 30, 2023.</p>
            </div>
            <div className = "relative top-[1rem]">
                <p className = "text-xl font-bold">3. Admin surcharge <i>(applicable for adults, children - per segment)</i></p>
                <p className = "text-lg relative bottom-[0.5rem]">Admin surcharge covers the costs of maintaining the data administration system depending on your itinerary.</p>
                <p className = "text-lg relative bottom-[1.5rem]">Bamboo Airways charges a fee of <b>430,000 VND</b> for admin surcharge, applicable to all Bamboo Airways sales channels, including the official website, mobile application, agents and ticket offices.</p>
            </div>
            <div className = "relative top-[1rem]">
                <p className = "text-xl font-bold">4. Airport tax <i>(applicable for adults, children - per segment)</i></p>
                <p className = "text-lg relative bottom-[0.5rem]">Airport taxes are applied based on the regulations at each airport, as detailed below:</p>
                <p className = "text-lg relative bottom-[0.5rem] font-bold">4.1. Passenger service charge</p>
                <ul>
                    <li className = "text-lg">For airports with the following IATA: <b><i>HAN, SGN, DAD, CXR, HPH, VII, VCA, PQC, DLI, HUI, BMV, VDO</i></b></li>
                    <div>
                        <p className = "text-lg relative bottom-[0.5rem]">+Adult: <b>100,000VND</b></p>
                        <p className = "text-lg relative bottom-[1.5rem]">+Children: <b>50,000VND</b></p>
                    </div>
                    <li className = "text-lg relative bottom-[1rem]">For airports with the following IATA: <b><i>THD, VDH, PXU, TBB, VCL, UIH</i></b></li>
                    <div className = "relative bottom-[1rem]">
                        <p className = "text-lg relative bottom-[0.5rem]">+Adult: <b>80,000VND</b></p>
                        <p className = "text-lg relative bottom-[1.5rem]">+Children: <b>40,000VND</b></p>
                    </div>
                    <li className = "text-lg relative bottom-[2rem]">For airports with the following IATA: <b><i>VCS, DIN, CAH, VKG</i></b></li>
                    <div className = "relative bottom-[2rem]">
                        <p className = "text-lg relative bottom-[0.5rem]">+Adult: <b>60,000VND</b></p>
                        <p className = "text-lg relative bottom-[1.5rem]">+Children: <b>30,000VND</b></p>
                    </div>
                </ul>

                <p className = "text-lg relative bottom-[3rem] font-bold">4.2. Passenger and Baggage Security Screening Service Charge</p>
                <p className = "text-lg relative bottom-[3rem]">Security Screening Service Charge in Vietnam:</p>
                <ul className = "relative bottom-[3.5rem]">
                    <li>Adult (above 12 years old): <b>20,000 VND</b></li>
                    <li>Children (from 2 to 12 years old): <b>10,000 VND</b></li>
                </ul>
            </div>
            <div className = "relative bottom-[1rem]">
                <p className = "text-xl font-bold">5. Value added tax - VAT <i>(applicable for adults, children - per segment)</i></p>
                <p className = "text-lg relative bottom-[0.5rem]">Value added tax (VAT) is applied for Bamboo Airways’ domestic flights. This is a tax regulated by the Vietnamese Government. The VAT is <b>10%</b> since 01/01/2024</p>
                <p className = "text-lg relative bottom-[1rem]">Airfare depends on the time that you book your flight. Any changes requested from you on your itinerary may result in changing price and other surcharges. </p>
            </div>
        </div>
    </div>
  )
}

export default BookingTax