"use client";

import PanoramaViewer from "./Panorama";

interface IPanoramaModalProps {
  onClick: () => void;
}

export const PanoramaModal: React.FC<IPanoramaModalProps> = ({ onClick }) => {
  return (
    <div
      className="fixed top-[20%] left-[10%] w-[1300px] h-[60vh] bg-white rounded-xl"
      style={{ zIndex: 400 }}
    >
      <PanoramaViewer image={"/panoramas/panorama.jpg"} />

      <button
        className="absolute right-3 top-3 font-bold text-3xl"
        onClick={onClick}
      >
        X
      </button>
    </div>
  );
};
