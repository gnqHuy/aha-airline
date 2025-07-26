import React from 'react';

interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  className = '',
  fullWidth = false,
}) => {
  const baseClasses = `
    font-semibold rounded-full border-none transition-all duration-300 
    flex items-center justify-center gap-2
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    transform hover:scale-105 active:scale-95
  `;

  const variantClasses = {
    primary: `
      bg-ahaGreen-1 text-white hover:bg-ahaGreen-2 
      focus:ring-ahaGreen-1 shadow-md hover:shadow-lg
    `,
    secondary: `
      bg-white text-ahaGreen-1 border-2 border-ahaGreen-1 
      hover:bg-ahaGreen-1 hover:text-white
      focus:ring-ahaGreen-1
    `,
    accent: `
      bg-ahaAmber-2 text-white hover:bg-ahaAmber-3 
      focus:ring-ahaAmber-2 shadow-md hover:shadow-lg
    `,
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm h-8',
    md: 'px-6 py-3 text-base h-12',
    lg: 'px-8 py-4 text-lg h-14',
  };

  const widthClasses = fullWidth ? 'w-full' : 'w-auto min-w-fit';

  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${widthClasses}
    ${className}
  `;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
    >
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
      )}
      {children}
    </button>
  );
};

export default ActionButton;