import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../components/Card';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/rafalobop/test-trainee/db')
      .then((res) => {
        setVideos(res.data.videos);
        console.log(res);
      });
  }, []);

  return (
    <>
      <div className="videos">
        <h3>Videos - Ejercicio R3</h3>
        <div className="videos-container">
          {videos.map((video) => {
            return <Card key={`video - ${video.id}`} video={video} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Videos;
