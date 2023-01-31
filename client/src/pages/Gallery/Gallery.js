import './Gallery.css';
import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import GalleryCard from '../../components/card-gallery/card-gallery';
import ModalDefault from '../../components/Modal/modal_default';

const Gallery = () => {
  const [images = [], setImage] = useState([]);
  const [imgId, setImgId] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const url = 'https://agcleaningservices.s3.amazonaws.com/';

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
    let splitSrc = e.target.attributes[2].value.toString().split('com/');
    setImgId(splitSrc[1]);
    setShow(true);
  };

  return (
    <Container fluid className="container-gallery-main">
      <ModalDefault
        show={show}
        handleClose={handleClose}
        title="Test"
        img={<GalleryCard key={imgId} src={url + imgId} />}
      />

      {images.map((image) => {
        return (
          <GalleryCard
            key={image.Key}
            src={url + image.Key}
            onClick={handleClick}
          ></GalleryCard>
        );
      })}
    </Container>
  );
};

export default Gallery;
