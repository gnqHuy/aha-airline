import React, { useEffect } from 'react';
import LayoutDefault from '../../../layout/LayoutDefault';
import ExcessBaggage from '../../Booking/AdditionalService/ExcessBaggage/ExcessBaggage';


const scrollToHash = () => {
  const hash = window.location.hash;
  if (hash) {
    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
};

const BaggageInfo = () => {
  useEffect(() => {
    scrollToHash();
  }, []);

  return (
    <LayoutDefault>
      <div className="min-h-screen bg-slate-50 overflow-x-hidden overflow-y-auto py-8">
        <div className="max-w-[75vw] mx-auto space-y-10">
          <h1 className="text-3xl text-ahaAmber-2 font-bold">Baggage Info</h1>

          {/* Carry-on Baggage */}
          <section id="carry-on" className="space-y-6">
            <h2 className="text-3xl text-ahaGreen-0 font-bold">Carry-on Baggage</h2>
            <p className="text-lg">
              Each passenger (except for infants under 2 years old) is allowed the following standard free carry-on baggage on BAV flights:
            </p>
            <ul className="text-lg list-disc list-inside space-y-2">
              <li>
                <b>For Economy Class:</b> 01 main piece and/or 01 small handbag/personal item*, max 7kg; main piece dimensions not exceeding 115cm (56 x 36 x 23cm)
              </li>
              <li>
                <b>For Business Class:</b> 02 main pieces and/or 01 small handbag/personal item*, max 14kg total; each main piece ≤ 7kg, ≤ 115cm (56 x 36 x 23cm)
              </li>
            </ul>

            <p className="text-lg">
              *Small handbag/personal item (choose ONE of the following) – no tag required:
            </p>
            <ul className="text-lg list-disc list-inside space-y-2">
              <li>Handbag, book, camera, shopping bag, etc. (≤ 30x20x10cm)</li>
              <li>Thin blanket, scarf, or jacket</li>
              <li>Umbrella/walking stick (no sharp tips)</li>
              <li>Book, newspaper, or magazine</li>
              <li>Assistive device or medical device</li>
              <li>Laptop bag (≤ 40x30x10cm)</li>
            </ul>

            <div className="h-px bg-gray-500"></div>

            <p className="text-lg">Free carry-on for infants includes:</p>
            <ul className="text-lg list-disc list-inside space-y-2">
              <li>Baby bag (max 3kg, within carry-on size)</li>
              <li>Foldable stroller/pram that fits in overhead bin</li>
            </ul>

            <div className="h-px bg-gray-500"></div>

            <p className="text-xl font-bold italic">Note:</p>
            <ul className="text-lg list-disc list-inside space-y-4">
              <li>All carry-on baggage must be weighed and tagged. Untagged = not allowed (except online check-in).</li>
              <li>Personal items do not require tagging.</li>
              <li>AHA Club member bonus allowance only applies to checked baggage.</li>
              <li>Gate baggage check applies fees higher than at check-in if overweight.</li>
              <li>Carry-on must fit under seat or in overhead bin. Oversized must be checked in.</li>
            </ul>
          </section>

          {/* Excess Baggage */}
          <section id="excess">
            <ExcessBaggage />
          </section>

          {/* Special Baggage */}
          <section id="special" className="space-y-4">
            <h2 className="text-3xl font-bold text-[#1A4532]">Special Baggage</h2>
            <p className="text-lg">
              AHA Airlines provides a service for transporting oversized luggage, bicycles, and sports equipment as checked baggage.
            </p>

            <ul className="text-lg list-disc list-inside space-y-2">
              <li>
                <b>Skiing Equipment/Water Slideboarding:</b> 01 board, 01 pair of poles, 01 pair of shoes.
              </li>
              <li>
                <b>Surfing Board:</b> 01 skateboard.
              </li>
              <li>
                <b>Diving Equipment:</b> 01 suit, 01 mask, 01 pair of fins, 01 empty tank. No dangerous items (e.g. regulator, full tanks).
              </li>
              <li>
                <b>Archery:</b> 01 bow, standard arrows, maintenance toolbox.
              </li>
              <li>
                <b>Fishing:</b> 1–2 rods, line, net, shoes, tackle box.
              </li>
              <li>
                <b>Bowling:</b> 01 bag, 1–2 balls, 01 pair of shoes.
              </li>
              <li>
                <b>Bicycles:</b> Common/sport bicycles only. Not applicable for electric or battery-equipped vehicles.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default BaggageInfo;
