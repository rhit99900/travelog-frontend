import React, {useState} from 'react';
import ReactMapGL from "react-map-gl";


import './Maps.css';

const [viewport, setViewport] = useState( {
  latitude: 45.4211,
  longitude: -756903,
  width: '100vw',
  height: '100vh',
  zoom: 10
});

export default function Maps() {
  return <div>  <ReactMapGL {...viewport} mapboxApiAccessToken="pk.eyJ1IjoicHJhYmh1ZyIsImEiOiJja2k2Mnh3eWoxdjNnMnFtczBhaGU5cWxxIn0.3SLERisQbsBhTG8KUeLfKg"> markers here</ReactMapGL> </div>
}