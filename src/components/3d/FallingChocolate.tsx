import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Vector3 } from 'three';
import { createChocolateMaterial } from './materials/ChocolateMaterial';

interface ChocolateDropProps {
  startPosition: Vector3;
  speed?: number;
}

function ChocolateDrop({ startPosition, speed = 1 }: ChocolateDropProps) {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.position.y -= delta * speed;
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.z += delta * 0.3;
      
      // Reset position when it falls below view
      if (meshRef.current.position.y < -10) {
        meshRef.current.position.copy(startPosition);
      }
    }
  });

  return (
    <mesh ref={meshRef} position={startPosition}>
      <meshStandardMaterial {...createChocolateMaterial({
        type: 'dark',
        roughness: 0.2,
        metalness: 0.8
      })} />
      <boxGeometry args={[0.3, 0.3, 0.3]} />
    </mesh>
  );
}

export function FallingChocolate() {
  const drops = Array(15).fill(0).map((_, i) => ({
    position: new Vector3(
      (Math.random() - 0.5) * 10, // Random X position
      Math.random() * 20, // Random Y position above view
      (Math.random() - 0.5) * 5 // Random Z position
    ),
    speed: 2 + Math.random() * 2 // Random speed
  }));

  return (
    <group>
      {drops.map((drop, index) => (
        <ChocolateDrop
          key={index}
          startPosition={drop.position}
          speed={drop.speed}
        />
      ))}
    </group>
  );
}