import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

interface Component {
  id: string;
  type: 'resistor' | 'capacitor' | 'led' | 'battery';
  position: [number, number, number];
  rotation: [number, number, number];
  value: number;
  connected: boolean;
}

function CircuitComponent({ type, position, rotation, connected }: Partial<Component>) {
  const getColor = () => {
    switch (type) {
      case 'resistor':
        return '#964B00';
      case 'capacitor':
        return '#4169E1';
      case 'led':
        return connected ? '#ff0000' : '#660000';
      case 'battery':
        return '#FFD700';
      default:
        return '#808080';
    }
  };

  return (
    <group position={position} rotation={rotation}>
      {/* Main body */}
      <mesh>
        <boxGeometry args={[1, 0.2, 0.2]} />
        <meshStandardMaterial color={getColor()} />
      </mesh>
      
      {/* Leads */}
      <mesh position={[-0.6, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3]} />
        <meshStandardMaterial color="#C0C0C0" />
      </mesh>
      <mesh position={[0.6, 0, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.3]} />
        <meshStandardMaterial color="#C0C0C0" />
      </mesh>
    </group>
  );
}

export function CircuitSimulator() {
  const [components, setComponents] = React.useState<Component[]>([]);
  const [selectedType, setSelectedType] = React.useState<Component['type']>('resistor');

  const addComponent = () => {
    const newComponent: Component = {
      id: Math.random().toString(36).substr(2, 9),
      type: selectedType,
      position: [
        Math.random() * 4 - 2,
        0,
        Math.random() * 4 - 2
      ],
      rotation: [0, Math.random() * Math.PI * 2, 0],
      value: 1,
      connected: false,
    };
    setComponents(prev => [...prev, newComponent]);
  };

  const toggleConnection = (id: string) => {
    setComponents(prev => prev.map(comp => 
      comp.id === id ? { ...comp, connected: !comp.connected } : comp
    ));
  };

  return (
    <div className="w-full h-[70vh] bg-gray-900 rounded-lg overflow-hidden relative">
      <Canvas camera={{ position: [0, 5, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <gridHelper args={[10, 10]} />
        
        {components.map(component => (
          <CircuitComponent key={component.id} {...component} />
        ))}
        
        <OrbitControls />
      </Canvas>

      {/* Controls */}
      <div className="absolute top-4 left-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
        <div className="flex flex-col gap-2">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as Component['type'])}
            className="px-3 py-2 rounded-md bg-gray-800 text-white border border-gray-700"
          >
            <option value="resistor">Resistor</option>
            <option value="capacitor">Capacitor</option>
            <option value="led">LED</option>
            <option value="battery">Battery</option>
          </select>
          <button
            onClick={addComponent}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500"
          >
            Add Component
          </button>
        </div>
      </div>

      {/* Component List */}
      <div className="absolute top-4 right-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm max-h-[60vh] overflow-auto">
        <h3 className="text-white font-medium mb-2">Components</h3>
        <div className="space-y-2">
          {components.map(component => (
            <div
              key={component.id}
              className="flex items-center justify-between gap-4 text-white"
            >
              <span className="capitalize">{component.type}</span>
              <button
                onClick={() => toggleConnection(component.id)}
                className={`px-2 py-1 rounded ${
                  component.connected ? 'bg-green-600' : 'bg-gray-600'
                }`}
              >
                {component.connected ? 'Connected' : 'Disconnected'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}