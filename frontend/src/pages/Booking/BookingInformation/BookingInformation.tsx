import React, { useEffect } from 'react'
import LayoutDefault from '../../../layout/LayoutDefault'

import BookingFareRules from './BookingFareRules/BookingFareRules'
import BookingPaymentOption from './BookingPaymentOption/BookingPaymentOption'
import BookingTax from './BookingTax/BookingTax'

const BookingInformation = () => {
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const section = document.querySelector(hash)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [])

  return (
    <LayoutDefault>
      <div className="bg-slate-50 px-[12vw] py-8 space-y-10">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-ahaAmber-2">Booking Information</h1>

        {/* Fare Rules Section */}
        <section id="fare-rules">
          <BookingFareRules />
        </section>

        {/* Payment Options Section */}
        <section id="payment-options">
          <BookingPaymentOption />
        </section>

        {/* Tax & Fee Section */}
        <section id="tax-fee-surcharge">
          <BookingTax />
        </section>
      </div>
    </LayoutDefault>
  )
}

export default BookingInformation
