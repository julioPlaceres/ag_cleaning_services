import './card-gallery.css';
import { Link } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';

// This is for selecting a single image (TODO)
function CardItem(cardItem) {
  const { _id, name, image } = cardItem;

  return (
    <div>
      <Link to={`/gallery/${_id}`}></Link>
    </div>
  );
}

const GalleryCard = (props) => {
  return(
    <>
      <img width="200" src={props.src}></img>
    </>
  )
}

export default GalleryCard;
