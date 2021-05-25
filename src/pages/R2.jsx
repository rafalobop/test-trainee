import React from 'react';
import '../css/r2.css';
import Table from '../components/Table';
const R2 = () => {
  return (
    <div className="main">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Ciudad</th>
              <th>Temperatura</th>
              <th>Humedad</th>
              <th>Precipitaciones</th>
              <th>Descripcion</th>
              <th>Icono</th>
            </tr>
          </thead>
          <tbody>
            <Table />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default R2;
