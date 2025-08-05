import React from 'react';

const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-6">
    <p className="text-3xl font-bold text-[#1A4532]">{title}</p>
    {subtitle && <p className="text-sm mt-1">{subtitle}</p>}
  </div>
);

const PromotionBox = () => (
  <div className="mb-6">
    <p className="text-2xl font-bold text-[#1A4532]">For Domestic route</p>
    <ul className="list-disc list-inside text-lg space-y-1">
      <li>
        Enter code: <span className="text-[#ebc94e] font-bold">AHAProvjp</span> - get{' '}
        <span className="text-[#ebc94e] font-bold">15%</span> off
      </li>
      <li><b>Sale period</b>: From 11 Nov to 21 Nov, 2024</li>
      <li><b>Travel period</b>: From 11 Nov to 31 Dec, 2024</li>
      <li>
        <b>Conditions apply</b>: purchase during the booking process on the Website/Mobile App at least
        24 hours before departure time
      </li>
    </ul>
  </div>
);

const SeatPriceTable = () => {
  const seatTypes = ['Front row seat', 'Emergency Exit row seat', 'Standard Seat', 'Back seat', 'No-Fee Seats'];
  const rows = [
    {
      label: 'Economy Flex',
      prices: ['110,000VND', 'Free', 'Free', 'Free', 'Free'],
    },
    {
      label: 'Remaining fare classes',
      prices: ['110,000VND', '110,000VND', '90,000VND', '55,000VND', 'Free'],
    },
  ];

  return (
    <div className="w-full mb-10">
      <div className="flex">
        <div className="w-[11vw] h-[3rem] bg-[#ebc94e]" />
        {seatTypes.map((type, idx) => (
          <div
            key={idx}
            className="w-[11vw] h-[3rem] bg-[#ebc94e] text-center flex items-center justify-center border border-white text-sm font-bold"
          >
            {type}
          </div>
        ))}
      </div>

      {rows.map((row, idx) => (
        <div className="flex" key={idx}>
          <div className="w-[11vw] h-[3rem] bg-[#b3afaf] flex items-center justify-center text-center font-bold text-[14px]">
            {row.label}
          </div>
          {row.prices.map((price, pIdx) => (
            <div
              key={pIdx}
              className="w-[11vw] h-[3rem] bg-[#1A4532] text-[#ebc94e] flex items-center justify-center border border-white text-[14px]"
            >
              {price}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const SeatDescriptions = () => {
  const seatDetails = [
    {
      label: 'Front row seat',
      desc: 'These are the first 5–6 rows in the Economy class cabin. They are located near the aircraft doors, reducing the time needed to board and disembark.',
    },
    {
      label: 'Emergency exit row seats',
      desc: 'These seats are positioned alongside the emergency exits on the aircraft. Their location varies depending on the aircraft configuration. Extra Legroom emergency exit seats offer spacious legroom in front, allowing passengers to stretch their legs comfortably without obstruction from the seat in front.',
    },
    {
      label: 'Standard seats',
      desc: 'These are the standard seats in the Economy class cabin, starting from the rows behind the Front Seats up to the middle of the cabin (excluding seats near the emergency exits).',
    },
    {
      label: 'Back seats (window and aisle)',
      desc: 'These seats are located at the window or aisle positions in the rear section of the Economy class cabin (excluding seats near the emergency exits).',
    },
    {
      label: 'No-Fee Seats',
      desc: 'These are the middle seats in the rear section of the Economy class cabin.',
    },
  ];

  return (
    <div className="space-y-2">
      <p className="text-2xl text-[#1A4532] font-bold mb-2">Seating details</p>
      {seatDetails.map((item, idx) => (
        <p key={idx} className="text-lg">
          <b>{item.label}:</b> {item.desc}
        </p>
      ))}
    </div>
  );
};

const SeatSelection = () => {
  return (
    <div className="w-[75vw]">
      <SectionTitle
        title="Seat Selection"
        subtitle="Do you want to be seated next to your travel companion? Or in your preferred seat?"
      />
      <PromotionBox />
      <SeatPriceTable />
      <SeatDescriptions />
    </div>
  );
};

export default SeatSelection;
