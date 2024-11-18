import React from 'react'
import './BookingSectionBook.css';
import { RiExpandUpDownFill } from "react-icons/ri";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

interface Props {
  sectionTab: string;
  handleChangeTab: (tabName: string) => void;
}

const BookingSectionBook: React.FC<Props> = ({sectionTab, handleChangeTab}) => {
  return (
    <div>
      <div className = {sectionTab === "book" ? "overlay" : ""} onClick = {() => handleChangeTab("default")}></div>
      <div className = {sectionTab === "book" ? "bookingSection_book_container fadeIn focusedDiv": "bookingSection_book_container fadeIn"}>
          <div className = "bookingSection_book_fromInput">
            <span id = "bookingSection_book_fromText">From</span>
            <div className = "bookingSection_book_fromDestination">
              <p>Hanoi (HAN), Vietnam</p>
              <span id = "expand_icon"><RiExpandUpDownFill style = {{width: "1.2rem", height: "2.4rem", position: "absolute", bottom: "-0.3rem", left: "10.6rem", color: "gray"}}/></span>
            </div>
            <div className = "bookingSection_book_transform">
              <FaArrowRightArrowLeft style = {{width: "1.3rem", height: "1.3rem", position: "relative", top: "1.3rem", left: "0.7rem"}}/>
            </div>
          </div>
          <div className = "bookingSection_book_toInput">
              <div className = "booingSection_book_toDestination">
                <p>To</p>
                <span id = "expand_icon"><RiExpandUpDownFill style = {{width: "1.2rem", height: "2.4rem", position: "absolute", bottom: "-0.3rem", left: "10.6rem", color: "gray"}}/></span>
              </div>
          </div>
          <div className = "bookingSection_book_depart">
              <div className = "bookingSection_book_departInput">
                <p>Depart</p>
                <span><FaCalendarAlt style = {{width: "1.2rem", height: "2.4rem", position: "absolute", bottom: "0.2rem", left: "10.6rem", color: "gray"}}/></span>
              </div>
          </div>
          <div className = "bookingSection_book_returnDepart">
            <div className = "bookingSection_book_returnInput">
              <p>Return</p>
              <span><FaCalendarAlt style = {{width: "1.2rem", height: "2.4rem", position: "absolute", bottom: "0.2rem", left: "10.6rem", color: "gray"}}/></span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default BookingSectionBook