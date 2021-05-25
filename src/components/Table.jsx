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
    });
  }, []);

  const datosClima = Object.values(weather.data);
  // const datosClima = Object.values(weather);
  console.log(datosClima);
  const info = datosClima.map((datos) => {
    // console.log(datos);
    return datos;
  });

  return (
    <>
      {info.map((dato) => {
        return (
          <tr>
            <th key="1">{dato.name}</th>
            <th key="2">{dato.temperature}</th>
            <th key="3">{dato.humidity}</th>
            <th key="4">{dato.precip}</th>
            <th key="5">{dato.weather_descriptions}</th>
            <th key="6">
              <img src={dato.weather_icons} className="img_table" />
            </th>
          </tr>
        );
      })}
    </>
  );
};

export default Table;
