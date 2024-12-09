import React, { useEffect } from 'react'
import Layout from '../../../components/Layout/Layout'
import GenericCard from '../../../components/GenericCard/GenericCard'

import PriceConditionImage from '../../../assets-test/priceCondition.jpg';
import SpecialPriceImage from '../../../assets-test/specialPrice.jpg';
import BookingFareRules from './BookingFareRules/BookingFareRules';
import BookingPaymentOption from './BookingPaymentOption/BookingPaymentOption';
import BookingTax from './BookingTax/BookingTax';

type Props = {}

const BookingInformation = (props: Props) => {
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const section = document.querySelector(hash); 
          if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }
      }, []);
  return (
    <Layout>
        <div className = "h-[280rem] relative overflow-x-clip bottom-[2rem] bg-slate-50">
            <div className = "relative left-[15rem] top-[1rem]">
                <p className="text-3xl text-golden font-bold">Booking information</p>
            </div>
            <div className = "relative left-[15rem] top-[5rem]">
                <section id = "fare-rules">
                    <BookingFareRules />
                </section>

                <div className = "relative top-[70rem]">
                    <section id = "payment-options">
                        <BookingPaymentOption />
                    </section>
                </div>

                <div className = "relative top-[82rem]">
                    <section id = "tax-fee-surcharge">
                        <BookingTax />
                    </section>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default BookingInformation