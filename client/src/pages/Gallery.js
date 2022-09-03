import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import GalleryCard from '../components/card-gallery/card-gallery';

const Gallery = () => {
  const [images = [], setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = () => {
  const galleryOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json' }
}
   fetch("api/gallery", galleryOptions)
   .then((res) => res.json())
//catch & log catch
  };

  return (
    <Container fluid>
      {images.map((image) => {
        return (
          <GalleryCard key={image.Key} src={urlLink + image.Key}></GalleryCard>
        );
      })}
    </Container>
  );
};

export default Gallery;
