import './card-gallery.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const GalleryCard = (props) => {
  return (
    <>
      <LazyLoadImage
        className="imgFormat"
        width={300}
        src={props.src}
        placeholderSrc="https://placehold.jp/150x150.png"
        effect="blur"
      />
    </>
  );
};

export default GalleryCard;
