import React from 'react'
import ExcessBaggageImage from '../../../../assets-test/excessBaggage.jpg';

type Props = {}

const ExcessBaggage = (props: Props) => {
  return (
    <div className = "w-[70rem]">
        <p className = " text-3xl text-[#1A4532] font-bold">Excess Baggage</p>
        <div className = "">
            <p className = "text-2xl text-[#1A4532] font-bold">Prepaid Baggage</p>
            <p className = "text-lg relative bottom-[1rem]">Prepaid baggage allows passengers to purchase additional checked baggage at least 3 hours before departure time via Vietnam Airlines website/app or sales office/agent. With prepaid baggage, passengers can save up to 50% compared to purchasing additional checked baggage at the airport (Excess baggage).</p>
            <p className = "text-xl relative bottom-[1rem] font-bold">How to buy prepaid baggage</p>
            <p className = "text-lg relative bottom-[2rem]">Passengers can purchase up to 15 pieces of prepaid baggage via following channels:</p>
            <ul className = "text-lg relative bottom-[2rem]">
                <li>Purchase prepaid baggage at AHA Airlines sales offices and agents;</li>
                <li>In the process of booking online via AHA Airlines website and mobile app;</li>
                <li>After ticket issuance, passengers can purchase prepaid baggage at the section of “Manage Booking” - “Buy ancillaries” - “Prepaid baggage”.</li>
            </ul>
            <p className = "text-xl relative bottom-[1rem] font-bold">Regulations on the weight and size of prepaid baggage</p>
            <p className = "text-lg relative bottom-[2rem]">Prepaid baggage must follow the standard piece regulations in terms of size and weight as follows:</p>
            <ul className = "text-lg relative bottom-[2rem]">
                <li>The maximum weight of a standard piece is 23kg.</li>
                <li>The maximum total three dimensions of a standard piece is158cm.</li>
            </ul>
            <img src = {ExcessBaggageImage} alt = "" />
            <p className = "text-xl relative bottom-[0rem] font-bold">Notes:</p>
            <ul className = "text-lg relative bottom-[0rem]">
                <li>Prepaid baggage must be purchased at least 03 hours before departure.</li>
                <li>Prepaid baggage is allowed to change to a new travel date/ itinerary with equal or higher cost. The change must be made at least 03 hours before the departure time of the new flight segment.</li>
                <li>Prepaid baggage cannot be endorsed, refunded, or exchanged for other services or tickets.</li>
                <li>Completely unused prepaid baggage associated with a ticket whose itinerary originates in Korea is refundable. The refund fee is 25% of the unused prepaid baggage's value.</li>
            </ul>
        </div>
    </div>
  )
}

export default ExcessBaggage