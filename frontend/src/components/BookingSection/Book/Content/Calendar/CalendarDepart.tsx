import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './CalendarDepart.css';

interface Props {
    handleSetupSelectedDateDepart: (date: string) => void;
    handleSetupDisplayCalendarDepart: () => void;
}

const CalendarDepart: React.FC<Props> = ({handleSetupSelectedDateDepart, handleSetupDisplayCalendarDepart}) => {
    const handleDayClick = (date: any) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear());
        handleSetupSelectedDateDepart(`${day}/${month}/${year}`);
        handleSetupDisplayCalendarDepart();
    };
  return (
    <div className = "">
        <Calendar
            locale = "en-US"
            onClickDay={handleDayClick}
        />
    </div>
  )
}

export default CalendarDepart