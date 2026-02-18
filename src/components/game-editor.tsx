import React from 'react';
import { Editor } from '@monaco-editor/react';
import * as P5 from 'p5';
import * as Phaser from 'phaser';

interface GameEditorProps {
  collaborative?: boolean;
}

export function GameEditor({ collaborative }: GameEditorProps) {
  const [gameType, setGameType] = React.useState<'p5' | 'phaser'>('p5');
  const canvasRef = React.useRef<HTMLDivElement>(null);
  const [code, setCode] = React.useState(`
// P5.js Game Example
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 50, 50);
}`);

  const runGame = () => {
    if (canvasRef.current) {
      canvasRef.current.innerHTML = '';
      
      if (gameType === 'p5') {
        new P5((p: P5) => {
          p.setup = () => new Function(code)();
          p.draw = () => new Function(code)();
        }, canvasRef.current);
      } else {
        const config = {
          type: Phaser.AUTO,
          width: 800,
          height: 600,
          parent: canvasRef.current,
          scene: {
            create: new Function(code),
          },
        };
        new Phaser.Game(config);
      }
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="space-x-4">
          <button
            onClick={() => setGameType('p5')}
            className={`px-4 py-2 rounded ${
              gameType === 'p5' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            P5.js
          </button>
          <button
            onClick={() => setGameType('phaser')}
            className={`px-4 py-2 rounded ${
              gameType === 'phaser' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            Phaser
          </button>
        </div>
        <button
          onClick={runGame}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
        >
          Run Game
        </button>
      </div>

      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="h-full">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            value={code}
            onChange={(value) => setCode(value || '')}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
            }}
          />
        </div>
        <div ref={canvasRef} className="bg-white rounded-lg shadow-inner" />
      </div>
    </div>
  );
}