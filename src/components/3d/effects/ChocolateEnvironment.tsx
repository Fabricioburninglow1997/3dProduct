import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useHelper } from '@react-three/drei';
import { SpotLightHelper } from 'three';

export function ChocolateEnvironment() {
  const spotLightRef = useRef();
  useHelper(spotLightRef, SpotLightHelper, 'white');

  useFrame(({ clock }) => {
    if (spotLightRef.current) {
      spotLightRef.current.position.x = Math.sin(clock.getElapsedTime()) * 3;
    }
  });

  return (
    <>
      <ambientLight intensity={0.3} />
      <spotLight
        ref={spotLightRef}
        position={[0, 5, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <fog attach="fog" args={['#1a0f0f', 5, 15]} />
    </>
  );
}