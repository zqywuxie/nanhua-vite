import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";
import path from "path";

// 低内存服务器专用构建配置
export default defineConfig({
  base: "./",

  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"),
      "@assets": path.join(__dirname, "./src/assets"),
    },
  },

  plugins: [
    vue({
      // 减少Vue编译时的内存使用
      template: {
        compilerOptions: {
          // 优化编译选项
          hoistStatic: true,
          cacheHandlers: true,
        }
      }
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        }),
      ],
      // 减少组件解析的内存使用
      dts: false, // 禁用类型声明文件生成
    }),
  ],

  // 极致的构建优化配置
  build: {
    // 更小的chunk大小警告阈值
    chunkSizeWarningLimit: 800,

    // 更激进的代码分割
    rollupOptions: {
      output: {
        // 更细粒度的代码分割
        manualChunks: (id) => {
          // 将node_modules中的包分离
          if (id.includes('node_modules')) {
            if (id.includes('vue')) {
              return 'vue-vendor';
            }
            if (id.includes('ant-design-vue') || id.includes('@ant-design')) {
              return 'antd-vendor';
            }
            if (id.includes('mermaid')) {
              return 'mermaid-vendor';
            }
            if (id.includes('@emailjs')) {
              return 'email-vendor';
            }
            // 其他第三方库
            return 'vendor';
          }

          // 按功能模块分离应用代码
          if (id.includes('/views/')) {
            if (id.includes('/Reagent/')) {
              return 'reagent-pages';
            }
            if (id.includes('/LifeScience/')) {
              return 'lifescience-pages';
            }
            if (id.includes('/instrumentDetail/')) {
              return 'instrument-pages';
            }
            if (id.includes('/Home/')) {
              return 'home-page';
            }
            return 'other-pages';
          }

          if (id.includes('/components/')) {
            return 'components';
          }
        },

        // 资源文件分类
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.names?.[0] || assetInfo.name || 'asset';

          if (/\.(mp4|webm|ogg)$/i.test(fileName)) {
            return `media/[name]-[hash][extname]`;
          }
          if (/\.(png|jpe?g|gif|svg|webp)$/i.test(fileName)) {
            return `images/[name]-[hash][extname]`;
          }
          if (/\.(woff2?|eot|ttf|otf)$/i.test(fileName)) {
            return `fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },

        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
      },

      // Rollup选项优化
      cache: false, // 禁用缓存以节省内存
    },

    // 压缩配置
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        // 更激进的压缩
        passes: 2,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
      },
      mangle: {
        safari10: true,
        toplevel: true,
      },
      format: {
        comments: false, // 移除所有注释
      },
    },

    // 资源处理
    assetsInlineLimit: 2048, // 减少内联资源大小

    // CSS处理
    cssCodeSplit: true,
    cssMinify: true,

    // 禁用source map
    sourcemap: false,

    // 目标浏览器
    target: 'es2015',

    // 减少内存使用的其他选项
    reportCompressedSize: false, // 禁用压缩大小报告
    write: true,
    emptyOutDir: true,
  },

  // 开发服务器优化
  server: {
    optimizeDeps: {
      include: [
        'vue',
        'vue-router',
        'ant-design-vue',
      ],
      exclude: [
        'mermaid', // 排除大型库的预构建
      ],
    },
  },

  // 预构建配置
  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      'ant-design-vue',
    ],
    exclude: [
      'mermaid',
    ],
  },

  // 实验性功能
  experimental: {
    renderBuiltUrl: (filename) => {
      // 优化资源URL生成
      return filename;
    },
  },

  // 定义全局常量以减少运行时检查
  define: {
    __VUE_OPTIONS_API__: false, // 禁用Options API以减少包大小
    __VUE_PROD_DEVTOOLS__: false, // 生产环境禁用devtools
  },
});
