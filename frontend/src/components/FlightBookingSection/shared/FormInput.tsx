import React from 'react';

interface FormInputProps {
  id: string;
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isFocused: boolean;
  setFocused: (focused: boolean) => void;
  readOnly?: boolean;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  value,
  onChange,
  onFocus,
  onBlur,
  onClick,
  onKeyDown,
  isFocused,
  setFocused,
  readOnly = false,
  type = "text",
  placeholder,
  required = false,
  className = "",
}) => {
  const handleFocus = () => {
    setFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    if (value.length === 0) {
      setFocused(false);
    }
    onBlur?.();
  };

  const labelClasses = `
    absolute left-0 transition-all duration-300 pointer-events-none
    ${isFocused || value ? 
      'text-xs text-gray-600 -top-4' : 
      'text-sm text-gray-500 top-2'
    }
  `;

  const inputClasses = `
    w-full bg-transparent border-0 border-b-2 border-gray-300 
    focus:border-ahaGreen-1 focus:outline-none 
    pt-2 pb-1 text-sm md:text-base
    transition-colors duration-300
    ${readOnly ? 'cursor-pointer' : 'cursor-text'}
    ${className}
  `;

  return (
    <div className="relative w-full">
      <label htmlFor={id} className={labelClasses}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={onClick}
        onKeyDown={onKeyDown}
        readOnly={readOnly}
        placeholder={placeholder}
        required={required}
        className={inputClasses}
        autoComplete="off"
      />
    </div>
  );
};

export default FormInput;