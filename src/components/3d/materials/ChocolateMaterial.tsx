import { MeshStandardMaterialProps } from '@react-three/fiber';

interface ChocolateMaterialProps extends Partial<MeshStandardMaterialProps> {
  type?: 'dark' | 'milk' | 'white';
}

export function createChocolateMaterial({ type = 'dark', ...props }: ChocolateMaterialProps = {}) {
  const colors = {
    dark: '#3B1D15',
    milk: '#8B4513',
    white: '#F5DEB3'
  };

  return {
    color: colors[type],
    metalness: 0.7,
    roughness: 0.2,
    envMapIntensity: 1,
    ...props
  };
}