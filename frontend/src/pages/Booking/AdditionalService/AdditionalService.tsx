import React, { useEffect } from 'react';
import LayoutDefault from '../../../layout/LayoutDefault';

import SeatSelection from './SeatSelection/SeatSelection';
import ExcessBaggage from './ExcessBaggage/ExcessBaggage';
import BusinessLounge from './BusinessLounge/BusinessLounge';

const scrollToHash = () => {
  const hash = window.location.hash;
  if (hash) {
    const section = document.querySelector(hash);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
};

const AdditionalService = () => {
  useEffect(() => {
    scrollToHash();
  }, []);

  return (
    <LayoutDefault>
      <div className="min-h-screen bg-slate-50 overflow-x-hidden overflow-y-auto py-8">
        <div className="max-w-[75vw] mx-auto space-y-12">
          <h1 className="text-3xl text-ahaAmber-2 font-bold">Additional Services</h1>

          <section id="seat-selection">
            <SeatSelection />
          </section>

          <section id="excess-baggage">
            <ExcessBaggage />
          </section>

          <section id="business-lounge">
            <BusinessLounge />
          </section>
        </div>
      </div>
    </LayoutDefault>
  );
};

export default AdditionalService;
