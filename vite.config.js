import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import mdPlugin from 'vite-plugin-markdown'
import ElementPlus from 'unplugin-element-plus/vite'
import path from "path";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus(),
    mdPlugin.plugin({
      mode: ['vue','html'],
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname,'./src'), // @代替src
      '@assets':path.resolve(__dirname,'./src/assets'),
      '@component':path.resolve('./src/components')
    }
  },
  base: '/my-personal-blog/'
})
