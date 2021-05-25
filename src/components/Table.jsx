import React, { useState, useEffect } from 'react';
import { getWeather } from '../helpers/rutaTable';

const Table = () => {
  const [weather, setWeather] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getWeather().then((weather) => {
      setWeather({
        data: weather,
        loading: false,
      });
      //   console.log(`weather`, weather.request);
      //   const weatherData = Object.values(weather);
      //   console.log(weatherData);
    });
  }, []);

  const datosClima = Object.values(weather);

  return (
    <>
      <tbody>
        {/* <tr>
          <th>{datosClima[0].location.name}</th>
          <th>{datosClima[0].current.temperature}</th>
          <th>{datosClima[0].current.humidity}</th>
          <th>{datosClima[0].current.precip}</th>
          <th>{datosClima[0].current.weather_descriptions[0]}</th>
          <th>
            <img
              className="img_table"
              src={datosClima[0].current.weather_icons[0]}
            ></img>
          </th>
        </tr> */}
      </tbody>
    </>
  );
};

export default Table;
