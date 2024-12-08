import { useRef } from 'react';
import { Mesh } from 'three';
import { createChocolateMaterial } from './materials/ChocolateMaterial';
import { useRotation } from './animations/useRotation';

export function ChocolateBar() {
  const meshRef = useRef<Mesh>(null);
  useRotation(meshRef, { speedY: 0.3 });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 0.2, 1]} />
      <meshStandardMaterial {...createChocolateMaterial()} />
    </mesh>
  );
}