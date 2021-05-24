import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(async () => {
    const result = await axios.get(
      'https://my-json-server.typicode.com/rafalobop/test-trainee/db'
    );
    setVideos(result.data.videos);

    console.log(videos);
    // .then((res) => {
    //   setVideos(res.data.videos);
    //   console.log(res.data.videos);
    //   console.log('video', videos);
    // });
  }, []);

  return (
    <>
      <div className="videos">
        <div className="videos-container">
          <div className="row">
            <h3>Videos - Ejercicio R3</h3>
          </div>
          <Card videos={videos} />
        </div>
      </div>
    </>
  );
};

export default Videos;
