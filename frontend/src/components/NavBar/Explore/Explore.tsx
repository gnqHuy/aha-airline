import React from 'react'

type Props = {}

const Explore = (props: Props) => {
  return (
    <div className="grid grid-cols-2 sm:gap-20 sm:grid-cols-3 pl-8">
        {/* Destination Section */}
        <div>
            <h2 className="mb-5 text-sm font-semibold uppercase text-golden">Destination</h2>
            <ul className="font-medium text-sm list-none p-0 ">
            <li className="mb-4">
                <a href="/vietnam" className="text-black no-underline hover:opacity-80 transition-opacity">
                Viet Nam
                </a>
            </li>
            <li className="mb-4">
                <a href="/europe" className="text-black no-underline hover:opacity-80 transition-opacity">
                Europe
                </a>
            </li>
            <li className="mb-4">
                <a href="/asia" className="text-black no-underline hover:opacity-80 transition-opacity">
                Asia
                </a>
            </li>
            <li className="mb-4">
                <a href="/india" className="text-black no-underline hover:opacity-80 transition-opacity">
                India
                </a>
            </li>
            </ul>
        </div>

        {/* Offers Section */}
        <div>
            <h2 className="mb-5 text-sm font-semibold uppercase text-golden">Offers</h2>
            <ul className="font-medium text-sm list-none p-0">
            <li className="mb-4">
                <a href="/offers/buy-one-get-one" className="text-black no-underline hover:opacity-80 transition-opacity">
                Buy One Get One
                </a>
            </li>
            <li>
                <a href="/offers/discount-20" className="text-black no-underline hover:opacity-80 transition-opacity">
                Buy Two Receive 20% Discount
                </a>
            </li>
            </ul>
        </div>

        {/* Experience Section */}
        <div>
            <h2 className="mb-5 text-sm font-semibold uppercase text-golden">Experience</h2>
            <ul className="font-medium text-sm list-none p-0">
            <li className="mb-4">
                <a href="/privacy-policy" className="text-black no-underline hover:opacity-80 transition-opacity">
                Privacy Policy
                </a>
            </li>
            <li>
                <a href="/terms-and-conditions" className="text-black no-underline hover:opacity-80 transition-opacity">
                Terms &amp; Conditions
                </a>
            </li>
            </ul>
        </div>
    </div>
  )
}

export default Explore