    import React from 'react';

    type Props = {};
    
    const Explore = (props: Props) => {
      return (
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-16 md:grid-cols-3 pl-8">
          <div>
            <h2 className="mb-5 text-sm font-semibold uppercase text-golden ">
              Check-In
            </h2>
            <ul className="font-medium text-sm list-none p-0 leading-relaxed">
              <li className="mb-4">
                <a
                  href="/vietnam"
                  className="text-black no-underline hover:opacity-80 transition-opacity"
                >
                  Online Check-In
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/vietnam"
                  className="text-black no-underline hover:opacity-80 transition-opacity"
                >
                  Airport Check-In
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/vietnam"
                  className="text-black no-underline hover:opacity-80 transition-opacity"
                >
                  Cancel Check-In
                </a>
              </li>
            </ul>
          </div>
    
          <div>
            <h2 className="mb-5 text-sm font-semibold uppercase text-golden">
              Baggage Info
            </h2>
            <ul className="font-medium text-sm list-none p-0 leading-relaxed">
              <li className="mb-4">
                <a
                  href="/offers/buy-one-get-one"
                  className="text-black no-underline hover:opacity-80 transition-opacity"
                >
                  Carry-On Baggage
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="/offers/buy-one-get-one"
                  className="text-black no-underline hover:opacity-80 transition-opacity"
                >
                  Excess Baggage
                </a>
              </li>
              <li>
                <a
                  href="/offers/discount-20"
                  className="text-black no-underline hover:opacity-80 transition-opacity"
                >
                  Special Baggage
                </a>
              </li>
            </ul>
          </div>
    
          <div>
            <h2 className="mb-5 text-sm font-semibold uppercase text-golden">
                Travel Document
            </h2>
            <ul className="font-medium text-sm list-none p-0 leading-relaxed">
                <li className="mb-4">
                <a
                    href="/privacy-policy"
                    className="text-black no-underline hover:opacity-80 transition-opacity"
                >
                    Passport Requirements
                </a>
                </li>
                <li className="mb-4">
                <a
                    href="/terms-and-conditions"
                    className="text-black no-underline hover:opacity-80 transition-opacity"
                >
                    Visa Information
                </a>
                </li>
                <li>
                <a
                    href="/terms-and-conditions"
                    className="text-black no-underline hover:opacity-80 transition-opacity"
                >
                    Health & Vaccination
                </a>
                </li>
            </ul>
            </div>
        </div>
      );
    };
    
    export default Explore;
    