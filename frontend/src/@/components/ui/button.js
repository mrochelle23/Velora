import React from 'react';

export function Button({ children, className = "", onClick, ...props }) {
  return (
    <button 
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '0.375rem',
        fontSize: '0.875rem',
        fontWeight: '500',
        transition: 'all 0.2s',
        backgroundColor: '#3b82f6',
        color: 'white',
        padding: '0.5rem 1rem',
        border: 'none',
        cursor: 'pointer',
        minHeight: '2.5rem',
        ...props.style
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#2563eb';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = '#3b82f6';
      }}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
