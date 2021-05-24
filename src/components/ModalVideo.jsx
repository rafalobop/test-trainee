import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import html from '../images/html.png';

const ModalVideo = (props) => {
  const { className } = props;

  const [openModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(!openModal);

  return (
    <>
      <img src={html} alt="css" onClick={toggle} />
      <Modal isOpen={openModal} toggle={toggle} className={className}>
        <ModalBody>
          <iframe
            autoPlay
            src="https://www.youtube.com/embed/10GHKjgQIR0"
            width="380"
            frameBorder="0"
            title="video2"
          ></iframe>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ModalVideo;
