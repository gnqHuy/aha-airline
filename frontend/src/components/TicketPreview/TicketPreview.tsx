import React from 'react'
import { FaPlane } from "react-icons/fa6";
import { BsClock } from "react-icons/bs";


type Props = {
    aircraft: string;
    fromIATA: string;
    toIATA: string;
    fromAirportName: string;
    toAirportName: string;
    fromTime: Date;
    toTime: Date;
    economyPrice: number;
    businessPrice: number;
};

const TicketPreview: React.FC<Props> = ({
    aircraft,
    fromIATA,
    toIATA,
    fromAirportName,
    toAirportName,
    fromTime,
    toTime,
    economyPrice,
    businessPrice
}) => {
    const calculateDuration = (from: Date, to: Date): string => {
        const duration = (to.getTime() - from.getTime()) / (1000 * 60);
        const hours = Math.floor(duration / 60);
        const minutes = Math.floor(duration % 60);
        return `${hours}h ${minutes}m`;
    };
  return (
    <div className="flex w-full max-w-5xl mx-auto border rounded-lg shadow-md overflow-hidden bg-white">
      <div className="flex-1 p-4">
        <div className="flex items-center justify-between">
          <div className="text-left">
            <div className="text-2xl font-semibold text-gray-900">{fromTime.toLocaleTimeString()}</div>
            <div className="text-lg text-golden">{fromIATA}</div>
          </div>

          <div className="flex items-center text-golden">
            <div className="h-0.5 w-28 bg-gray-300"></div>
            <FaPlane className="mx-2 text-xl" />
            <div className="h-0.5 w-28 bg-gray-300"></div>
          </div>

          <div className="text-right">
            <div className="text-2xl font-semibold text-gray-900">{toTime.toLocaleTimeString()}</div>
            <div className="text-lg text-golden">{toIATA}</div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 text-base text-gray-700">
          <div className="flex items-center">
            <BsClock className="mr-2 text-golden" />
            Duration: <span className="ml-1 font-semibold">{calculateDuration(fromTime, toTime)}</span>
          </div>
          <div>
            <span className="font-medium">{aircraft}</span> <br/> operated by AHA Airline
          </div>
        </div>
      </div>

      <div className="w-72 grid grid-cols-2 border-l divide-x divide-gray-300">
        <div className="p-4 text-center text-xl bg-Green">
          <div className="font-semibold mb-10 text-golden">Economy</div>
          <div className="font-bold text-golden">{economyPrice.toLocaleString()} VND</div>
        </div>

        <div className="p-4 text-center text-xl bg-golden">
          <div className="font-semibold mb-10 text-Green">Business</div>
          <div className="font-bold text-Green">{businessPrice.toLocaleString()} VND</div>
        </div>
      </div>
    </div>
  );
};

export default TicketPreview;
