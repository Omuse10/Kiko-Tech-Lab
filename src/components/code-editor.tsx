import React from 'react';
import { Editor } from '@monaco-editor/react';
import * as Y from 'yjs';
import { WebrtcProvider } from 'y-webrtc';
import { MonacoBinding } from 'y-monaco';
//import Footer from '../components/footer';

interface CodeEditorProps {
  projectId: string;
  initialValue?: string;
  language?: string;
  collaborative?: boolean;
  onCodeChange?: (code: string) => void;
}

export function CodeEditor({ 
  projectId, 
  initialValue = '', 
  language = 'javascript',
  collaborative = false,
  onCodeChange
}: CodeEditorProps) {
  const editorRef = React.useRef<any>(null);
  const [code, setCode] = React.useState(initialValue);
  const [output, setOutput] = React.useState('');
  const [isRunning, setIsRunning] = React.useState(false);

  React.useEffect(() => {
    if (collaborative && editorRef.current) {
      const doc = new Y.Doc();
      const provider = new WebrtcProvider(`vi-lab-${projectId}`, doc);
      const type = doc.getText('monaco');
      
      const binding = new MonacoBinding(
        type, 
        editorRef.current.getModel(), 
        new Set([editorRef.current]), 
        provider.awareness
      );

      return () => {
        binding.destroy();
        provider.destroy();
      };
    }
  }, [collaborative, projectId]);

  const handleEditorChange = (value: string | undefined) => {
    if (value) {
      setCode(value);
      onCodeChange?.(value);
    }
  };

  const runCode = async () => {
    setIsRunning(true);
    try {
      // Create a safe evaluation environment
      const safeEval = new Function('code', `
        try {
          const console = {
            log: (...args) => window._tempOutput.push(...args)
          };
          window._tempOutput = [];
          ${code};
          return window._tempOutput.join('\\n');
        } catch (error) {
          return 'Error: ' + error.message;
        }
      `);

      const result = safeEval(code);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error}`);
    }
    setIsRunning(false);
  };

  return (
    <div className="h-[70vh] flex flex-col">
      <div className="flex-1 min-h-0">
        <Editor
          height="100%"
          defaultLanguage={language}
          defaultValue={initialValue}
          theme="vs-dark"
          onMount={(editor) => {
            editorRef.current = editor;
          }}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
            automaticLayout: true,
            suggestOnTriggerCharacters: true,
            formatOnPaste: true,
            formatOnType: true,
          }}
        />
      </div>
      
      <div className="h-1/3 flex flex-col bg-gray-900 text-white">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
          <span className="font-medium">Output</span>
          <button
            onClick={runCode}
            disabled={isRunning}
            className={`px-4 py-1 rounded-md ${
              isRunning 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-500'
            } text-white transition-colors`}
          >
            {isRunning ? 'Running...' : 'Run Code'}
          </button>
        </div>
        <div className="flex-1 p-4 font-mono text-sm overflow-auto">
          {output || 'Code output will appear here...'}
        </div>
      </div>
    </div>
  );
}