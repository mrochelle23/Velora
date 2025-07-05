import React from 'react';

export function Input({ className = "", type = "text", ...props }) {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      style={{
        display: 'flex',
        height: '2.5rem',
        width: '100%',
        borderRadius: '0.375rem',
        border: '1px solid #d1d5db',
        backgroundColor: 'transparent',
        padding: '0.5rem 0.75rem',
        fontSize: '0.875rem',
        transition: 'all 0.2s',
        ...props.style
      }}
      onFocus={(e) => {
        e.target.style.outline = 'none';
        e.target.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.5)';
        e.target.style.borderColor = '#3b82f6';
      }}
      onBlur={(e) => {
        e.target.style.boxShadow = 'none';
        e.target.style.borderColor = '#d1d5db';
      }}
      {...props}
    />
  );
}
