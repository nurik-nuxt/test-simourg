import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [vue(), tsconfigPaths(), EnvironmentPlugin('all', { prefix: 'VITE_'})]
})
