import React from 'react';
import { useParams } from 'react-router-dom';
import { CodeEditor } from '../components/code-editor';
import { ArduinoSimulator } from '../components/arduino-simulator';
import { BlocklyEditor } from '../components/blockly-editor';
import { ModelingEditor } from '../components/modeling-editor';
import { CircuitSimulator } from '../components/circuit-simulator';
import { cn } from '../lib/utils';

const LAB_CONFIGS = {
  student: {
    title: 'Student Lab',
    description: 'Learn and practice with guided tutorials',
    theme: 'bg-blue-50',
    tools: ['code', 'arduino', 'blockly'],
    layout: 'split',
  },
  personal: {
    title: 'Personal Lab',
    description: 'Your private workspace for projects',
    theme: 'bg-green-50',
    tools: ['code', 'arduino', '3d'],
    layout: 'tabs',
  },
  company: {
    title: 'Company Lab',
    description: 'Enterprise development environment',
    theme: 'bg-purple-50',
    tools: ['code', 'circuit', '3d'],
    layout: 'grid',
  },
  institution: {
    title: 'Institution Lab',
    description: 'Research and development platform',
    theme: 'bg-orange-50',
    tools: ['code', 'arduino', 'blockly'],
    layout: 'split',
  },
  educators: {
    title: 'Educators Lab',
    description: 'Create and manage educational content',
    theme: 'bg-red-50',
    tools: ['code', 'blockly'],
    layout: 'tabs',
  },
  professional: {
    title: 'Professional Lab',
    description: 'Advanced development tools',
    theme: 'bg-indigo-50',
    tools: ['code', 'circuit', '3d'],
    layout: 'grid',
  },
};

const TOOLS = {
  code: CodeEditor,
  arduino: ArduinoSimulator,
  blockly: BlocklyEditor,
  '3d': ModelingEditor,
  circuit: CircuitSimulator,
};

export function LabWorkspace() {
  const { labType = 'personal' } = useParams();
  const [activeTool, setActiveTool] = React.useState('code');
  
  const config = LAB_CONFIGS[labType as keyof typeof LAB_CONFIGS] || LAB_CONFIGS.personal;
  const Tool = TOOLS[activeTool as keyof typeof TOOLS];

  return (
    <div className={cn("min-h-screen", config.theme)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{config.title}</h1>
          <p className="mt-2 text-gray-600">{config.description}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="border-b border-gray-200">
            <div className="flex space-x-4 p-4">
              {config.tools.map((tool) => (
                <button
                  key={tool}
                  onClick={() => setActiveTool(tool)}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    activeTool === tool
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  {tool.charAt(0).toUpperCase() + tool.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="p-6">
            <Tool collaborative={true} projectId="default-project-id" />
          </div>
        </div>
      </div>
    </div>
  );
}