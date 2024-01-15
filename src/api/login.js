import request from '@/utils/request';

// 登录方法
export function login(username, password) {
  const data = { username, password };
  return request({
    url: `/user/authorization`,
    headers: {
      isToken: false,
    },
    method: 'post',
    data,
  });
}
