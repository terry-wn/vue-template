import axios from 'axios';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// 创建 Axios 实例
const service = axios.create({
  // 设置默认的 baseURL
  baseURL: 'http://example.com',
  // 请求超时时间
  timeout: 10000,
  // 跨域请求凭证
  withCredentials: true,
});

// 自定义异常处理方法
function handleRequestError(error) {
  // 根据错误类型进行处理，例如统一拦截错误信息，进行提示等操作
  console.error('请求发生错误:', error);
}

// 设置请求头参数
function setHeaders(headers) {
  // 根据需要设置请求头参数，例如 Authorization 等
  service.defaults.headers.common['Authorization'] = headers.authorization;
  service.defaults.headers.common['X-Custom-Header'] = headers.customHeader;
}

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在请求发送前，可以对请求进行一些预处理，例如设置请求头参数
    setHeaders(config.headers);
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;
    return config;
  },
  (error) => {
    // 请求发送失败时的处理
    handleRequestError(error);
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据进行处理，例如统一拦截响应数据，进行处理或转换等操作
    return response;
  },
  (error) => {
    // 响应错误处理
    handleRequestError(error);
    return Promise.reject(error);
  }
);

// 导出全局方法
export default service;
