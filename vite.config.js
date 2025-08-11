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

  // 构建优化配置 - 针对2G内存服务器
  build: {
    // 减少内存使用
    chunkSizeWarningLimit: 1000, // 提高chunk大小警告阈值

    // 启用代码分割，减少单个文件大小
    rollupOptions: {
      output: {
        // 手动分割代码块
        manualChunks: {
          // 将Vue相关库分离
          'vue-vendor': ['vue', 'vue-router'],
          // 将Ant Design Vue分离
          'antd-vendor': ['ant-design-vue', '@ant-design/icons-vue'],
          // 将其他第三方库分离
          'vendor': ['@emailjs/browser', 'mermaid'],
        },

        // 资源文件命名
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.names?.[0] || assetInfo.name || 'asset';

          // 根据文件类型分类存放
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i.test(fileName)) {
            return `media/[name]-[hash][extname]`;
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)$/i.test(fileName)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(fileName)) {
            return `fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },

        // JS文件命名
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      },

      // 外部依赖 - 减少打包体积
      external: [],
    },

    // 压缩配置
    minify: 'terser',
    terserOptions: {
      compress: {
        // 移除console和debugger
        drop_console: true,
        drop_debugger: true,
        // 移除未使用的代码
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
      },
      mangle: {
        // 混淆变量名以减少文件大小
        safari10: true,
      },
    },

    // 资源处理
    assetsInlineLimit: 4096, // 小于4kb的资源内联为base64

    // CSS代码分割
    cssCodeSplit: true,

    // 生成source map（生产环境可关闭以节省空间）
    sourcemap: false,

    // 目标浏览器
    target: 'es2015',
  },

  // 开发服务器优化
  server: {
    // 预构建优化
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        'ant-design-vue',
        '@ant-design/icons-vue',
      ],
    },
  },

  // 预构建配置
  optimizeDeps: {
    // 强制预构建这些依赖
    include: [
      'vue',
      'vue-router',
      'ant-design-vue',
      '@ant-design/icons-vue',
      '@emailjs/browser',
    ],
  },
})
