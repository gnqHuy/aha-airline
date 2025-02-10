import React from 'react'
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

interface Props {
    handleIncreaseAdultPassenger: () => void;
    handleDecreaseAdultPassenger: () => void;
    handleIncreaseChildrenPassenger: () => void;
    handleDecreaseChildrenPassenger: () => void;
    handleIncreaseInfantPassenger: () => void;
    handleDecreaseInfantPassenger: () => void;
    adultPassengerQuantity: number;
    childrenPassengerQuantity: number;
    infantPassengerQuantity: number;
}

const PassengerInfo: React.FC<Props> = ({handleIncreaseAdultPassenger, handleDecreaseAdultPassenger, handleIncreaseChildrenPassenger, handleDecreaseChildrenPassenger, handleIncreaseInfantPassenger, handleDecreaseInfantPassenger, adultPassengerQuantity, childrenPassengerQuantity, infantPassengerQuantity}) => {
  return (
    <div className = "w-[18rem] h-[12rem] bg-white z-[100]">
        {/* adult */}
        <div className = "absolute top-[0rem] w-[20rem] h-[4rem]" style = {{borderBottom: "1px solid #c9c9c7"}}>
            <p className = " absolute left-[0.8rem]" style = {{fontSize: "15px"}}>Adults</p>
            <p className = " absolute left-[0.8rem] top-[1.5rem] text-[#1A4532]" style = {{fontSize: "11px"}}>Adults (from 12 years)</p>
            <CiCircleMinus className = {adultPassengerQuantity === 1 ? "w-[2.5rem] h-[2.5rem] absolute left-[10rem] top-[0.8rem]" : "w-[2.5rem] h-[2.5rem] absolute left-[10rem] top-[0.8rem] hover:cursor-pointer"} style = {{color: adultPassengerQuantity === 1 ? "#cfcfca" : "#1A4532"}} onClick = {handleDecreaseAdultPassenger}/>

            <CiCirclePlus className = {(adultPassengerQuantity >= 1 && adultPassengerQuantity < 6) ? "w-[2.5rem] h-[2.5rem] absolute left-[15rem] top-[0.8rem] hover:cursor-pointer" : "w-[2.5rem] h-[2.5rem] absolute left-[15rem] top-[0.8rem]"} style = {{color: (adultPassengerQuantity >= 1 && adultPassengerQuantity < 6) ? "#1A4532" : "#cfcfca"}} onClick={handleIncreaseAdultPassenger}/>

            <p className = " absolute left-[13.3rem] top-[-0.7rem]" style = {{fontSize: "27px"}}>{adultPassengerQuantity}</p>
        </div>

        {/* children */}
        <div className = "absolute top-[4rem] w-[20rem] h-[4rem]" style = {{borderBottom: "1px solid #c9c9c7"}}>
            <p className = " absolute left-[0.8rem]" style = {{fontSize: "15px"}}>Children</p>
            <p className = " absolute left-[0.8rem] top-[1.5rem] text-[#1A4532]" style = {{fontSize: "11px"}}>Children (2-12 years)</p>
            <CiCircleMinus className = {childrenPassengerQuantity === 0 ? "w-[2.5rem] h-[2.5rem] absolute left-[10rem] top-[0.8rem]" : "w-[2.5rem] h-[2.5rem] absolute left-[10rem] top-[0.8rem] hover:cursor-pointer"} style = {{color: childrenPassengerQuantity === 0 ? "#cfcfca" : "#1A4532"}} onClick = {handleDecreaseChildrenPassenger}/>

            <CiCirclePlus className = {(childrenPassengerQuantity >= 0 && childrenPassengerQuantity < 2) ? "w-[2.5rem] h-[2.5rem] absolute left-[15rem] top-[0.8rem] hover:cursor-pointer" : "w-[2.5rem] h-[2.5rem] absolute left-[15rem] top-[0.8rem]"} style = {{color: (childrenPassengerQuantity >= 0 && childrenPassengerQuantity < 2) ? "#1A4532" : "#cfcfca"}} onClick={handleIncreaseChildrenPassenger}/>

            <p className = " absolute left-[13.3rem] top-[-0.7rem]" style = {{fontSize: "27px"}}>{childrenPassengerQuantity}</p>
        </div>

        {/* infant */}
        <div className = "absolute top-[8rem] w-[20rem] h-[4rem]" style = {{borderBottom: "1px solid #c9c9c7"}}>
            <p className = " absolute left-[0.8rem]" style = {{fontSize: "15px"}}>Infant</p>
            <p className = " absolute left-[0.8rem] top-[1.5rem] text-[#1A4532]" style = {{fontSize: "11px"}}>Infant (under 2 years)</p>
            <CiCircleMinus className = {infantPassengerQuantity === 0 ? "w-[2.5rem] h-[2.5rem] absolute left-[10rem] top-[0.8rem]" : "w-[2.5rem] h-[2.5rem] absolute left-[10rem] top-[0.8rem] hover:cursor-pointer"} style = {{color: infantPassengerQuantity === 0 ? "#cfcfca" : "#1A4532"}} onClick = {handleDecreaseInfantPassenger}/>

            <CiCirclePlus className = {(infantPassengerQuantity >= 0 && infantPassengerQuantity < 1) ? "w-[2.5rem] h-[2.5rem] absolute left-[15rem] top-[0.8rem] hover:cursor-pointer" : "w-[2.5rem] h-[2.5rem] absolute left-[15rem] top-[0.8rem]"} style = {{color: (infantPassengerQuantity >= 0 && infantPassengerQuantity < 1) ? "#1A4532" : "#cfcfca"}} onClick={handleIncreaseInfantPassenger}/>

            <p className = " absolute left-[13.3rem] top-[-0.7rem]" style = {{fontSize: "27px"}}>{infantPassengerQuantity}</p>
        </div>
    </div>
  )
}

export default PassengerInfo