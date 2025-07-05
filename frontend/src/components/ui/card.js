import React from 'react';

export function Card({ children, className = "", ...props }) {
  return (
    <div 
      className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}
      style={{
        backgroundColor: 'white',
        borderRadius: '0.5rem',
        border: '1px solid #e5e7eb',
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div 
      className={`p-6 ${className}`}
      style={{
        padding: '1.5rem',
        ...props.style
      }}
      {...props}
    >
      {children}
    </div>
  );
}
