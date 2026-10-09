import { fileURLToPath } from "node:url";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

function assetFileNames(assetInfo) {
  const fileName = assetInfo.names?.[0] || assetInfo.name || "asset";

  if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i.test(fileName)) {
    return "media/[name]-[hash][extname]";
  }
  if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(fileName)) {
    return "images/[name]-[hash][extname]";
  }
  if (/\.(woff2?|eot|ttf|otf)$/i.test(fileName)) {
    return "fonts/[name]-[hash][extname]";
  }
  return "assets/[name]-[hash][extname]";
}

function manualChunks(id) {
  const modulePath = id.replace(/\\/g, "/");

  // Match package boundaries so ant-design-vue is never classified as Vue.
  if (/\/node_modules\/(?:ant-design-vue|@ant-design\/[^/]+)\//.test(modulePath)) {
    return "antd-vendor";
  }
  if (/\/node_modules\/(?:vue|vue-router|@vue\/[^/]+)\//.test(modulePath)) {
    return "vue-vendor";
  }
  if (/\/node_modules\/(?:mermaid|@mermaid-js\/[^/]+)\//.test(modulePath)) {
    return "mermaid-vendor";
  }
  if (/\/node_modules\/@emailjs\/browser\//.test(modulePath)) {
    return "email-vendor";
  }
  // Let Rollup preserve the lazy route boundaries for application pages.
}

export function createViteConfig({ lowMemory = false } = {}) {
  return {
    // History routes and emitted preload URLs share the same root base.
    base: "/",
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("../src", import.meta.url)),
        "@assets": fileURLToPath(new URL("../src/assets", import.meta.url)),
      },
    },
    plugins: [
      vue(),
      Components({
        dts: false,
        resolvers: [AntDesignVueResolver({ importStyle: false })],
      }),
    ],
    build: {
      chunkSizeWarningLimit: lowMemory ? 800 : 1000,
      rollupOptions: {
        ...(lowMemory ? { cache: false } : {}),
        output: {
          manualChunks,
          assetFileNames,
          chunkFileNames: "js/[name]-[hash].js",
          entryFileNames: "js/[name]-[hash].js",
        },
      },
      minify: "terser",
      terserOptions: {
        ...(lowMemory ? { maxWorkers: 1 } : {}),
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
        mangle: { safari10: true },
        format: { comments: false },
      },
      assetsInlineLimit: lowMemory ? 2048 : 4096,
      cssCodeSplit: true,
      cssMinify: true,
      sourcemap: false,
      target: "es2015",
      reportCompressedSize: !lowMemory,
    },
    optimizeDeps: {
      include: [
        "vue",
        "vue-router",
        "ant-design-vue",
        "@ant-design/icons-vue",
        "@emailjs/browser",
      ],
      ...(lowMemory ? { exclude: ["mermaid"] } : {}),
    },
    define: {
      // Ant Design Vue and existing components may rely on Options API support.
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    },
  };
}
