import React from "react";
import { Link } from "react-router-dom"; // Thay <a> bằng Link

type Props = {};

const Explore: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-16 md:grid-cols-3 pl-8">
      {/* Online Booking */}
      <div>
        <h2 className="mb-5 text-sm font-semibold uppercase text-golden">
          Online Booking
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <Link
              to="/booking/vietnam"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Book now
            </Link>
          </li>
        </ul>
      </div>

      {/* Booking Info */}
      <div>
        <h2 className="mb-5 text-sm font-semibold uppercase text-golden">
          Booking Info
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <Link
              to="/booking/booking-info/fare-rules"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Fare Rules
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/booking/booking-info/payment-options"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Payment Options
            </Link>
          </li>
          <li>
            <Link
              to="/booking/booking-info/tax-fee-surcharge"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Tax, Fee, and Surcharge
            </Link>
          </li>
        </ul>
      </div>

      {/* Additional Services */}
      <div>
        <h2 className="mb-5 text-sm font-semibold uppercase text-golden">
          Additional Services
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <Link
              to="/booking/additional-services/seat-selection"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Seat Selection
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/booking/additional-services/excess-baggage"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Excess Baggage
            </Link>
          </li>
          <li>
            <Link
              to="/booking/additional-services/business-lounge"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Business Lounge
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Explore;
