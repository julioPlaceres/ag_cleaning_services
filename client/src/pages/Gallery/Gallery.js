import './Gallery.css';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import GalleryCard from '../../components/card-gallery/card-gallery';

const Gallery = () => {
  const [images = [], setImage] = useState([]);
  const [display, setDisplay] = useState(false);
  const [imgId, setImgId] = useState("");
  const url = "https://agcleaningservices.s3.amazonaws.com/"

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
    fetch('api/gallery')
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setImage(data);
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    let splitSrc = e.target.attributes[2].value.toString().split("com/");
    setImgId(splitSrc[1]);
    setDisplay(true);
  }

  if (display === false) {
    return (
      <Container fluid className="container-gallery-main">
        {images.map((image) => { 
          return (
          <GalleryCard key={image.Key} src={url + image.Key} onClick={handleClick}></GalleryCard>);
              })}
      </Container>
    );
  } else {
    return(
      <Container fluid className="container-gallery-main">
          <GalleryCard key={imgId} src={url + imgId}></GalleryCard>
      </Container>
  )};
};

export default Gallery;
