"use client";

import { MapContainer, Marker, TileLayer } from "react-leaflet";

interface IMapComponentProps {
  showPanorama: (filePath: any) => void;
}

const MapComponent: React.FC<IMapComponentProps> = ({ showPanorama }) => {
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

      <Marker
        position={[-20, 40]}
        eventHandlers={{
          click: (e) => {
            showPanorama(e);
          },
        }}
      ></Marker>
    </MapContainer>
  );
};

export default MapComponent;
