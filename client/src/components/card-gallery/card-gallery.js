import './card-gallery.css';
import { Link } from 'react-router-dom';

function CardItem(cardItem) {
  const { _id, name, image } = cardItem;

  return (
    <div>
      <Link to={`/gallery/${_id}`}></Link>
    </div>
  );
}

export default CardItem;
