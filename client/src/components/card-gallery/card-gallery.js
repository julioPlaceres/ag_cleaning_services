import './card-gallery.css';
import Image from 'react-bootstrap/Image';

<<<<<<< HEAD
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
=======
const GalleryCard = (props) => {
  return(
    <>
    <Image width="119.5vw" src={props.src}/>
    </>
  )
}
>>>>>>> 7220d807219c224eebedf8b9bfc85f74e7c51593

export default GalleryCard;
