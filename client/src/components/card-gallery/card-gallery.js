import './card-gallery.css';
import { Link } from 'react-router-dom';

const CardItem = (props) => {
  const { _id, name, image } = props;

  return (
    <div className="card px-1 py-1">
      <Link to={`/gallery/${_id}`}>
        <img alt={name} src={`/images/${image}`} />
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default CardItem;
