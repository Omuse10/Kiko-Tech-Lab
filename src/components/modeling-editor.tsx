import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, TransformControls } from '@react-three/drei';

interface Shape {
  id: string;
  type: 'box' | 'sphere' | 'cylinder';
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  color: string;
}

export function ModelingEditor() {
  const [shapes, setShapes] = React.useState<Shape[]>([]);
  const [selectedShape, setSelectedShape] = React.useState<string | null>(null);
  
  const addShape = (type: Shape['type']) => {
    const newShape: Shape = {
      id: Math.random().toString(36).substr(2, 9),
      type,
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
      color: '#' + Math.floor(Math.random()*16777215).toString(16),
    };
    setShapes(prev => [...prev, newShape]);
  };

  const Shape = ({ shape }: { shape: Shape }) => {
    const isSelected = selectedShape === shape.id;
    
    const Geometry = () => {
      switch (shape.type) {
        case 'box':
          return <boxGeometry />;
        case 'sphere':
          return <sphereGeometry />;
        case 'cylinder':
          return <cylinderGeometry />;
        default:
          return null;
      }
    };

    return (
      <mesh
        position={shape.position}
        rotation={shape.rotation}
        scale={shape.scale}
        onClick={(e) => {
          e.stopPropagation();
          setSelectedShape(shape.id);
        }}
      >
        <Geometry />
        <meshStandardMaterial 
          color={shape.color}
          opacity={isSelected ? 0.8 : 1}
          transparent
        />
      </mesh>
    );
  };

  return (
    <div className="w-full h-[70vh] bg-gray-900 rounded-lg overflow-hidden relative">
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <gridHelper args={[20, 20]} />
        
        {shapes.map(shape => (
          <React.Fragment key={shape.id}>
            <Shape shape={shape} />
            {selectedShape === shape.id && (
              <TransformControls
                object={shape}
                mode="translate"
                size={0.5}
              />
            )}
          </React.Fragment>
        ))}
        
        <OrbitControls makeDefault />
      </Canvas>

      {/* Controls */}
      <div className="absolute top-4 left-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
        <div className="flex flex-col gap-2">
          <button
            onClick={() => addShape('box')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
          >
            Add Cube
          </button>
          <button
            onClick={() => addShape('sphere')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
          >
            Add Sphere
          </button>
          <button
            onClick={() => addShape('cylinder')}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
          >
            Add Cylinder
          </button>
        </div>
      </div>
    </div>
  );
}