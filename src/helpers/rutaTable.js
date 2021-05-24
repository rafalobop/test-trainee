import axios from 'axios';

export const getWeather = async () => {
  const resp = await axios(
    'http://api.weatherstack.com/current?access_key=80d763c6afd8a98363aca072d8fbdf37&query=Tucuman,Argentina'
  );
  const { data } = resp;
  //   console.log(data);
  return data;
};
