import { useFrame } from '@react-three/fiber';
import { RefObject } from 'react';
import { Mesh } from 'three';

interface RotationConfig {
  speedX?: number;
  speedY?: number;
  speedZ?: number;
}

export function useRotation(
  meshRef: RefObject<Mesh>,
  { speedX = 0, speedY = 0, speedZ = 0 }: RotationConfig
) {
  useFrame((_, delta) => {
    if (meshRef.current) {
      if (speedX) meshRef.current.rotation.x += delta * speedX;
      if (speedY) meshRef.current.rotation.y += delta * speedY;
      if (speedZ) meshRef.current.rotation.z += delta * speedZ;
    }
  });
}