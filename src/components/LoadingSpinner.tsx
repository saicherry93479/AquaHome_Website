
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  text = 'Loading...', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-16 w-16',
    lg: 'h-24 w-24'
  };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`animate-spin rounded-full border-4 border-blue-600 border-t-transparent ${sizeClasses[size]} mb-4`}></div>
      {text && (
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Loading AquaHome</h2>
          <p className="text-gray-600">{text}</p>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;
