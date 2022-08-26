import './card-gallery.css';
import Image from 'react-bootstrap/Image';

const GalleryCard = (props) => {
  return(
    <>
    <Image width="100vw" src={props.src}/>
    </>
  )
}

export default GalleryCard;
