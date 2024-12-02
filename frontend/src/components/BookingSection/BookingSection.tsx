import React, { useState } from 'react'
import './BookingSection.css';
import BookingSectionHeader from './Header/BookingSectionHeader';
import BookingSectionBook from './Book/BookingSectionBook';
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
    <div className = "absolute top-[0rem] left-[17.5rem]">
        <BookingSectionHeader handleChangeTab = {handleChangeTab} sectionTab={sectionTab}/>
        {(sectionTab === "book" || sectionTab === "default") && <BookingSectionBook sectionTab = {sectionTab} handleChangeTab={handleChangeTab} prevTab = {prevTab}/>}
        {(sectionTab === "bookingContent") && <BookingContent sectionTab={sectionTab} handleChangeTab={handleChangeTab}/>}
        {sectionTab === "manageBooking" && <BookingSectionManageBooking sectionTab = {sectionTab} handleChangeTab={handleChangeTab} prevTab = {prevTab}/>}
        {sectionTab === "checkIn" && <BookingSectionCheckIn sectionTab = {sectionTab} handleChangeTab={handleChangeTab} prevTab = {prevTab}/>}
    </div>
  )
}

export default BookingSection