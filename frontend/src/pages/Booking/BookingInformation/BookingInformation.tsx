import React from 'react'
import Layout from '../../../components/Layout/Layout'
import GenericCard from '../../../components/GenericCard/GenericCard'

import PriceConditionImage from '../../../assets-test/priceCondition.jpg';
import SpecialPriceImage from '../../../assets-test/specialPrice.jpg';
import BookingFareRules from './BookingFareRules/BookingFareRules';
import BookingPaymentOption from './BookingPaymentOption/BookingPaymentOption';
import BookingTax from './BookingTax/BookingTax';

type Props = {}

const BookingInformation = (props: Props) => {
  return (
    <Layout>
        <div className = "w-full h-[280rem] relative">
            <div className = "absolute left-[15rem] top-[-3rem]">
                <p className="text-3xl text-golden font-bold">Booking information</p>
            </div>
            <div className = "relative left-[15rem] top-[5rem]">
                <BookingFareRules />

                <div className = "relative top-[70rem]">
                    <BookingPaymentOption />
                </div>

                <div className = "relative top-[82rem]">
                    <BookingTax />
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default BookingInformation