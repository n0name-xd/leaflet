"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapComponent = () => {
  return (
    <MapContainer
      center={[-80, 60]}
      zoom={0}
      scrollWheelZoom={false}
      className="h-[100vh]"
    >
      <TileLayer
        url="/tiles/{z}/{x}/{y}.png"
        maxZoom={1}
        tileSize={450}
        noWrap={true}
      />
      <Marker position={[-20, 40]}>
        <Popup>ываываы</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
