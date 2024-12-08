import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing';
import { FallingChocolate } from './FallingChocolate';
import { ChocolateEnvironment } from './effects/ChocolateEnvironment';

export function Scene() {
  return (
    <Canvas shadows>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ChocolateEnvironment />
      
      <FallingChocolate />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
      
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.8}
          luminanceSmoothing={0.9}
        />
        <DepthOfField
          focusDistance={0}
          focalLength={0.02}
          bokehScale={2}
        />
      </EffectComposer>
    </Canvas>
  );
}