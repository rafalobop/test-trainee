import React, { useEffect } from 'react';
import ModalVideo from './ModalVideo';

const Card = (video) => {
  return (
    <>
      <div className="card">
        <ModalVideo video={video.video} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{video.video.title}</h5>
        <p className="card-text">{video.video.detalle}</p>
      </div>
    </>
  );
};

export default Card;
