import { useRef } from 'react';
import { Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { createChocolateMaterial } from '../materials/ChocolateMaterial';

export function ChocolateTruffle({ position = [0, 0, 0] }) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.position.y = position[1] + Math.sin(Date.now() * 0.001) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial {...createChocolateMaterial({
        roughness: 0.3,
        metalness: 0.8
      })} />
    </mesh>
  );
}