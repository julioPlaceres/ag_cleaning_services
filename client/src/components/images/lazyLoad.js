import React from 'react';
import placeHolderImg from '../images/placeHolderImg.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const MyImage = (props) => (
  <div>
    <LazyLoadImage
      alt={props.alt}
      height={props.height}
      src={props.src}
      width={props.width} 
      className={props.className}
      placeholder={placeHolderImg}
      effect="blur"/>
  </div>
);

export default MyImage;