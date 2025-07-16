import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  base: "./", // 相对路径，打包后可放任意路径
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
      "@assets": path.join(__dirname, "./src/assets"),
    },
  },

  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
})
