import './card-gallery.css';
import placeHolderImg from '../images/placeHolderImg.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const GalleryCard = (props) => {
  return (
    <>
      <LazyLoadImage
        className="imgFormat"
        width={119}
        src={props.src}
        placeholderSrc={placeHolderImg}
        effect="blur"
      />
    </>
  );
};

export default GalleryCard;
