import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import svgr from 'vite-plugin-svgr';


export default defineConfig({
  plugins: [
    react(),
    svgr(), 
  ],
  base: '/simpleone/',
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
  },
});
