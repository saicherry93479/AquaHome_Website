//@ts-nocheck
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',

}) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-11 h-11', 
    lg: 'w-16 h-16'
  };

  return (
    <>
      <style jsx>{`
        .loading-container {
          background-color: #4548b9;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        
        .custom-loader {
          aspect-ratio: 1;
          --c: no-repeat linear-gradient(white calc(50% - 10px), transparent 0 calc(50% + 10px), white 0);
          background: 
            var(--c) 0% 100%,
            var(--c) 50% 100%,
            var(--c) 100% 100%;
          background-size: 20% calc(200% + 20px);
          animation: loader-animation 1s infinite linear;
        }
        
        @keyframes loader-animation {
          33%  { background-position: 0% 50%, 50% 100%, 100% 100%; }
          50%  { background-position: 0% 0%, 50% 50%, 100% 100%; }
          66%  { background-position: 0% 0%, 50% 0%, 100% 50%; }
          100% { background-position: 0% 0%, 50% 0%, 100% 0%; }
        }
        
        .aquahome-text {
          color: white;
          font-size: 24px;
          font-weight: 600;
          margin-top: 16px;
        }
      `}</style>
      
      <div className="loading-container">
        <div className={`custom-loader ${sizeClasses[size]}`}></div>
        <div className="aquahome-text">AquaHome</div>
      </div>
    </>
  );
};

export default LoadingSpinner;