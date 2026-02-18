import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function ArduinoBoard({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* Arduino Board Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[5, 0.2, 3]} />
        <meshStandardMaterial color="#00979D" />
      </mesh>
      
      {/* USB Port */}
      <mesh position={[-2, 0.2, 0]}>
        <boxGeometry args={[0.8, 0.3, 0.8]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
      
      {/* Components */}
      {Array.from({ length: 14 }).map((_, i) => (
        <mesh key={`pin-${i}`} position={[2, 0.2, -1.2 + i * 0.2]}>
          <boxGeometry args={[0.1, 0.2, 0.1]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
      ))}
    </group>
  );
}

function LED({ position = [0, 0, 0], color = "#ff0000", isOn = false }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={isOn ? 0.5 : 0}
      />
    </mesh>
  );
}

export function ArduinoSimulator() {
  const [ledStates, setLedStates] = React.useState(Array(5).fill(false));

  const toggleLED = (index: number) => {
    setLedStates(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="w-full h-[70vh] bg-gray-900 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <ArduinoBoard position={[0, 0, 0]} />
        
        {/* LEDs */}
        {ledStates.map((isOn, i) => (
          <LED
            key={`led-${i}`}
            position={[1, 0.5, -1 + i * 0.5]}
            color="#ff0000"
            isOn={isOn}
          />
        ))}
        
        <OrbitControls />
      </Canvas>
      
      {/* Controls */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
        <div className="flex justify-center gap-4">
          {ledStates.map((isOn, i) => (
            <button
              key={`control-${i}`}
              onClick={() => toggleLED(i)}
              className={`px-4 py-2 rounded-md ${
                isOn ? 'bg-red-600' : 'bg-gray-600'
              } text-white hover:opacity-80 transition-opacity`}
            >
              LED {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}