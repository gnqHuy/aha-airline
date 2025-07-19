import React from 'react'
import Calendar from 'react-calendar'

interface Props {
  handleSetupSelectedDateDepart: (date: string) => void
  handleSetupDisplayCalendarDepart: () => void
}

const CalendarDepart: React.FC<Props> = ({ handleSetupSelectedDateDepart, handleSetupDisplayCalendarDepart }) => {
  const handleDayClick = (date: any) => {
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear())
    handleSetupSelectedDateDepart(`${day}/${month}/${year}`)
    handleSetupDisplayCalendarDepart()
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

export default CalendarDepart
