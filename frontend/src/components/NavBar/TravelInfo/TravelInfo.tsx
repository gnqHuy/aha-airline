import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Explore: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-16 md:grid-cols-3 pl-8">
      {/* Check-In */}
      <div>
        <h2 className="mb-5 text-sm font-semibold uppercase text-golden">
          Check-In
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <Link
              to="/travel-info/check-in#online"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Online Check-In
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/travel-info/check-in#airport"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Airport Check-In
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/travel-info/check-in#cancel"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Cancel Check-In
            </Link>
          </li>
        </ul>
      </div>

      {/* Baggage Info */}
      <div>
        <h2 className="mb-5 text-sm font-semibold uppercase text-golden">
          Baggage Info
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <Link
              to="/travel-info/baggageinfo#carry-on"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Carry-On Baggage
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/travel-info/baggageinfo#excess"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Excess Baggage
            </Link>
          </li>
          <li>
            <Link
              to="/travel-info/baggageinfo#special"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Special Baggage
            </Link>
          </li>
        </ul>
      </div>

      {/* Travel Document */}
      <div>
        <h2 className="mb-5 text-sm font-semibold uppercase text-golden">
          Travel Document
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <Link
              to="/travel-info/documents#passport"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Passport Requirements
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/travel-info/documents#visa"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Visa Information
            </Link>
          </li>
          <li>
            <Link
              to="/travel-info/documents#health-vaccination"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Health & Vaccination
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Explore;
