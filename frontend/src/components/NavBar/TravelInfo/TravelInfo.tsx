import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Explore: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-3 pl-8 medium:relative medium:left-[20vw] medium:grid-cols-3 bg-white">
      {/* Check-In */}
      <div className = "medium:relative medium:left-[17vw]">
        <h2 className="mb-5 text-sm font-semibold uppercase">
          <a
            href="/travel-info/check-in"
            className="text-golden no-underline hover:opacity-80 transition-opacity"
          >
            Check-In
          </a>
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <a
              href="/travel-info/check-in#online"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Online Check-In
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/travel-info/check-in#airport"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Airport Check-In
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/travel-info/check-in#cancel"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Cancel Check-In
            </a>
          </li>
        </ul>
      </div>

      {/* Baggage Info */}
      <div className = "medium:relative medium:left-[13vw]">
        <h2 className="mb-5 text-sm font-semibold uppercase">
          <a
            href="/travel-info/baggageinfo"
            className="text-golden no-underline hover:opacity-80 transition-opacity"
          >
            Baggage Info
          </a>
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <a
              href="/travel-info/baggageinfo#carry-on"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Carry-On Baggage
            </a>
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
      <div className = "medium:relative medium:left-[10vw]">
        <h2 className="mb-5 text-sm font-semibold uppercase">
          <a
            href="/travel-info/traveldocument"
            className="text-golden no-underline hover:opacity-80 transition-opacity"
          >
            Travel Document
          </a>
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <Link
              to="/travel-info/traveldocument#passport"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Passport Requirements
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/travel-info/traveldocument#visa"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Visa Information
            </Link>
          </li>
          <li>
            <Link
              to="/travel-info/traveldocument#health-vaccination"
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
