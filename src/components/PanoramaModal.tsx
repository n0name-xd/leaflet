"use client";

import Panorama from "./Panorama";

interface IPanoramaModalProps {
  onClick: () => void;
}

export const PanoramaModal: React.FC<IPanoramaModalProps> = ({ onClick }) => {
  return (
    <div
      className="fixed top-[20%] left-[10%] w-[1500px] h-[60vh] bg-white rounded-xl"
      style={{ zIndex: 999 }}
    >
      <Panorama />

      <button className="absolute right-1" onClick={onClick}>
        X
      </button>
    </div>
  );
};
