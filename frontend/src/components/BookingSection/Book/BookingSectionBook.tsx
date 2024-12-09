import React, { useEffect, useState } from 'react'
import './BookingSectionBook.css';
import { RiExpandUpDownFill } from "react-icons/ri";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

interface Props {
  sectionTab: string;
  handleChangeTab: (tabName: string) => void;
  prevTab: string;
}

const BookingSectionBook: React.FC<Props> = ({sectionTab, handleChangeTab, prevTab}) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      <div className = {sectionTab === "book" ? "overlay" : ""} onClick = {() => handleChangeTab("default")}></div>
      <div className = {sectionTab === "book" ? (prevTab === "default" ? "bookingSection_book_container fadeIn focusedDiv medium:w-[100vw] big:w-[75vw]" : "bookingSection_book_container focusedDiv medium:w-[90vw] medium:left-[1%] small:w-[90vw] small:h-[4rem] small:left-[1%] big:w-[78vw]"): "bookingSection_book_container fadeIn medium:w-[90vw] medium:left-[1%] small:w-[90vw] big:w-[78vw]"}>
          {/* frominput */}
          <div className = "bookingSection_book_fromInput small:w-[50%]">
            <span id = "bookingSection_book_fromText">From</span>
            <div className = "bookingSection_book_fromDestination cursor-pointer" onClick = {() => handleChangeTab("bookingContent")}>
              <p className = "medium:text-change medium:mb-[1rem] medium:text-red-500">Hanoi (HAN), Vietnam</p>
              <span><RiExpandUpDownFill style = {{color: "gray"}} className = "absolute w-[1.2rem] h-[2.4rem] bottom-[-0.3rem] ml-[11.2vw] medium:ml-[15vw] small:ml-[30vw] big:ml-[13.5vw]"/></span>
            </div>
            <div className = "relative mt-[0.5rem]">
              <FaArrowRightArrowLeft className = "w-[1.3rem] h-[1.3rem] relative top-[1.3rem] left-[0.7rem]"/>
            </div>
          </div>

          {/* toinput */}
          <div className = "bookingSection_book_toInput small:w-[40%]">
              <div className = "booingSection_book_toDestination">
                <p className = "medium:text-change medium:mb-[1rem]">To</p>
                <span id = "expand_icon"><RiExpandUpDownFill style = {{color: "gray"}} className = "absolute w-[1.2rem] h-[2.4rem] bottom-[-0.3rem] ml-[12.5vw] medium:ml-[17.3vw] small:ml-[33vw] big:ml-[14.5vw]"/></span>
              </div>
          </div>

          {/* depart */}
          {windowWidth >= 775 && 
            <div className = "bookingSection_book_depart">
              <div className = "bookingSection_book_departInput">
                <p>Depart</p>
                <span><FaCalendarAlt style = {{color: "gray"}} className = "absolute w-[1.2rem] h-[2.4rem] bottom-[0rem] left-[12vw] medium:left-[17vw] big:left-[14.5vw]"/></span>
              </div>
            </div>
          }

          {/* return */}
          {windowWidth >= 775 && 
            <div className = "bookingSection_book_returnDepart">
              <div className = "bookingSection_book_returnInput">
                <p>Return</p>
                <span><FaCalendarAlt style = {{color: "gray"}} className = "absolute w-[1.2rem] h-[2.4rem] bottom-[0rem] left-[12vw] medium:left-[17vw] big:left-[14.5vw]"/></span>
              </div>
            </div>
          }
      </div>
    </div>
  )
}

export default BookingSectionBook