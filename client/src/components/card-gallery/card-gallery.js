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
      <Card className="mx-auto"
      border='light'
      style={{
        maxWidth: "10rem",
        borderRadius: "10px",
        maxHeight: "300px",
      }}
      />

      <Card.Img
      variant='top'
      src={props.src}
      alt='card image'
      style={{ maxWidth: "300px"}}
/>
    </>
  )
}

export default GalleryCard;
