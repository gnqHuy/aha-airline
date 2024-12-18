import React from "react";
import { Link } from "react-router-dom"; // Thay <a> bằng Link

type Props = {};

const Explore: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-3 pl-8 medium:relative medium:left-[19vw] medium:grid-cols-3 bg-white">
      {/* Online Booking */}
      <div className = "medium:relative medium:left-[5vw]">
        <h2 className="mb-5 text-sm font-semibold uppercase">
          <a
            href="/"
            className="text-golden no-underline hover:opacity-80 transition-opacity"
          >
            Online Booking
          </a>
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <Link
              to="/"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Book now
            </Link>
          </li>
        </ul>
      </div>

      {/* Booking Info */}
      <div>
        <h2 className="mb-5 text-sm font-semibold uppercase">
          <a
            href="/booking/booking-info"
            className="text-golden no-underline hover:opacity-80 transition-opacity"
          >
            Booking Info
          </a>
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <a
              href="/booking/booking-info#fare-rules"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Fare Rules
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/booking/booking-info#payment-options"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Payment Options
            </a>
          </li>
          <li>
            <a
              href="/booking/booking-info#tax-fee-surcharge"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Tax, Fee, and Surcharge
            </a>
          </li>
        </ul>
      </div>

      {/* Additional Services */}
      <div>
        <h2 className="mb-5 text-sm font-semibold uppercase">
          <a
            href="/booking/additional-services"
            className="text-golden no-underline hover:opacity-80 transition-opacity"
          >
            Additional Service
          </a>
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <a
              href="/booking/additional-services#seat-selection"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Seat Selection
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/booking/additional-services#excess-baggage"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Excess Baggage
            </a>
          </li>
          <li>
            <a
              href="/booking/additional-services#business-lounge"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Business Lounge
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Explore;
