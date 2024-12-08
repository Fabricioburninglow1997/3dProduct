import { useRef } from 'react';
import { Mesh, Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { createChocolateMaterial } from '../materials/ChocolateMaterial';

export function ChocolateSwirl() {
  const groupRef = useRef<THREE.Group>(null);
  const points = Array(20).fill(0).map((_, i) => {
    const angle = (i / 20) * Math.PI * 4;
    const radius = 2 - (i / 20);
    return new Vector3(
      Math.cos(angle) * radius,
      i * 0.1 - 1,
      Math.sin(angle) * radius
    );
  });

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      {points.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial {...createChocolateMaterial({
            roughness: 0.1,
            metalness: 0.9
          })} />
        </mesh>
      ))}
    </group>
  );
}