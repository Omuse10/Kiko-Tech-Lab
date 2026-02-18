import React from 'react';
import { Editor } from '@monaco-editor/react';
import * as tf from '@tensorflow/tfjs';
import * as ml5 from 'ml5';

interface AIWorkspaceProps {
  collaborative?: boolean;
}

export function AIWorkspace({ collaborative }: AIWorkspaceProps) {
  const [activeTab, setActiveTab] = React.useState<'tensorflow' | 'ml5'>('tensorflow');
  const [code, setCode] = React.useState(`
// TensorFlow.js Example
const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

model.compile({
  loss: 'meanSquaredError',
  optimizer: 'sgd'
});

const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

model.fit(xs, ys, {epochs: 10}).then(() => {
  model.predict(tf.tensor2d([5], [1, 1])).print();
});`);

  const [output, setOutput] = React.useState('');

  const runCode = async () => {
    try {
      setOutput('Running...');
      const result = await new Function('tf', 'ml5', `
        try {
          ${code}
          return 'Code executed successfully!';
        } catch (error) {
          return 'Error: ' + error.message;
        }
      `)(tf, ml5);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error}`);
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="space-x-4">
          <button
            onClick={() => setActiveTab('tensorflow')}
            className={`px-4 py-2 rounded ${
              activeTab === 'tensorflow' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            TensorFlow.js
          </button>
          <button
            onClick={() => setActiveTab('ml5')}
            className={`px-4 py-2 rounded ${
              activeTab === 'ml5' ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
          >
            ML5.js
          </button>
        </div>
        <button
          onClick={runCode}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
        >
          Run Model
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
        <div className="bg-gray-900 text-white p-4 font-mono text-sm rounded-lg overflow-auto">
          <div className="mb-2 text-gray-400">Output:</div>
          <pre className="whitespace-pre-wrap">{output}</pre>
        </div>
      </div>
    </div>
  );
}