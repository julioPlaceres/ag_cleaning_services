import Modal from 'react-bootstrap/Modal';

const ModalDefault = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.img}</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalDefault;
