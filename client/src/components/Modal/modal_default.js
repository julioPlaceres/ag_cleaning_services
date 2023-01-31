import Modal from 'react-bootstrap/Modal';

const ModalDefault = (props) => {
  return (
      <Modal 
      size='lg'
      centered
      show={props.show} 
      onHide={props.handleClose}
      className="">
        <Modal.Header closeButton/>
        <Modal.Body>{props.img}</Modal.Body>
      </Modal>
  );
};

export default ModalDefault;
