import React from 'react';
import { CiCircleMinus, CiCirclePlus } from 'react-icons/ci';

interface Props {
  handleIncreaseAdultPassenger: () => void;
  handleDecreaseAdultPassenger: () => void;
  handleIncreaseChildrenPassenger: () => void;
  handleDecreaseChildrenPassenger: () => void;
  handleIncreaseInfantPassenger: () => void;
  handleDecreaseInfantPassenger: () => void;
  adultPassengerQuantity: number;
  childrenPassengerQuantity: number;
  infantPassengerQuantity: number;
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
  infantPassengerQuantity,
}) => {
  return (
    <div className="absolute left-0 top-full mt-2 w-72 bg-white p-4 rounded-xl shadow-xl border z-50">
      {/* Dropdown Rows */}
      {[
        {
          label: 'Adults',
          subLabel: 'Adults (from 12 years)',
          value: adultPassengerQuantity,
          min: 1,
          max: 6,
          onInc: handleIncreaseAdultPassenger,
          onDec: handleDecreaseAdultPassenger,
        },
        {
          label: 'Children',
          subLabel: 'Children (2-12 years)',
          value: childrenPassengerQuantity,
          min: 0,
          max: 2,
          onInc: handleIncreaseChildrenPassenger,
          onDec: handleDecreaseChildrenPassenger,
        },
        {
          label: 'Infant',
          subLabel: 'Infant (under 2 years)',
          value: infantPassengerQuantity,
          min: 0,
          max: 1,
          onInc: handleIncreaseInfantPassenger,
          onDec: handleDecreaseInfantPassenger,
        },
      ].map(({ label, subLabel, value, min, max, onInc, onDec }) => (
        <div key={label} className="pb-3 border-b last:border-b-0 last:pb-0">
          <p className="text-sm font-semibold">{label}</p>
          <p className="text-xs text-gray-500">{subLabel}</p>
          <div className="flex items-center justify-between mt-2">
            <CiCircleMinus
              className={`w-7 h-7 ${
                value <= min ? 'text-gray-300' : 'text-ahaGreen-2 hover:cursor-pointer'
              }`}
              onClick={value > min ? onDec : undefined}
            />
            <span className="text-lg font-semibold">{value}</span>
            <CiCirclePlus
              className={`w-7 h-7 ${
                value < max ? 'text-ahaGreen-2 hover:cursor-pointer' : 'text-gray-300'
              }`}
              onClick={value < max ? onInc : undefined}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PassengerInfo;
