// vite.config.js
import { defineConfig } from "file:///D:/lhdtext/vue3/my-personal-blog/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/lhdtext/vue3/my-personal-blog/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/lhdtext/vue3/my-personal-blog/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/lhdtext/vue3/my-personal-blog/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///D:/lhdtext/vue3/my-personal-blog/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import mdPlugin from "file:///D:/lhdtext/vue3/my-personal-blog/node_modules/vite-plugin-markdown/dist/index.js";
import ElementPlus from "file:///D:/lhdtext/vue3/my-personal-blog/node_modules/unplugin-element-plus/dist/vite.mjs";
import path from "path";
var __vite_injected_original_dirname = "D:\\lhdtext\\vue3\\my-personal-blog";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    ElementPlus(),
    mdPlugin.plugin({
      mode: ["vue", "html"]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@assets": path.resolve(__vite_injected_original_dirname, "./src/assets"),
      "@component": path.resolve("./src/components")
    }
  },
  server: {
    hmr: true
  },
  base: "/my-personal-blog/"
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxsaGR0ZXh0XFxcXHZ1ZTNcXFxcbXktcGVyc29uYWwtYmxvZ1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcbGhkdGV4dFxcXFx2dWUzXFxcXG15LXBlcnNvbmFsLWJsb2dcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2xoZHRleHQvdnVlMy9teS1wZXJzb25hbC1ibG9nL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuaW1wb3J0IG1kUGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLW1hcmtkb3duJ1xuaW1wb3J0IEVsZW1lbnRQbHVzIGZyb20gJ3VucGx1Z2luLWVsZW1lbnQtcGx1cy92aXRlJ1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSgpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbRWxlbWVudFBsdXNSZXNvbHZlcigpXSxcbiAgICB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIHJlc29sdmVyczogW0VsZW1lbnRQbHVzUmVzb2x2ZXIoKV0sXG4gICAgfSksXG4gICAgRWxlbWVudFBsdXMoKSxcbiAgICBtZFBsdWdpbi5wbHVnaW4oe1xuICAgICAgbW9kZTogWyd2dWUnLCdodG1sJ10sXG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsJy4vc3JjJyksIC8vIEBcdTRFRTNcdTY2RkZzcmNcbiAgICAgICdAYXNzZXRzJzpwYXRoLnJlc29sdmUoX19kaXJuYW1lLCcuL3NyYy9hc3NldHMnKSxcbiAgICAgICdAY29tcG9uZW50JzpwYXRoLnJlc29sdmUoJy4vc3JjL2NvbXBvbmVudHMnKVxuICAgIH1cbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgaG1yOnRydWVcbiAgfSxcbiAgYmFzZTogJy9teS1wZXJzb25hbC1ibG9nLydcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBSLFNBQVMsb0JBQW9CO0FBQ3ZULE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLGNBQWM7QUFDckIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxVQUFVO0FBUGpCLElBQU0sbUNBQW1DO0FBU3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxJQUNELFlBQVk7QUFBQSxJQUNaLFNBQVMsT0FBTztBQUFBLE1BQ2QsTUFBTSxDQUFDLE9BQU0sTUFBTTtBQUFBLElBQ3JCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVSxPQUFPO0FBQUEsTUFDbkMsV0FBVSxLQUFLLFFBQVEsa0NBQVUsY0FBYztBQUFBLE1BQy9DLGNBQWEsS0FBSyxRQUFRLGtCQUFrQjtBQUFBLElBQzlDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sS0FBSTtBQUFBLEVBQ047QUFBQSxFQUNBLE1BQU07QUFDUixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
