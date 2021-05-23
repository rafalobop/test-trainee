import React from 'react';
import '../css/r3.css';

const R3 = () => {
  return (
    <div className="videos">
      <div className="videos-container">
        <div className="card">
          <iframe
            key="1"
            src="https://www.youtube.com/embed/riZbwRFMFuw"
            frameborder="0"
            title="video1"
          ></iframe>
          <div className="card-body">
            <h5 className="card-title">Lorem Ipsum</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              neque quod voluptas praesentium inventore modi commodi delectus
              odit. Consequatur, iusto!.
            </p>
          </div>
        </div>
        <div className="card">
          <iframe
            key="2"
            src="https://www.youtube.com/embed/8cSo0ijtkzU"
            frameborder="0"
            title="video2"
          ></iframe>
          <div className="card-body">
            <h5 className="card-title">Lorem Ipsum</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              neque quod voluptas praesentium inventore modi commodi delectus
              odit. Consequatur, iusto!.
            </p>
          </div>
        </div>
        <div className="card">
          <iframe
            key="3"
            src="https://www.youtube.com/embed/10GHKjgQIR0"
            frameborder="0"
            title="video2"
          ></iframe>
          <div className="card-body">
            <h5 className="card-title">Lorem Ipsum</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              neque quod voluptas praesentium inventore modi commodi delectus
              odit. Consequatur, iusto!.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default R3;
