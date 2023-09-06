import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';

export default defineConfig(() => ({
  resolve: {
    alias: {
      '~bootstrap': path.resolve(
        __dirname,
        'node_modules/bootstrap/scss/bootstrap.scss'
      )
    }
  },
  server: {
    open: true
  },
  define: {
    'process.env': {}
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true
      }
    }
  },
  build: {
    outDir: 'build'
  },
  plugins: [react(), svgr({ svgrOptions: { icon: true } })]
}));
