import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/",
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'editor-vendor': ['@monaco-editor/react', 'y-monaco', 'y-webrtc', 'yjs'],
        },
      },
    },
  },
  esbuild: {
    target: 'esnext',
    format: 'esm',
  },
});