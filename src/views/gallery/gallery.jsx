
import React from 'react'

const Gallery = () => {
  return (
    <div>Gallery</div>
  )
}

export default Gallery




// ----MAPAMUNDi---------
// import React, { useEffect } from 'react';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import './worldMap.css';
// import jsonData from './db.json';

// const WorldMap = () => {
//   useEffect(() => {
//     // Crear un mapa Leaflet
//     const map = L.map('world-map').setView([0, 0], 2);

//     // Añadir capa de mapa base
//     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '© OpenStreetMap contributors',
//     }).addTo(map);

//     // Agregar marcadores para cada país
//     jsonData.countries.forEach((country) => {
//       const latlng = country.latlng;
//       const name = country.name.common;
//       const marker = L.marker(latlng).addTo(map);
//       marker.bindPopup(name);
//     });
//   }, []);

//   return <div id="world-map" className="world-map"></div>;
// };

// export default WorldMap;
