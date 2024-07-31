import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, useTexture } from "@react-three/drei";
import * as THREE from "three";

interface PanoramaViewerProps {
  image: string;
}

const PanoramaViewer: React.FC<PanoramaViewerProps> = ({ image }) => {
  return (
    <Canvas>
      <PanoramaScene image={image} />
    </Canvas>
  );
};

interface PanoramaSceneProps {
  image: string;
}

const PanoramaScene: React.FC<PanoramaSceneProps> = ({ image }) => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(image);

  useFrame(({ mouse }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = mouse.x * Math.PI;
      sphereRef.current.rotation.x = -mouse.y * Math.PI * 0.5;
    }
  });

  return (
    <mesh ref={sphereRef}>
      <Sphere args={[500, 60, 40]} scale={[-1, 1, 1]}>
        <meshBasicMaterial map={texture} side={THREE.DoubleSide} />
      </Sphere>
    </mesh>
  );
};

export default PanoramaViewer;
