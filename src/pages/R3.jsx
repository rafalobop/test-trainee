import React from 'react';
import '../css/r3.css';
import Card from '../components/Card';

const R3 = ({ video }) => {
  return (
    <>
      {video.map((v) => {
        <Card
          id={v.id}
          title={v.title}
          imagen={v.imagen}
          detalle={v.detalle}
          video={v.video}
        />;
      })}
    </>
  );
};

export default R3;
