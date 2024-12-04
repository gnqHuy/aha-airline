import React, { useState, useEffect } from "react";
import offersData from "../../../assets-test/Json/offers.json";


const Explore: React.FC = () => {
    const offers = offersData.slice(0, 5);

  return (
    <div className="grid grid-cols-2 sm:gap-20 sm:grid-cols-3 pl-8">
      <div>
        <h2 className="mb-5 text-sm font-semibold uppercase">
          <a
            href="/explore/destination"
            className="text-golden no-underline hover:opacity-80 transition-opacity"
          >
            Destination
          </a>
        </h2>
        <ul className="font-medium text-sm list-none p-0">
          <li className="mb-4">
            <a
              href="/explore/destination#asia"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Asia
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/explore/destination#europe"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Europe
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/explore/destination#africa"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Africa
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/explore/destination#north-america"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              North America
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/explore/destination#oceania"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Oceania
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="mb-5 text-sm font-semibold uppercase">
          <a
            href="/explore/offer"
            className="text-golden no-underline hover:opacity-80 transition-opacity"
          >
            Offer
          </a>
        </h2>
        <ul className="font-medium text-sm list-none p-0">
          {offers.map((offer) => (
            <li className="mb-4" key={offer.id}>
              <a href={`/explore/offer#${offer.code}`}
                className="text-black no-underline hover:opacity-80 transition-opacity"
              >
                {offer.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="mb-5 text-sm font-semibold uppercase">
          <a
            href="/explore/experience"
            className="text-golden no-underline hover:opacity-80 transition-opacity"
          >
            Experience
          </a>
        </h2>
        <ul className="font-medium text-sm list-none p-0">
          <li className="mb-4">
            <a
              href="/explore/experience#cabin-classes"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Cabin Classes
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/explore/experience#services"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Our Services
            </a>
          </li>
          <li className="mb-4">
            <a
              href="/explore/experience#privacy-policy"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/explore/experience#terms-and-conditions"
              className="text-black no-underline hover:opacity-80 transition-opacity"
            >
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Explore;
