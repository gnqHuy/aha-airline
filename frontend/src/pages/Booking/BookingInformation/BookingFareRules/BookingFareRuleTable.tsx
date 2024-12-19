import React from 'react'

type Props = {}

const BookingFareRuleTable = (props: Props) => {
  return (
    <div className = "absolute ">
        {/* header */}
        <div className = "flex text-center border-x-2 border-y-[1px] border-solid border-white">
            <div className = "w-[8rem] bg-[#ebc94e] h-[3rem]  text-[black] font-bold">
                <p className = "relative bottom-[0.1rem]">Group</p>
            </div>
            <div className = "w-[16rem] bg-[#ebc94e] h-[3rem]  text-[black] font-bold">
                <p className = "relative bottom-[0.1rem]">Business</p>
            </div>
            <div className = "w-[16rem] bg-[#ebc94e] h-[3rem]  text-[black] font-bold">
                <p className = "relative bottom-[0.1rem]">Skyboss</p>
            </div>
            <div className = "w-[16rem] bg-[#ebc94e] h-[3rem]  text-[black] font-bold">
                <p className = "relative bottom-[0.1rem]">Deluxe</p>
            </div>
            <div className = "w-[16rem] bg-[#ebc94e] h-[3rem]  text-[black] font-bold">
                <p className = "relative bottom-[0.1rem]">Eco</p>
            </div>
        </div>

        {/* carry-on baggage */}
        <div className = "w-[72rem] bg-[#b3afaf] relative bottom-[0rem]  font-bold text-sm h-[2.5rem] border-x-2 border-y-[1px] border-solid border-white">
            <p className = "absolute left-[1rem] top-[-0.2rem]">Carry-on baggage</p>
        </div>

        {/* carry-on baggage content */}
        <div className = "flex text-[#ebc94e]">
            <div className = "relative">
                <div className = "w-[8rem] h-[2.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative bottom-[0.3rem]">Group 1</p>
                </div>
                <div className = "w-[8rem] h-[2.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative bottom-[0.3rem]">Group 2</p>
                </div>
            </div>
            <div className = "relative w-[16rem] h-[5.1rem] bg-[#1A4532] text-center border-x-2 border-y-[1px] border-solid border-white">
                <p className = "relative top-[1rem]">18 Kgs</p>
            </div>
            <div className = "relative">
                <div className = "w-[16rem] h-[2.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative bottom-[0.3rem]">10 Kgs</p>
                </div>
                <div className = "w-[16rem] h-[2.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative bottom-[0.3rem]">14 Kgs</p>
                </div>
            </div>
            <div className = "relative">
                <div className = "w-[31.4rem] h-[2.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative bottom-[0.3rem]">07 Kgs</p>
                </div>
                <div className = "flex">
                    <div className = "w-[16rem] h-[2.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                        <p className = "relative bottom-[0.3rem]">10 Kgs</p>
                    </div>
                    <div className = "w-[15.2rem] h-[2.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                        <p className = "relative bottom-[0.3rem]">07 Kgs</p>
                    </div>
                </div>
            </div>
        </div>

        {/* checked baggage */}
        <div className = "w-[72rem] bg-[#b3afaf] relative bottom-[0rem]  font-bold text-sm h-[2.5rem] border-x-2 border-y-[1px] border-solid border-white">
            <p className = "absolute left-[1rem] top-[-0.2rem]">Checked baggage</p>
        </div>

        {/* checked baggage content */}
        <div className = "flex text-[#ebc94e]">
            <div className = "relative">
                <div className = "w-[8rem] h-[2.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative bottom-[0.3rem]">Group 1</p>
                </div>
                <div className = "w-[8rem] h-[3.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative bottom-[0rem]">Group 2</p>
                </div>
            </div>

            <div>
                <div className = "flex">
                    <div className = "relative w-[16rem] h-[2.5rem] bg-[#1A4532] text-center border-x-2 border-y-[1px] border-solid border-white">
                        <p className = "relative" style = {{fontSize: "12px"}}>40 Kgs and 01 (one) Golf club set (if any)</p>
                    </div>
                    <div className = "relative w-[16rem] h-[2.5rem] bg-[#1A4532] text-center border-x-2 border-y-[1px] border-solid border-white">
                        <p className = "relative" style = {{fontSize: "12px"}}>30 Kgs and 01 (one) Golf club set (if any)</p>
                    </div>
                </div>
                <div className = "flex">
                    <div className = "relative w-[16rem] h-[3.5rem] bg-[#1A4532] text-center border-x-2 border-y-[1px] border-solid border-white">
                        <p className = "relative" style = {{fontSize: "12px"}}>60 Kgs or 40kgs (maximum 03 packages for PER, ADL) and 01 Golf club set (if any)</p>
                    </div>
                    <div className = "relative w-[16rem] h-[3.5rem] bg-[#1A4532] text-center border-x-2 border-y-[1px] border-solid border-white">
                        <p className = "relative" style = {{fontSize: "12px"}}>50kgs or 40kgs (maximum 02 packages for PER, ADL) and 01 Golf club set (if any)</p>
                    </div>
                </div>
            </div>

            <div className = "flex">
                <div>
                    <div className = "relative w-[16rem] h-[2.5rem] bg-[#1A4532] text-center border-x-2 border-y-[1px] border-solid border-white">
                        <p className = "relative" style = {{fontSize: "12px"}}>20 Kgs</p>
                    </div>
                    <div className = "relative w-[16rem] h-[3.5rem] bg-[#1A4532] text-center border-x-2 border-y-[1px] border-solid border-white">
                        <p className = "relative" style = {{fontSize: "12px"}}>40kgs or 20kgs (maximum 01 packages for PER, ADL) </p>
                    </div>
                </div>

                <div>
                    <div className = "relative w-[15.2rem] h-[6.1rem] bg-[#1A4532] text-center border-x-2 border-y-[1px] border-solid border-white">
                        <p className = "relative top-[1rem]" style = {{fontSize: "15px"}}>Extra Cost</p>
                    </div>
                </div>
            </div>
        </div>

        {/* hot meal */}
        <div className = "w-[72rem] bg-[#b3afaf] relative bottom-[0rem]  font-bold text-sm h-[2.5rem] border-x-2 border-y-[1px] border-solid border-white">
            <p className = "absolute left-[1rem] top-[-0.2rem]">Hot meal</p>
        </div>

        {/* hot meal content */}
        <div className = "flex text-[#ebc94e]">
            <div className = "relative">
                <div className = "w-[8rem] h-[2.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative bottom-[0.3rem]">Group 1</p>
                </div>
                <div className = "w-[8rem] h-[3.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative bottom-[0rem]">Group 2</p>
                </div>
            </div>
            <div>
                <div className = "relative w-[32.2rem] h-[6.1rem] bg-[#1A4532] text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative top-[1rem]">Included</p>
                </div>
            </div>
            <div className = "flex">
                <div>
                    <div className = "relative w-[16rem] h-[2.5rem] bg-[#1A4532] text-center border-x-2 border-y-[1px] border-solid border-white">
                        <p className = "relative" style = {{fontSize: "12px"}}>Extra cost</p>
                    </div>
                    <div className = "relative w-[16rem] h-[3.5rem] bg-[#1A4532] text-center border-x-2 border-y-[1px] border-solid border-white">
                        <p className = "relative top-[0.5rem]" style = {{fontSize: "12px"}}>01 combo meal and drink</p>
                    </div>
                </div>
                <div>
                    <div className = "relative w-[15.2rem] h-[2.5rem] bg-[#1A4532] text-center border-x-2 border-y-[1px] border-solid border-white">
                        <p className = "relative" style = {{fontSize: "12px"}}>Extra cost</p>
                    </div>
                    <div className = "relative w-[15.2rem] h-[3.5rem] bg-[#1A4532] text-center border-x-2 border-y-[1px] border-solid border-white">
                        <p className = "relative top-[-0.5rem]" style = {{fontSize: "12px"}}>Extra cost</p>
                        <p className = "relative bottom-[1.2rem]" style = {{fontSize: "12px"}}>(Kazakhstan routes: included 1 combo meal and drink)</p>
                    </div>
                </div>
            </div>
        </div>

        {/* 03-in-01 amenities */}
        <div className = "w-[72rem] bg-[#b3afaf] relative bottom-[0rem]  font-bold text-sm h-[2.5rem] border-x-2 border-y-[1px] border-solid border-white">
            <p className = "absolute left-[1rem] top-[-0.2rem]">03-in-01 amenities</p>
        </div>
        <div className = "flex text-[#ebc94e]">
            <div className = "relative">
                <div className = "w-[8rem] h-[2.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative bottom-[0.3rem]">Group 1</p>
                </div>
                <div className = "w-[8rem] h-[2.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative bottom-[0.3rem]">Group 2</p>
                </div>
            </div>
            <div className = "flex">
                <div className = "w-[16rem] h-[5.1rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative top-[1rem]">Included</p>
                </div>
                <div className = "w-[16rem] h-[5.1rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative top-[1rem]">Not permitted</p>
                </div>
            </div>
            <div>
                <div className = "w-[31.4rem] h-[5.1rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative top-[1rem]">Not permitted</p>
                </div>
            </div>
        </div>

        {/* seat */}
        <div className = "w-[72rem] bg-[#b3afaf] relative bottom-[0rem]  font-bold text-sm h-[2.5rem] border-x-2 border-y-[1px] border-solid border-white">
            <p className = "absolute left-[1rem] top-[-0.2rem]">Seat</p>
        </div>
        <div className = "flex text-[#ebc94e]">
            <div className = "relative">
                <div className = "w-[8rem] h-[2.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative bottom-[0.3rem]">Group 1</p>
                </div>
                <div className = "w-[8rem] h-[2.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative bottom-[0.3rem]">Group 2</p>
                </div>
            </div>
            <div>
                <div className = "w-[32.2rem] h-[5.1rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative top-[1rem]">Free of charge</p>
                </div>
            </div>
            <div className = "flex">
                <div className = "w-[16rem] h-[5.1rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative top-[0.5rem]">Free of charge (excluding SkyBoss seats)</p>
                </div>
                <div className = "w-[15.2rem] h-[5.1rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative top-[1rem]">Extra cost</p>
                </div>
            </div>
        </div>

        {/* priority check in */}
        <div className = "w-[72rem] bg-[#b3afaf] relative bottom-[0rem]  font-bold text-sm h-[2.5rem] border-x-2 border-y-[1px] border-solid border-white">
            <p className = "absolute left-[1rem] top-[-0.2rem]">Priority Check-in</p>
        </div>
        <div className = "flex text-[#ebc94e]">
            <div className = "relative">
                <div className = "w-[8rem] h-[2.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative bottom-[0.3rem]">Group 1</p>
                </div>
                <div className = "w-[8rem] h-[2.5rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative bottom-[0.3rem]">Group 2</p>
                </div>
            </div>
            <div className = "flex">
                <div className = "w-[32.2rem] h-[5.1rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative top-[1rem]">Included</p>
                </div>
                <div className = "w-[31.4rem] h-[5.1rem] bg-[#1A4532] relative text-center border-x-2 border-y-[1px] border-solid border-white">
                    <p className = "relative top-[1rem]">Not permitted</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookingFareRuleTable