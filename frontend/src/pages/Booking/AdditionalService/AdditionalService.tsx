import React, { useEffect } from 'react'
import Layout from '../../../components/Layout/Layout'
import SeatSelection from './SeatSelection/SeatSelection'
import ExcessBaggage from './ExcessBaggage/ExcessBaggage'
import BusinessLounge from './BusinessLounge/BusinessLounge'

type Props = {}

const AdditionalService = (props: Props) => {
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
        <div className = "relative h-[200rem] overflow-x-clip">
            <div className = "relative left-[15rem] top-[-1rem]">
                <p className="text-3xl text-golden font-bold">Additional Services</p>
                <div className = "relative top-[2rem]">
                    <section id = "seat-selection">
                        <SeatSelection />
                    </section>
                    <div className = "relative top-[10rem]">
                        <section id = "excess-baggage">
                            <ExcessBaggage />
                        </section>
                    </div>
                    <div className = "relative top-[20rem]">
                        <section id = "business-lounge">
                            <BusinessLounge />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default AdditionalService