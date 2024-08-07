import React, { useState, useEffect } from 'react';
import myImage from '../../../public/back_man.jpg';
import myImage2 from '../../../public/imagen_horizontal.jpg';
const MyComponent_img = () => {
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
      const dims = await getImageDimensions(myImage);
      setDimensions(dims);
    };

    fetchDimensions();
  }, []);

  const imageStyle = {
    
    width: dimensions.width > 500 ? '100%' : 'auto',
    height: dimensions.height > 500 ? '600px' : 'auto',
    /*
    width: '100%',
    height: '600px',
    */
};

  return (
    <div>
      <img id='myImage' src={myImage} alt="My Image" style={imageStyle} />
    </div>
  );
};

export default MyComponent_img;
