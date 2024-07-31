"use client";

import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";

interface IMapComponentProps {
  showPanorama: (filePath: any) => void;
}

const customIcon = new Icon({
  iconUrl: "/marker-icon-2x.png",
  iconSize: [20, 30],
});

const MapComponent: React.FC<IMapComponentProps> = ({ showPanorama }) => {
  return (
    <MapContainer
      center={[-80, 160]}
      zoom={3}
      scrollWheelZoom={false}
      className="h-[100vh]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        noWrap={true}
        tileSize={1511}
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        bounds={[
          [-1000, -1000],
          [1000, 1000],
        ]}
      />
      <TileLayer
        url="/tiles/{z}/{x}/{y}.png"
        maxZoom={1}
        tileSize={511}
        noWrap={true}
        bounds={[
          [-1000, -1000],
          [1000, 1000],
        ]}
      />

      <Marker
        position={[-20, 40]}
        icon={customIcon}
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
