import React from 'react';

type FloatingInputProps = {
  id: string;
  value: string;
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  isFocused: boolean;
  setFocused: (focused: boolean) => void;
  readOnly?: boolean;
  type?: string;
  className?: string;
};

const FloatingInput: React.FC<FloatingInputProps> = ({
  id,
  value,
  label,
  onChange,
  onClick,
  isFocused,
  setFocused,
  readOnly = false,
  type = 'text',
  className = '',
}) => {
  return (
    <div className={`relative flex flex-col min-w-0 ${className}`}>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        onClick={onClick}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder=" "
        readOnly={readOnly}
        autoComplete="off"
        className="bg-transparent border-none outline-none text-gray-700 text-sm pt-4 cursor-pointer"
      />
      <label
        htmlFor={id}
        className={`absolute left-0 ${
          value || isFocused
            ? 'top-1 text-xs text-ahaAmber-2 font-bold mt-[1px]'
            : 'top-4 text-sm text-ahaAmber-2 font-bold'
        } transform -translate-y-1/2 transition-all`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;

