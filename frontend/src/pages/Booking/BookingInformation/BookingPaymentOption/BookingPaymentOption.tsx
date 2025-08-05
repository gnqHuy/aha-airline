import React from "react";

const BookingPaymentOption = () => {
  return (
    <div className="text-[#1A4532] px-4 md:px-0 max-w-[75vw] mx-auto space-y-10">
      {/* Title */}
      <h2 className="text-3xl font-bold">Payment Options</h2>

      {/* Description */}
      <div className="text-lg leading-relaxed space-y-4">
        <p>
          When purchasing tickets online on Vietnam Airlines' website or mobile app,
          passengers can pay using one of the following methods:
        </p>

        {/* List of methods */}
        <ul className="list-disc list-inside space-y-2 pl-4">
          <li>
            <span className="font-medium">International payment cards:</span> Visa, Master, JCB, Amex, UATP, UnionPay;
          </li>
          <li>
            <span className="font-medium">Domestic methods:</span> Napas Payment Gateway, Momo, ShopeePay;
          </li>
          <li>
            <span className="font-medium">Country/region-specific methods:</span> AliPay, WeChat Pay, Konbini, KCP, Sofort, PayPal;
          </li>
          <li>
            <span className="font-medium">Post payment:</span>
            <ul className="list-disc list-inside pl-5 mt-1 space-y-1 text-base">
              <li>Applicable to all points of sale: Go to “Manage Booking” on Vietnam Airlines’ website/mobile app</li>
              <li>Within Vietnam: Internet Banking, ATM payment, cash at bank counters/convenience stores, international card installment via NganLuong</li>
            </ul>
          </li>
        </ul>

        {/* Final note */}
        <p>
          For more information about payment methods, see{" "}
          <a href="#" className="text-ahaAmber-2 underline hover:opacity-80">here</a>.
        </p>
      </div>
    </div>
  );
};

export default BookingPaymentOption;
