import ExcessBaggageImage from '../../../../assets/excessBaggage.jpg';

const ExcessBaggage = () => {
  return (
    <div className="w-full max-w-[75vw] mx-auto space-y-4 text-[#1A4532]">
      {/* Title */}
      <h1 className="text-3xl font-bold">Excess Baggage</h1>

      {/* Section 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Prepaid Baggage</h2>
        <p className="text-lg">
          Prepaid baggage allows passengers to purchase additional checked baggage at least 3 hours before departure time via Vietnam Airlines website/app or sales office/agent. With prepaid baggage, passengers can save up to 50% compared to purchasing additional checked baggage at the airport (Excess baggage).
        </p>
      </section>

      {/* Section 2 */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">How to buy prepaid baggage</h3>
        <p className="text-lg">
          Passengers can purchase up to 15 pieces of prepaid baggage via following channels:
        </p>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Purchase prepaid baggage at AHA Airlines sales offices and agents;</li>
          <li>In the process of booking online via AHA Airlines website and mobile app;</li>
          <li>After ticket issuance, passengers can purchase prepaid baggage at the section of “Manage Booking” - “Buy ancillaries” - “Prepaid baggage”.</li>
        </ul>
      </section>

      {/* Section 3 */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Regulations on the weight and size of prepaid baggage</h3>
        <p className="text-lg">
          Prepaid baggage must follow the standard piece regulations in terms of size and weight as follows:
        </p>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>The maximum weight of a standard piece is 23kg.</li>
          <li>The maximum total three dimensions of a standard piece is 158cm.</li>
        </ul>
      </section>

      {/* Image */}
      <img src={ExcessBaggageImage} alt="Excess Baggage" className="w-full max-w-[75vw] mx-auto rounded shadow-md" />

      {/* Notes */}
      <section className="space-y-4">
        <h3 className="text-xl font-bold">Notes:</h3>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Prepaid baggage must be purchased at least 03 hours before departure.</li>
          <li>Prepaid baggage is allowed to change to a new travel date/ itinerary with equal or higher cost. The change must be made at least 03 hours before the departure time of the new flight segment.</li>
          <li>Prepaid baggage cannot be endorsed, refunded, or exchanged for other services or tickets.</li>
          <li>Completely unused prepaid baggage associated with a ticket whose itinerary originates in Korea is refundable. The refund fee is 25% of the unused prepaid baggage's value.</li>
        </ul>
      </section>
    </div>
  );
};

export default ExcessBaggage;
