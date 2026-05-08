import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules')) {
            if (id.includes('ant-design-vue')) {
              return 'ant-design'
            }
            if (id.includes('vue') || id.includes('vue-router')) {
              return 'vue-vendor'
            }
          }
        },
      },
    },
  },
})