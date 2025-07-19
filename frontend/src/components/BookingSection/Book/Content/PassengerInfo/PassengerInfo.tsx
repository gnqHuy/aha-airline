import React from 'react'
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci'

interface Props {
  handleIncreaseAdultPassenger: () => void
  handleDecreaseAdultPassenger: () => void
  handleIncreaseChildrenPassenger: () => void
  handleDecreaseChildrenPassenger: () => void
  handleIncreaseInfantPassenger: () => void
  handleDecreaseInfantPassenger: () => void
  adultPassengerQuantity: number
  childrenPassengerQuantity: number
  infantPassengerQuantity: number
}

const PassengerInfo: React.FC<Props> = ({
  handleIncreaseAdultPassenger,
  handleDecreaseAdultPassenger,
  handleIncreaseChildrenPassenger,
  handleDecreaseChildrenPassenger,
  handleIncreaseInfantPassenger,
  handleDecreaseInfantPassenger,
  adultPassengerQuantity,
  childrenPassengerQuantity,
  infantPassengerQuantity
}) => {
  return (
    <div className="w-[18rem] bg-white p-4 space-y-4 rounded shadow z-[100]">
      {/* Row Template */}
      {[{
        label: 'Adults',
        subLabel: 'Adults (from 12 years)',
        value: adultPassengerQuantity,
        min: 1,
        max: 6,
        onInc: handleIncreaseAdultPassenger,
        onDec: handleDecreaseAdultPassenger,
      }, {
        label: 'Children',
        subLabel: 'Children (2-12 years)',
        value: childrenPassengerQuantity,
        min: 0,
        max: 2,
        onInc: handleIncreaseChildrenPassenger,
        onDec: handleDecreaseChildrenPassenger,
      }, {
        label: 'Infant',
        subLabel: 'Infant (under 2 years)',
        value: infantPassengerQuantity,
        min: 0,
        max: 1,
        onInc: handleIncreaseInfantPassenger,
        onDec: handleDecreaseInfantPassenger,
      }].map(({ label, subLabel, value, min, max, onInc, onDec }) => (
        <div key={label} className="border-b border-gray-300 pb-2">
          <p className="text-sm font-medium">{label}</p>
          <p className="text-xs text-[#1A4532]">{subLabel}</p>
          <div className="flex items-center justify-between mt-2">
            <CiCircleMinus
              className={`w-8 h-8 ${value <= min ? 'text-gray-300' : 'text-[#1A4532] hover:cursor-pointer'}`}
              onClick={value > min ? onDec : undefined}
            />
            <p className="text-xl font-semibold text-center">{value}</p>
            <CiCirclePlus
              className={`w-8 h-8 ${value < max ? 'text-[#1A4532] hover:cursor-pointer' : 'text-gray-300'}`}
              onClick={value < max ? onInc : undefined}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PassengerInfo
