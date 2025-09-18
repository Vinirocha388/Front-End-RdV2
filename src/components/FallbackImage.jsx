'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function FallbackImage({ src, alt, className, ...props }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return (
      <div 
        className={`${className} flex items-center justify-center`}
        style={{
          background: 'linear-gradient(135deg, #fed7aa 0%, #fdba74 100%)'
        }}
      >
        <div className="text-orange-700 text-6xl">🍳</div>
      </div>
    );
  }
  
  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
