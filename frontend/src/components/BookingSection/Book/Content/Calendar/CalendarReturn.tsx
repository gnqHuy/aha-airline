import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

interface Props {
  handleSetupSelectedDateReturn: (date: string) => void
  handleSetupDisplayCalendarReturn: () => void
}

const CalendarReturn: React.FC<Props> = ({ handleSetupSelectedDateReturn, handleSetupDisplayCalendarReturn }) => {
  const handleDayClick = (date: any) => {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear())
    handleSetupSelectedDateReturn(`${day}/${month}/${year}`)
    handleSetupDisplayCalendarReturn()
  }

  return (
    <div className="w-[27rem] h-[18rem] text-center">
      <Calendar
        locale="en-US"
        onClickDay={handleDayClick}
        className="w-full h-full border-none"
        tileClassName={() => 'font-bold h-[2.45rem]'}
        navigationLabel={({ label }) => <span className="text-[#ebc94e]">{label}</span>}
        prevLabel={<span className="text-white">‹</span>}
        nextLabel={<span className="text-white">›</span>}
      />
    </div>
  )
}

export default CalendarReturn
