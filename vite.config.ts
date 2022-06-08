import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const path = require('path');
const root = `${process.cwd()}/vite`;

// https://vitejs.dev/config/
export default defineConfig({
  root: root,
  plugins: [react()],
  resolve: {
    alias: {
      // -- tsconfig の設定をviteにも反映させる。
      '@/': `${path.resolve(root, 'src')}/`,
    },
  },
});
