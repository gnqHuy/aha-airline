import React from 'react'

type Props = {}

const BusinessLounge = (props: Props) => {
  return (
    <div className = "w-[75vw]">
        <p className = " text-3xl text-[#1A4532] font-bold">Business Lounge</p>
        <p className = " text-lg">Tired of spending hours and hours waiting at the airport, eating cold meals? Why not relax on our comfy green armchairs, experience the quintessence of Vietnam’s traditional cuisine, read newspapers in the delicate and elegant space of AHA Airlines’ Business Lounge?</p>
        <p className = " text-lg">AHA Airlines offers all passengers business lounge access (Voucher C-lounge) before departure at the airport.</p>
        <p className = " text-lg">Especially from August 15, 2024 to March 31, 2025, AHA Airlines offers First Lounge at Noi Bai airport promotion with prices from only 360,000 VND/ticket (VAT included).</p>
        <p className = " text-xl font-bold relative top-[1rem]">List of airports with available Bamboo Airways’ business lounge</p>

        {/* table1 */}
        <div className = "relative top-[1rem]">
            <div className = "flex">
                <div className = "w-[11vw] h-[3rem] bg-[#ebc94e] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "small:text-[12px] medium:text-[13px] medium:relative medium:bottom-[0.3rem]">Departure airport</p>
                </div>
                <div className = "w-[11vw] h-[3rem] bg-[#ebc94e] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "small:text-[12px] medium:text-[13px] medium:relative medium:bottom-[0rem]">Ha Noi (HAN)</p>
                </div>
                <div className = "w-[11vw] h-[3rem] bg-[#ebc94e] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "small:text-[12px] medium:text-[13px] medium:relative medium:bottom-[0.3rem]">Ho Chi Minh city (SGN)</p>
                </div>
                <div className = "w-[11vw] h-[3rem] bg-[#ebc94e] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "small:text-[12px] medium:text-[13px] medium:relative medium:bottom-[0.3rem]">Quy Nhon (UIH)</p>
                </div>
                <div className = "w-[11vw] h-[3rem] bg-[#ebc94e] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "small:text-[12px] small:relative small:top-[0.2rem] medium:text-[13px] medium:relative medium:bottom-[0rem]">Da Lat (DLI)</p>
                </div>
                <div className = "w-[11vw] h-[3rem] bg-[#ebc94e] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "small:text-[12px] medium:text-[13px] medium:relative medium:bottom-[0.3rem]">Nha Trang (CXR)</p>
                </div>
            </div>

            <div className = "flex">
                <div className = "w-[11vw] h-[4rem] bg-[#1A4532] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] small:text-[12px] small:relative small:top-[0.5rem]">Lounge</p>
                </div>
                <div className = "w-[11vw] h-[4rem] bg-[#1A4532] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] small:text-[12px] medium:text-[13px] medium:relative medium:bottom-[0.3rem]">First Lounge by AHA Airlines</p>
                </div>
                <div className = "w-[11vw] h-[4rem] bg-[#1A4532] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] small:text-[12px] medium:text-[13px] medium:relative medium:top-[0.3rem]">Le Saigonnais</p>
                </div>
                <div className = "w-[11vw] h-[4rem] bg-[#1A4532] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] small:text-[12px] medium:text-[13px] medium:relative medium:bottom-[0.3rem]">Phu Bai Business Lounge</p>
                </div>
                <div className = "w-[11vw] h-[4rem] bg-[#1A4532] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] small:text-[12px] medium:text-[13px] medium:relative medium:bottom-[0.3rem]">Mimosa Business Lounge</p>
                </div>
                <div className = "w-[11vw] h-[4rem] bg-[#1A4532] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] small:text-[12px] small:relative small:top-[0.5rem] medium:text-[13px] medium:relative medium:top-[0.3rem]">CIAS Lounge</p>
                </div>
            </div>

            <div className = "flex">
                <div className = "w-[11vw] h-[4rem] bg-[#2e8599] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative top-[0.3rem] small:text-[12px] small:relative small:top-[0.5rem]">Adult</p>
                </div>
                <div className = "w-[11vw] h-[4rem] bg-[#2e8599] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative top-[0.3rem] small:text-[12px] small:relative small:top-[0.5rem] medium:text-[13px] medium:top-[0.7rem]">360,000VND</p>
                </div>
                <div className = "w-[11vw] h-[4rem] bg-[#2e8599] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative top-[0.3rem] small:text-[12px] small:relative small:top-[0.5rem] medium:text-[13px] medium:top-[0.7rem]">490,000VND</p>
                </div>
                <div className = "w-[11vw] h-[4rem] bg-[#2e8599] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative top-[0.3rem] small:text-[12px] small:relative small:top-[0.5rem] medium:text-[13px] medium:top-[0.7rem]">400,000VND</p>
                </div>
                <div className = "w-[11vw] h-[4rem] bg-[#2e8599] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative top-[0.3rem] small:text-[12px] small:relative small:top-[0.5rem] medium:text-[13px] medium:top-[0.7rem]">400,000VND</p>
                </div>
                <div className = "w-[11vw] h-[4rem] bg-[#2e8599] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative top-[0.3rem] small:text-[12px] small:relative small:top-[0.5rem] medium:text-[13px] medium:top-[0.7rem]">450,000VND</p>
                </div>
            </div>

            <div className = "flex">
                <div className = "w-[11vw] h-[4rem] bg-[#1A4532] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative top-[-0.2rem] small:text-[11px] medium:text-[12px]">Child (from 2 to 12 years of age)</p>
                </div>
                <div className = "w-[11vw] h-[4rem] bg-[#1A4532] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative top-[0.3rem] small:text-[12px] small:relative small:top-[0.5rem] medium:text-[13px] medium:top-[0.7rem]">180,000VND</p>
                </div>
                <div className = "w-[11vw] h-[4rem] bg-[#1A4532] text-center border-x-[1px] border-y-[1px] border-solid border-white font-bold ">
                    <p className = "text-[#ebc94e] relative top-[0.3rem] small:text-[12px] small:relative small:top-[0.5rem] medium:text-[13px] medium:top-[0.7rem]">490,000VND</p>
                </div>
                <div className = "w-[11vw] h-[4rem] bg-[#1A4532] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative top-[0.3rem] small:text-[12px] small:relative small:top-[0.5rem] medium:text-[13px] medium:top-[0.7rem]">200,000VND</p>
                </div>
                <div className = "w-[11vw] h-[4rem] bg-[#1A4532] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative top-[0.3rem] small:text-[12px] small:relative small:top-[0.5rem] medium:text-[13px] medium:top-[0.7rem]">200,000VND</p>
                </div>
                <div className = "w-[11vw] h-[4rem] bg-[#1A4532] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative top-[0.3rem] small:text-[12px] small:relative small:top-[0.5rem] medium:text-[13px] medium:top-[0.7rem]">225,000VND</p>
                </div>
            </div>

            <div className = "flex">
                <div className = "w-[11vw] h-[5rem] bg-[#2e8599] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] small:text-[11px] medium:text-[12px]">Infant (under 2 years of age)</p>
                </div>
                <div className = "w-[11vw] h-[5rem] bg-[#2e8599] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative bottom-[0.4rem] small:text-[11px] medium:text-[12px]">02 infants: free</p>
                    <p className = "text-[#ebc94e] relative bottom-[1.6rem] small:text-[11px] small:top-[-1rem] medium:text-[12px] medium:bottom-[1rem]">From the 3rd infant: 180,000VND</p>
                </div>
                <div className = "w-[11vw] h-[5rem] bg-[#2e8599] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative bottom-[0.4rem] small:text-[11px] medium:text-[12px]">01 infant: free</p>
                    <p className = "text-[#ebc94e] relative bottom-[1.6rem] small:text-[11px] small:top-[-1rem] medium:text-[12px] medium:bottom-[1rem]">From the 2nd infant: 490,000VND</p>
                </div>
                <div className = "w-[11vw] h-[5rem] bg-[#2e8599] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative bottom-[0.4rem] small:text-[11px] medium:text-[12px]">02 infants: free</p>
                    <p className = "text-[#ebc94e] relative bottom-[1.6rem] small:text-[11px] small:top-[-1rem] medium:text-[12px] medium:bottom-[1rem]">From the 3rd infant: 200,000VND</p>
                </div>
                <div className = "w-[11vw] h-[5rem] bg-[#2e8599] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative bottom-[0.4rem] small:text-[11px] medium:text-[12px]">02 infants: free</p>
                    <p className = "text-[#ebc94e] relative bottom-[1.6rem] small:text-[11px] small:top-[-1rem] medium:text-[12px] medium:bottom-[1rem]">From the 3rd infant: 200,000VND</p>
                </div>
                <div className = "w-[11vw] h-[5rem] bg-[#2e8599] text-center  border-x-[1px] border-y-[1px] border-solid border-white font-bold">
                    <p className = "text-[#ebc94e] relative bottom-[0.4rem] small:text-[11px] medium:text-[12px]">01 infant: free</p>
                    <p className = "text-[#ebc94e] relative bottom-[1.6rem] small:text-[11px] small:top-[-1rem] medium:text-[12px] medium:bottom-[1rem]">From the 2nd infant: 225,000VND</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BusinessLounge