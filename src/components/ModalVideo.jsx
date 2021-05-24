import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
// import html from '../images/html.png';

const ModalVideo = ({ className, video }) => {
  const [openModal, setOpenModal] = useState(false);
  const toggle = () => setOpenModal(!openModal);

  return (
    <>
      <img src={video.imagen} alt="css" onClick={toggle} />
      <Modal isOpen={openModal} toggle={toggle} className={className}>
        <ModalBody>
          <iframe
            autoPlay
            src={video.video}
            width="300"
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
