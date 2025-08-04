import React, { useEffect, useState } from 'react'
import Layout from '../../../layout/Layout'

type Props = {}

const TravelInfoCheckIn = (props: Props) => {
    const [guideStep, setGuideStep] = useState<number>(1);

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
        <div className="relative overflow-x-clip overflow-y-auto bg-slate-50">
            {/* Online Check-in */}
            <div className="relative w-[75vw] mx-auto mt-4">
                <p className="text-3xl text-ahaAmber-2 font-bold">Check In</p>
                <div className="relative mt-8" id="online">
                    <p className="text-2xl text-ahaGreen-0 font-bold">Online Check-in</p>
                    <p className="text-lg">Web check–in is only available for Domestic flights operated by AHA Airlines, departing from Noi Bai (HAN), Da Nang (DAD), Tan Son Nhat (SGN), Nha Trang (CXR), Quy Nhon (UIH) airports.</p>

                    <p className="text-xl text-ahaGreen-0 font-bold mt-4">Check-in online instructions</p>
                    <p className="text-lg"><b>Step 1:</b> Click “Check-in” on AHA Airlines’ website.</p>
                    <p className="text-lg"><b>Step 2:</b> Input PNR (Passenger name record) or ticket number and last name of one of the passengers.</p>
                    <p className="text-lg"><b>Step 3:</b> Select passenger and flight, then click “Next”.</p>
                    <p className="text-lg"><b>Step 4:</b> Please read carefully the ICI regulations on passenger and cargo, then choose “Agree” and “Next”.</p>
                    <p className="text-lg"><b>Step 5:</b> In the following screen, you can select additional services and proceed to pay. If not, please click “Next”.</p>
                    <p className="text-lg"><b>Step 6:</b> Upon check-in completion, a success message will be shown. You can choose to print or receive via email your boarding pass.</p>
                    <p className="text-lg"><b>Step 7:</b> Upon arrival at the airport, please show your boarding pass and required documents at the check-in counter to check your baggage. If you do not bring checked baggage, you can go directly to the security gate and show your Boarding pass. Once completed, you will arrive at the boarding gate.</p>

                    {/* Cases where online check-in is not applicable */}
                    <p className="text-xl text-ahaGreen-0 font-bold mt-6">Cases Where Online Check-in Is Not Applicable</p>
                    <p className="text-lg">To best support customers in obtaining practical benefits on their flights, the following cases do not apply to online check-in:</p>
                    <ul className="list-disc ml-6">
                        <li>Passengers with special service requests (except for special meal service).</li>
                        <li>Passengers who have been refused carriage or deported.</li>
                        <li>Passengers traveling with infants under 02 years of age.</li>
                        <li>Pregnant women.</li>
                        <li>Passengers requiring medical assistance (wheelchair service).</li>
                        <li>Passengers departing from cities not listed above.</li>
                    </ul>
                </div>

                {/* Airport Check-in */}
                <div className="relative mt-20" id="airport">
                    <p className="text-2xl text-ahaGreen-0 font-bold">Airport Check-in</p>
                    <p className="text-lg mt-2">For a great travel experience with AHA Airlines, please refer to the following procedures for your check-in at the airport.</p>
                </div>

                {/* Cancel Check-in */}
                <div className="relative mt-28" id="cancel">
                    <p className="text-2xl text-ahaGreen-0 font-bold">Cancel Check-in</p>
                    <p className="text-lg"><b>Option 1:</b> Cancel check-in status as soon as the system confirms successful check-in.</p>
                    <p className="text-lg"><b>Option 2:</b> Access the website of AHA Airlines to cancel check-in.</p>
                </div>
            </div>
        </div>

    </Layout>
  )
}

export default TravelInfoCheckIn