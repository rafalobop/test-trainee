import React, { useEffect } from 'react';
import ModalVideo from './ModalVideo';

const Card = (videos) => {
  // useEffect(() => {
  //   console.log(videos);
  // }, []);
  return (
    <>
      <div className="card">
        {/* <img src={videos[0].imagen} alt={videos[0].title} /> */}
        <ModalVideo />
      </div>
      <div className="card-body">
        {/* <h5 className="card-title">{videos[0].title}</h5> */}
        {/* <p className="card-text">{videos[0].detalle}</p> */}
      </div>
    </>
  );
};

export default Card;
