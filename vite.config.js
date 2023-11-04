import purgeCSSPlugin from '@fullhuman/postcss-purgecss';
import react from '@vitejs/plugin-react';
import cssnano from 'cssnano';
import * as path from 'path';
import postcssFlexbugsFixes from 'postcss-flexbugs-fixes';
import postcssNesting from 'postcss-nesting';
import postCSSpresetEnv from 'postcss-preset-env';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig(() => ({
  plugins: [svgr({ svgrOptions: { exportAsDefault: true, icon: true } }), react({
    babel: {
      presets: [],
      plugins: []
    }
  })],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  server: {
    open: true,
  },
  define: {
    'process.env': {},
  },
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
      },
    },
    postcss: {
      ident: 'postcss',
      plugins: [
        postcssFlexbugsFixes,
        postCSSpresetEnv({
          autoprefixer: { flexbox: 'no-2009' },
          stage: 3,
          features: { 'custom-properties': false },
        }),
        postcssNesting,
        cssnano({
          preset: 'default',
        }),
        purgeCSSPlugin({
          content: [
            './src/**/*.html',
            './src/**/*.jsx',
            './src/**/*.js',
            './node_modules/react-bootstrap/**/*.js',
            './node_modules/bootstrap/js/dist/**/*.js',
          ],
          css: ['./src/**/*.css'],
          variables: true,
          keyframes: true,
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],

          safelist: ['html', 'body', /navbar.*/, /container.*/, /btn.*/, /col.*/, /nav.*/],
        }),
      ],
    },
  },
  build: {
    outDir: 'build',
  },
}));
