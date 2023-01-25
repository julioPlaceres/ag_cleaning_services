import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const MyImage = (props) => (
  <div>
    <LazyLoadImage
      alt={props.alt}
      height={props.height}
      src={props.src}
      width={props.width} 
      className={props.className}/>
  </div>
);

export default MyImage;