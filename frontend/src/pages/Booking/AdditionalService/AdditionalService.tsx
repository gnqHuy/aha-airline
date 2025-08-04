import React, { useEffect } from 'react'
import Layout from '../../../layout/Layout'
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
        <div className = "relative h-full overflow-x-clip overflow-y-auto bg-slate-50 bottom-[0rem]">
            <div className = "relative left-[12vw] top-[1rem]">
                <p className="text-3xl text-ahaAmber-2 font-bold">Additional Services</p>
                <div className = "relative top-[2rem]">
                    <section id = "seat-selection">
                        <SeatSelection />
                    </section>
                    <div className = "relative top-[5rem]">
                        <section id = "excess-baggage">
                            <ExcessBaggage />
                        </section>
                    </div>
                    <section id = "business-lounge" className = "relative top-[10rem]">
                        <BusinessLounge />
                    </section>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default AdditionalService