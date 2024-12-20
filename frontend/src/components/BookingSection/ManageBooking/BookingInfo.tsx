import React from 'react'
import './BookingInfo.css';

interface Props {
    storeReservationCode: string;
    storeLastname: string;
    handleDisplayInfo: () => void;
}

const BookingInfo:React.FC<Props> = ({storeReservationCode, storeLastname, handleDisplayInfo}) => {
  return (
    <div>
        {/* box info */}
        <div className = "w-[95%] h-[20rem] bg-[#edd798]">
            <div className = "w-[100%] h-[2.5rem] bg-white">
                <span className = "text-lg pl-[1rem] relative top-[0.5rem] font-bold text-Green">Reservation Code: {storeReservationCode}</span>
            </div>
            <div className = "flex h-[17.5rem]">
                <div className = "ml-[1rem]">
                    <p className = "text-Green font-bold text-lg">Journey info:</p>
                    <ul id = "journey-list" className = "mb-[1rem] text-base relative bottom-[0.5rem]">
                        <li>Sample Journey 1</li>
                        <li>Sample Journey 2</li>
                    </ul>
                </div>
                <div className = "w-[0.01rem] h-[80%] bg-gray-500 rounded-[8px] mt-[1.8rem] ml-[28%]"></div>
                <div className = "ml-[1rem]">
                    <p className = "text-Green font-bold text-lg">Customer info:</p>
                    <ul id = "journey-list" className = "text-base relative bottom-[0.5rem]">
                        <li>{storeLastname}/ Ticket Number 1</li>
                        <li>{storeLastname}/ Ticket Number 2</li>
                        <li>{storeLastname}/ Ticket Number 3</li>
                        <li>{storeLastname}/ Ticket Number 4</li>
                    </ul>
                    <p className = "text-Green font-bold text-lg">E-mail address:</p>
                    <p className = "text-lg relative bottom-[1rem] ml-[1rem]">nguyenducanh2925@gmail.com</p>
                </div>
            </div>
        </div>

        {/* buttons */}
        <div className = "flex mt-[1.5rem]">
            <button className = "w-[8rem] h-[2.5rem] bg-white text-Green border-[2px] border-Green border-solid rounded-[8px] font-bold text-base absolute right-[15rem] hover:cursor-pointer" onClick = {handleDisplayInfo}>Close</button>
            <button className = "w-[8rem] h-[2.5rem] bg-golden-ramsay text-white border-[2px] border-none rounded-[8px] font-bold text-base absolute right-[5rem] hover:cursor-pointer">Services</button>
        </div>
    </div>
  )
}

export default BookingInfo