import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './CalendarDepart.css';

interface Props {
}

const CalendarDepart: React.FC<Props> = () => {
  return (
    <div className = "">
        <Calendar
            locale = "en-US"
        />
    </div>
  )
}

export default CalendarDepart