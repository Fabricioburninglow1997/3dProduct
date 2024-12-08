# Chocolate Website with 3D Animations

A luxurious chocolate website featuring stunning 3D animations built with React, Three.js, and React Three Fiber.

## Features

- Beautiful 3D chocolate animations
- Responsive design
- Interactive product showcase
- Optimized performance
- Modern UI/UX

## Technology Stack

- React
- TypeScript
- Three.js / React Three Fiber
- Tailwind CSS
- Framer Motion

## 3D Animation Implementation

The project uses React Three Fiber for 3D rendering with the following optimizations:

- Uses instanced meshes for better performance
- Implements object pooling for falling animations
- Optimizes material sharing
- Uses proper frustum culling
- Implements efficient geometry sharing

### Animation Details

- Format: Custom Three.js geometries (more optimized than GLB/GLTF for simple shapes)
- Performance: Optimized for web with minimal impact on load times
- Interactivity: Smooth animations with physics-based movement
- Responsiveness: Adapts to different screen sizes

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Performance Considerations

- Uses instanced rendering for multiple objects
- Implements proper material sharing
- Optimizes geometry reuse
- Implements efficient animation loops
- Uses proper level of detail management

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License