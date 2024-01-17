import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return defineConfig({
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
      port: 8088, // 服务器端口号
      open: true, // 是否自动打开浏览器
      // 代理
      proxy: {
        [env.VITE_BASE_API]: {
          target: `http://xxx`,
          changeOrigin: true,
          rewrite: (path) => path.replace(env.VITE_BASE_API, ''),
        },
      },
    },
  });
};
