import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import GalleryCard from '../components/card-gallery/card-gallery';

const Gallery = () => {
  const [images = [], setImage] = useState([]);

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

  return (
    // I add padding 4% on container because the backgrund color of the footer  was not  taking the the all screen-size
    <Container fluid style={{ padding: '4%' }}>
      {images.map((image) => {
        return (
          <GalleryCard key={image._id} src={image.image_url}></GalleryCard>
        );
      })}
    </Container>
  );
};

export default Gallery;
