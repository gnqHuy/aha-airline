import React from "react";

const COLUMNS = ["Group", "Business", "Skyboss", "Deluxe", "Eco"];

const TABLE_SECTIONS = [
  {
    title: "Checked baggage",
    rows: [
      ["Group 1", "40 Kgs + Golf club set", "30 Kgs + Golf club set", "20 Kgs", "Extra Cost"],
      [
        "Group 2",
        "60/40kgs + 1 Golf set",
        "50/40kgs + 1 Golf set",
        "40/20kgs (max 1 package for PER, ADL)",
        "Extra Cost",
      ],
    ],
  },
  {
    title: "Hot meal",
    rows: [
      ["Group 1", "Included", "Included", "Extra cost", "Extra cost"],
      ["Group 2", "Included", "Included", "01 combo meal + drink", "Extra cost (Kazakhstan: included combo meal)"]
    ],
  },
  {
    title: "03-in-01 amenities",
    rows: [
      ["Group 1", "Included", "Not permitted", "Not permitted", "Not permitted"],
      ["Group 2", "Included", "Not permitted", "Not permitted", "Not permitted"]
    ],
  },
  {
    title: "Seat",
    rows: [
      ["Group 1", "Free of charge", "Free (excluding SkyBoss seats)", "Free of charge", "Extra cost"],
      ["Group 2", "Free of charge", "Free (excluding SkyBoss seats)", "Free of charge", "Extra cost"]
    ],
  },
  {
    title: "Priority Check-in",
    rows: [
      ["Group 1", "Included", "Included", "Not permitted", "Not permitted"],
      ["Group 2", "Included", "Included", "Not permitted", "Not permitted"]
    ],
  }
];

const BookingFareRuleTable = () => {
  return (
    <div className="relative w-full overflow-x-auto">
      {/* Header */}
      <div className="grid grid-cols-5 text-center border border-white bg-yellow-400 font-bold text-black">
        {COLUMNS.map((col, idx) => (
          <div key={idx} className="p-3 border border-white">
            {col}
          </div>
        ))}
      </div>

      {/* Sections */}
      {TABLE_SECTIONS.map((section, idx) => (
        <div key={idx}>
          {/* Section Title */}
          <div className="bg-gray-400 text-sm font-bold text-left text-black border border-white px-4 py-2">
            {section.title}
          </div>

          {/* Section Rows */}
          {section.rows.map((row, rIdx) => (
            <div key={rIdx} className="grid grid-cols-5 text-center">
              {row.map((cell, cIdx) => (
                <div
                  key={cIdx}
                  className="bg-green-900 text-yellow-300 border border-white text-sm px-3 py-2"
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BookingFareRuleTable;