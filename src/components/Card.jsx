import React from 'react';
import ModalVideo from './ModalVideo';

const Card = ({ video }) => {
  return (
    <>
      <div className="card">
        <img src={video.imagen} alt={video.title} />
        <ModalVideo />
      </div>
      <div className="card-body">
        <h5 className="card-title">{video.title}</h5>
        <p className="card-text">{video.detalle}</p>
      </div>
    </>
  );
};

export default Card;
