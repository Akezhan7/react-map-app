import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MapContainer as LeafletMap, TileLayer, Polyline, useMap } from 'react-leaflet';

const MapUpdater = ({ center, polyline }) => {
  const map = useMap();

  useEffect(() => {
    if (center && polyline) {
      map.setView(center);
      map.fitBounds(polyline);
    }
  }, [center, polyline, map]);

  return null;
};

const MapContainer = () => {
  const selectedRoute = useSelector((state) => state.routes.selectedRoute);
  const polyline = selectedRoute?.polyline ? selectedRoute.polyline.map(coord => [coord[1], coord[0]]) : null;
  let center = null;

  if (selectedRoute) {
    center = selectedRoute.coordinates.reduce(
      (acc, curr) => [acc[0] + curr[0] / selectedRoute.coordinates.length, acc[1] + curr[1] / selectedRoute.coordinates.length],
      [0, 0]
    );
  }

  return (
    <LeafletMap center={[59.8415, 30.2534]} zoom={10} style={{ height: '100vh', width: '70%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {polyline && <Polyline positions={polyline} />}
      {center && polyline && <MapUpdater center={center} polyline={polyline} />}
    </LeafletMap>
  );
};

export default MapContainer;
