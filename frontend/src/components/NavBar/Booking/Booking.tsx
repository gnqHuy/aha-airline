import React from 'react';

type Props = {};

const Explore = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-16 md:grid-cols-3 pl-8">
      {/* Online Booking */}
      <div>
        <h2 className="mb-5 text-sm font-semibold uppercase text-golden ">
          Online Booking
        </h2>
        <ul className="font-medium text-sm list-none p-0 leading-relaxed">
          <li className="mb-4">
            <a
              href="/vietnam"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Book now
            </a>
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
            <a
              href="/offers/buy-one-get-one"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Fare Rules
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/offers/buy-one-get-one"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Payments Option
            </a>
          </li>
          <li>
            <a
              href="/offers/discount-20"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Tax, Fee and Surcharge
            </a>
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
            <a
              href="/privacy-policy"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Seat Selection
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/terms-and-conditions"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Excess Baggage
            </a>
          </li>
          <li>
            <a
              href="/terms-and-conditions"
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
