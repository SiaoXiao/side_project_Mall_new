import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import path from 'path'
import { fileURLToPath } from 'url'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig(({ command, mode, ssrBuild }) => {
  const env = loadEnv(mode, fileURLToPath(new URL('./env', import.meta.url)))

  return {
    // base: '/side_project_Mall_new/',
    base: './',
    envDir: path.resolve(__dirname, './env'),
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    plugins: [
      Vue(),
      Icons(),
      Components(),
      AutoImport({
        imports: ['vue', 'vue-router', '@vueuse/core'],
        dts: './auto-import.d.ts',
        eslintrc: {
          enabled: false
        }
      }),
      eslintPlugin({
        include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
      })
    ],

    server: {
      open: true,
      host: env.VITE_SERVER_HOST,
      port: Number(env.VITE_SERVER_PORT),
      strictPort: true,
      cors: true,
      proxy: {
        '/api': {
          target: env.VITE_SERVER_TARGET,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    },
    preloads: ['@vueuse/shared']
  }
})
