import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import { createChocolateMaterial } from './materials/ChocolateMaterial';

export function ChocolateDrip() {
  const dripsRef = useRef<Mesh[]>([]);
  const positions = Array(5).fill(0).map((_, i) => new Vector3(
    (i - 2) * 0.5,
    2,
    0
  ));

  useFrame((_, delta) => {
    dripsRef.current.forEach((drip) => {
      if (drip) {
        drip.position.y -= delta * 0.5;
        if (drip.position.y < -2) {
          drip.position.y = 2;
        }
      }
    });
  });

  return (
    <>
      {positions.map((pos, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) dripsRef.current[i] = el;
          }}
          position={pos}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial {...createChocolateMaterial({
            metalness: 0.8,
            roughness: 0.1
          })} />
        </mesh>
      ))}
    </>
  );
}