import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './CalendarDepart.css';

interface Props {
    handleSetupSelectedDateReturn: (date: string) => void;
    handleSetupDisplayCalendarReturn: () => void;
}

const CalendarReturn: React.FC<Props> = ({handleSetupSelectedDateReturn, handleSetupDisplayCalendarReturn}) => {
    const handleDayClick = (date: any) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth()).padStart(2, '0');
        const year = String(date.getFullYear());
        handleSetupSelectedDateReturn(`${day}/${month}/${year}`);
        handleSetupDisplayCalendarReturn();
    };
  return (
    <div>
        <div className = "">
            <Calendar
                locale = "en-US"
                onClickDay={handleDayClick}
            />
        </div>
    </div>
  )
}

export default CalendarReturn