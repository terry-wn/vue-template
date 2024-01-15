import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  base: './',
  // 静态资源服务的文件夹，默认public
  publicDir: 'public',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8000, // 服务器端口号
    open: false, // 是否自动打开浏览器
    // 代理
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: `http://xxx`,
        cookieDomainRewrite: 'localhost',
        changeOrigin: true,
        pathRewrite: {
          [`^${process.env.VUE_APP_BASE_API}`]: '',
        },
      },
    },
  },
});
