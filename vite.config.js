import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/intellij-icon-blender/',
  plugins: [vue()],
  assetsInclude: ['**/*.svg']
})
