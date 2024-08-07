import React, { useState, useEffect } from 'react';

const ImageComponent = ({ imageSrc }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const getImageDimensions = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve({ width: img.width, height: img.height });
    });
  };

  useEffect(() => {
    const fetchDimensions = async () => {
      if (imageSrc) {
        const dims = await getImageDimensions(imageSrc);
        setDimensions(dims);
      }
    };

    fetchDimensions();
  }, [imageSrc]);

  const imageStyle = {
    width: dimensions.width > 500 ? '100%' : 'auto',
    height: dimensions.height > 500 ? '600px' : 'auto',
  };

  return <img id='myImage' src={imageSrc} alt="dynamic" style={imageStyle} />;
};

export default ImageComponent;
