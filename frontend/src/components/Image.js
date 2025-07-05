import React from 'react';

function Image({ src, alt, width, height, className = "", ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{
        width: width ? `${width}px` : 'auto',
        height: height ? `${height}px` : 'auto',
        ...props.style
      }}
      {...props}
    />
  );
}

export default Image;
