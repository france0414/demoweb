import React from 'react';

interface BaseCardProps {
  children: React.ReactNode;
  className?: string; // 允許外部傳入額外的 className
}

const BaseCard: React.FC<BaseCardProps> = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md h-full ${className || ''}`}>
      {children}
    </div>
  );
};

export default BaseCard;
