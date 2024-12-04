import React from 'react'
import Layout from '../../../components/Layout/Layout'
import SeatSelection from './SeatSelection/SeatSelection'
import ExcessBaggage from './ExcessBaggage/ExcessBaggage'
import BusinessLounge from './BusinessLounge/BusinessLounge'

type Props = {}

const AdditionalService = (props: Props) => {
  return (
    <Layout>
        <div className = "relative w-full h-[200rem]">
            <div className = "absolute left-[15rem] top-[-1rem]">
                <p className="text-3xl text-golden font-bold">Additional Services</p>
                <div className = "relative top-[2rem]">
                    <SeatSelection />
                    <div className = "relative top-[10rem]">
                        <ExcessBaggage />
                    </div>
                    <div className = "relative top-[20rem]">
                        <BusinessLounge />
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default AdditionalService