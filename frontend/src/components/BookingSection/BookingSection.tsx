import React, { useState } from 'react'
import './BookingSection.css';
import BookingSectionHeader from './Header/BookingSectionHeader';
import BookingSectionBook from './Book/BookingSectionBook';
import BookingSectionManageBooking from './ManageBooking/BookingSectionManageBooking';
import BookingSectionCheckIn from './CheckIn/BookingSectionCheckIn';

type Props = {}

const  BookingSection= (props: Props) => {
    const [sectionTab, setSectionTab] = useState<string>("default");

    const handleChangeTab = (tabName: string) => {
        setSectionTab(tabName);
    }
  return (
    <div className = "">
        <BookingSectionHeader handleChangeTab = {handleChangeTab} sectionTab={sectionTab}/>
        {(sectionTab === "book" || sectionTab === "default") && <BookingSectionBook sectionTab = {sectionTab} handleChangeTab={handleChangeTab}/>}
        {sectionTab === "manageBooking" && <BookingSectionManageBooking sectionTab = {sectionTab} handleChangeTab={handleChangeTab}/>}
        {sectionTab === "checkIn" && <BookingSectionCheckIn sectionTab = {sectionTab} handleChangeTab={handleChangeTab}/>}
    </div>
  )
}

export default BookingSection