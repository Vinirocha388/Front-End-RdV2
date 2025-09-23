import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function SafeImage({ 
  src, 
  alt, 
  fill = false, 
  className = '', 
  style = {}, 
  priority = false,
  sizes,
  width,
  height,
  onError,
  ...props 
}) {
  const [hasError, setHasError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  // Reset error state when src changes
  useEffect(() => {
    setHasError(false);
    setImgSrc(src);
  }, [src]);

  // Verifica se a URL é externa ou local
  const checkIfExternal = (url) => {
    if (!url) return false;
    return url.startsWith('http://') || url.startsWith('https://');
  };

  const handleError = () => {
    setHasError(true);
    setImgSrc('/images/image.png');
    if (onError) onError();
  };

  const isExternal = checkIfExternal(imgSrc);
  const finalSrc = imgSrc || '/images/image.png';

  // Para URLs externas ou quando há erro, usa img tag
  if (isExternal || hasError) {
    return (
      <div className="safe-image-container w-full h-full">
        <img
          src={finalSrc}
          alt={alt}
          className={`${className} ${fill ? 'w-full h-full object-cover' : ''}`}
          style={{
            ...style,
            ...(fill && { 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%',
              objectFit: 'cover'
            })
          }}
          onError={handleError}
          {...props}
        />
      </div>
    );
  }

  // Para imagens locais, usa Next/Image
  return (
    <Image
      src={finalSrc}
      alt={alt}
      fill={fill}
      className={className}
      style={style}
      priority={priority}
      sizes={sizes}
      width={width}
      height={height}
      onError={handleError}
      {...props}
    />
  );
}