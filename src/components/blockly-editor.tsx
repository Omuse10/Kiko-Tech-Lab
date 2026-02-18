import React from 'react';
import Blockly from 'blockly';

export function BlocklyEditor() {
  const blocklyDiv = React.useRef<HTMLDivElement>(null);
  const [workspace, setWorkspace] = React.useState<any>(null);
  const [code, setCode] = React.useState<string>('');

  const toolbox = {
    kind: 'categoryToolbox',
    contents: [
      {
        kind: 'category',
        name: 'Logic',
        colour: 210,
        contents: [
          { kind: 'block', type: 'controls_if' },
          { kind: 'block', type: 'logic_compare' },
          { kind: 'block', type: 'logic_operation' },
          { kind: 'block', type: 'logic_negate' },
        ],
      },
      {
        kind: 'category',
        name: 'Loops',
        colour: 120,
        contents: [
          { kind: 'block', type: 'controls_repeat_ext' },
          { kind: 'block', type: 'controls_whileUntil' },
          { kind: 'block', type: 'controls_for' },
        ],
      },
      {
        kind: 'category',
        name: 'Math',
        colour: 230,
        contents: [
          { kind: 'block', type: 'math_number' },
          { kind: 'block', type: 'math_arithmetic' },
          { kind: 'block', type: 'math_single' },
        ],
      },
      {
        kind: 'category',
        name: 'Variables',
        colour: 330,
        custom: 'VARIABLE',
      },
      {
        kind: 'category',
        name: 'Functions',
        colour: 290,
        custom: 'PROCEDURE',
      },
    ],
  };

  React.useEffect(() => {
    if (blocklyDiv.current && !workspace) {
      const newWorkspace = Blockly.inject(blocklyDiv.current, {
        toolbox: toolbox,
        scrollbars: true,
        move: {
          scrollbars: true,
          drag: true,
          wheel: true,
        },
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
        },
        grid: {
          spacing: 20,
          length: 3,
          colour: '#ccc',
          snap: true,
        },
      });

      newWorkspace.addChangeListener(() => {
        const code = Blockly.JavaScript.workspaceToCode(newWorkspace);
        setCode(code);
      });

      setWorkspace(newWorkspace);

      return () => {
        newWorkspace.dispose();
      };
    }
  }, []);

  return (
    <div className="h-[70vh] flex flex-col">
      <div className="flex-1 relative">
        <div 
          ref={blocklyDiv} 
          className="absolute inset-0 bg-white"
        />
      </div>
      <div className="h-1/4 bg-gray-900 text-white p-4 font-mono text-sm overflow-auto">
        <div className="mb-2 text-gray-400">Generated JavaScript Code:</div>
        <pre className="whitespace-pre-wrap">{code}</pre>
      </div>
    </div>
  );
}