import './card-gallery.css';
import placeHolderImg from '../images/placeHolderImg.webp';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const GalleryCard = (props) => {
  return (
    <div>
      <LazyLoadImage
        className="imgFormat"
        width={119}
        src={props.src}
        placeholderSrc={placeHolderImg}
        effect="blur"
      />
    </div>
  );
};

export default GalleryCard;
