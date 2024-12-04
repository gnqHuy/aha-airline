import React, { useEffect } from 'react'
import Layout from '../../../components/Layout/Layout'
import ExcessBaggage from '../../Booking/AdditionalService/ExcessBaggage/ExcessBaggage'

type Props = {}

const BaggageInfo = (props: Props) => {
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
        <div className = "relative h-[170rem] overflow-x-clip font-space-grotesk">
            <p className="text-3xl text-golden font-bold relative left-[15rem] top-[0rem]">Baggage Info</p>
            {/* carry-on baggage */}
            <div className = "relative left-[15rem] w-[70rem]" id = "carry-on">
                <p className = "text-3xl text-Green font-bold">Carry-on Baggage</p>
                <p className = "text-lg">Each passenger (except for infants under 2 years old) is allowed the following standard free carry-on baggage on BAV flights: </p>
                <ul className = "relative bottom-[0.5rem]">
                    <li><b>For Economy Class:</b>  01 main piece and/or 01 small handbag/personal item*, with a total maximum weight of 07kg, and the dimensions of the main piece not exceeding 115cm (56 x 36 x 23cm) </li>
                    <li className = "relative top-[0.5rem]"><b>For Business Class:</b>  02 main pieces and/or 01 small handbag/personal item*, with a total maximum weight of 14kg, each main piece having a maximum weight of 07kg and dimensions not exceeding 115cm (56 x 36 x 23cm)  </li>
                </ul>
                <p className = "text-lg">*Small handbag/personal item (including ONE of the following bags/items) – does not require a carry-on baggage tag: </p>
                <ul className = "relative bottom-[0.5rem]">
                    <li>A handbag (for men or women) or a book, magazine, camera, airport shopping bag, etc., with dimensions not exceeding 30cm x 20cm x 10cm, or</li>
                    <li>A thin blanket/scarf/jacket, or</li>
                    <li>An umbrella/walking stick (except those with sharp metal tips), or</li>
                    <li>A book or a newspaper/magazine, or</li>
                    <li>An assistive device for disabled passengers (crutches, canes, or a foldable wheelchair that fits in the overhead bin) or a medical device, or</li>
                    <li>A laptop bag with maximum dimensions of 40cm x 30cm x 10cm</li>
                </ul>
                <div className = "w-[70rem] h-[0.01rem] bg-gray-500"></div>
                <p className = "text-lg">Free carry-on baggage for infants includes:</p>
                <ul>
                    <li>A baby bag (containing food and diapers for use during the flight) not exceeding 3 kg and within the maximum dimensions of the carry-on baggage, and</li>
                    <li className = "relative top-[0.5rem]">A foldable baby stroller/lightweight pram that fits in the overhead bin (not exceeding the weight and/or size of the carry-on baggage)</li>
                </ul>
                <div className = "w-[70rem] h-[0.01rem] bg-gray-500"></div>
                <p className = "text-xl font-bold italic">Note:</p>
                <ul>
                    <li>All carry-on baggage must be weighed and tagged. Untagged carry-on baggage will not be allowed on board (except for passengers who check-in online)</li>
                    <li className = "relative top-[0.5rem]">Small personal items do not need to be tagged</li>
                    <li className = "relative top-[1rem]">Additional free baggage allowance for AHA Club members with First, Diamond, and Gold cards only applies to checked baggage, not carry-on baggage</li>
                    <li className = "relative top-[1.5rem]">AHA Airlines will continue to check carry-on baggage and charge fees at the departure gate if the baggage exceeds the regulations or has not been checked and tagged. Overweight baggage fees at the departure gate will be higher than at the check-in counter.</li>
                    <li className = "relative top-[2rem]">Hand baggage must fit under the seat in front of the passenger or in the overhead bin. Any baggage that exceeds the allowed weight or size will not be permitted on board. Passengers will need to return to the check-in counter to pay for and check their baggage.</li>
                </ul>
            </div>

            {/* excess baggage */}
            <div className = "relative left-[15rem] top-[5rem]" id = "excess">
                <ExcessBaggage />
            </div>

            {/* special baggage */}
            <div className = "w-[70rem] relative left-[15rem] top-[8rem]" id = "special">
                <p className = "text-3xl font-bold text-[#094c5b]">Special Baggage</p>
                <p className = "text-lg relative bottom-[1rem]">AHA Airlines provides a service for transporting oversized luggage, bicycles and sports equipment such as skiing equipment, skateboards as checked baggage.</p>
                <p className = "text-lg relative bottom-[1rem]"><b>Skiing Equipment/ Water Slideboarding:</b> 01 skiing/ surfing board, 01 pair of ski poles, 1 pair of skiing shoes. Any other equipment which is not listed here is not considered as part of skiing equipment/ surfing board.</p>
                <p className = "text-lg relative bottom-[1rem]"><b>Surfing Board:</b> Sports equipment for skiing/surfing including 01 skateboard. </p>
                <p className = "text-lg relative bottom-[1rem]"><b>Diving Equipment:</b> 01 diving suit, 01 diving mask, 01 pair of fins, 01 empty diving tank. We do not offer to carry parts that are considered to be dangerous items such as, diving regulator, diving tank or the likes.</p>
                <p className = "text-lg relative bottom-[1rem]"><b>Archery instrument:</b> 01 bow, 01 standard box of arrows, and 01 maintenance tool box.</p>
                <p className = "text-lg relative bottom-[1rem]"><b>Fishing equipment:</b> 01 to 02 fishing rod, 01 fishing line, 01 fishing net, 1 pair of fishing shoes, 1 fishing tackle box.</p>
                <p className = "text-lg relative bottom-[1rem]"><b>Bowling Equipment:</b> 01 bowling bag, 01-02 bowling ball(s), and 01 pair of bowling shoes.</p>
                <p className = "text-lg relative bottom-[1rem]"><b>Bicycles:</b> include common bicycles and sport bicycles. NOT applicable to electric vehicles, battery-attached vehicles, vehicles containing batteries or dangerous goods.</p>
            </div>
        </div>
    </Layout>
  )
}

export default BaggageInfo