import React, { useState } from 'react'
import './BookingSection.css';
import BookingSectionHeader from './Header/BookingSectionHeader';
import BookingSectionManageBooking from './ManageBooking/BookingSectionManageBooking';
import BookingSectionCheckIn from './CheckIn/BookingSectionCheckIn';
import BookingContent from './Book/Content/BookingContent';

type Props = {}

const  BookingSection= (props: Props) => {
    const [sectionTab, setSectionTab] = useState<string>("default");

    const [prevTab, setPrevTab] = useState<string>("default");

    const handleChangeTab = (tabName: string) => {
      setPrevTab(sectionTab);
      setSectionTab(tabName);
    }
  return (
    <div className = "absolute top-[0rem] left-[17.5rem] medium:left-[2rem] small:left-[1rem] big:left-[8vw]">
        <BookingSectionHeader handleChangeTab = {handleChangeTab} sectionTab={sectionTab}/>
        {(sectionTab === "bookingContent") && <BookingContent sectionTab={sectionTab} handleChangeTab={handleChangeTab}/>}
        {sectionTab === "manageBooking" && <BookingSectionManageBooking sectionTab = {sectionTab} handleChangeTab={handleChangeTab} prevTab = {prevTab}/>}
        {sectionTab === "checkIn" && <BookingSectionCheckIn sectionTab = {sectionTab} handleChangeTab={handleChangeTab} prevTab = {prevTab}/>}
    </div>
  )
}

export default BookingSection