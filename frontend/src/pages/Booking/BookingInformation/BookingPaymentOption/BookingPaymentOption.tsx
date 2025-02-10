import React from 'react'

type Props = {}

const BookingPaymentOption = (props: Props) => {
  return (
    <div className = "w-[75vw]">
        <p className = " text-3xl text-[#1A4532] font-bold">Payment Options</p>
        <div className = " text-lg">
            <p>When purchasing tickets online on Vietnam Airlines' website or mobile app, passengers can pay using one of the following methods:</p>
            <ul>
                <li>International payment cards (Visa, Master, JCB, Amex, UATP, UnionPay);</li>
                <li>Payment methods within Vietnam: Napas Payment Gateway, Momo, ShopeePay;</li>
                <li>Country/region-specific payment methods: AliPay, WeChat Pay, Konbini, KCP, Sofort, Paypal; </li>
                <li>Post payment:</li>
                <div className = "relative bottom-[0.5rem]">
                    <p>+Applicable to all points of sale: Go to “Manage Booking" on Vietnam Airlines’ website/mobile app</p>
                    <p className = "bottom-[0.5rem]">+Applicable to points of sale within Vietnam: Internet Banking app, payment via ATM, cash payment at bank counters and convenience stores, international card installment via the NganLuong payment gateway.</p>
                </div>
            </ul>
            <p>For more information about payment methods, see here.</p>
        </div>
    </div>
  )
}

export default BookingPaymentOption