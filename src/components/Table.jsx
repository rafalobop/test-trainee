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
        <tr>
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
        </tr>
      </tbody>
    </>
  );
};

export default Table;
{
  /* {weather.length > 0
          ? weather.current.map((datos) => {
              return (
                <tr>
                  <th></th>
                  
                </tr>
              );
            })
          : 'cargando...'} */
}
//   console.log(res);
//   const weatherArray = {};
//   //   console.log(typeof res);
//   weatherArray.name = res.location.name;
//   weatherArray.temperature = res.current.temperature;
//   weatherArray.humidity = res.current.humidity;
//   weatherArray.weather_descriptions = res.current.weather_descriptions[0];
//   weatherArray.weather_icons = res.current.weather_icons[0];

//   //   console.log(weatherArray);
//   setWeather([weatherArray]);
