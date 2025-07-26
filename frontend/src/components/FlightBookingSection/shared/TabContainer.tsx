import React from 'react';

interface TabContainerProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  className?: string;
}

const TabContainer: React.FC<TabContainerProps> = ({
  children,
  title,
  subtitle,
  className = "",
}) => {
  return (
    <div className={`w-full h-full flex flex-col ${className}`}>
      {(title || subtitle) && (
        <div className="flex-shrink-0 text-center mb-4 p-4">
          {title && (
            <h2 className="text-lg md:text-xl font-bold text-ahaGreen-1 mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-sm text-gray-600">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <div className="flex-1 min-h-0 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default TabContainer;