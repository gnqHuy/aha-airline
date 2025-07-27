// components/common/FloatingSelect.tsx
import React from 'react';

type FloatingSelectProps = {
  id: string;
  value: string;
  label: string;
  options: { label: string; value: string }[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isFocused: boolean;
  setFocused: (focused: boolean) => void;
  className?: string;
};

const FloatingSelect: React.FC<FloatingSelectProps> = ({
  id,
  value,
  label,
  options,
  onChange,
  isFocused,
  setFocused,
  className = '',
}) => {
  return (
    <div className={`relative flex flex-col w-full ${className}`}>
      <select
        id={id}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="appearance-none bg-transparent border-none outline-none text-gray-700 text-sm pt-4 cursor-pointer"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className={`absolute left-0 ${
          value || isFocused
            ? 'top-1 text-xs text-ahaAmber-2 font-bold mt-[1px]'
            : 'top-5 text-sm text-ahaAmber-2 font-bold'
        } transform -translate-y-1/2 transition-all`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingSelect;
