"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { PanoramaModal } from "./PanoramaModal";

const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
});

export const Map = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const showPanorama = (filePath: any) => {
    setShowModal(true);
  };

  return (
    <div className="relative">
      <MapComponent showPanorama={showPanorama} />
      {showModal && <PanoramaModal onClick={() => setShowModal(false)} />}
    </div>
  );
};
