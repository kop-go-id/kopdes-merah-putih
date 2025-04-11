import { callApi, getAPIEndpoint } from '@/utils/endpoint';

const login = async (body) => {
  const endpoint = getAPIEndpoint('login', 'POST');

  try {
    const response = await callApi(endpoint, body);
    localStorage.setItem('token', response.token);
    return response ?? 'error';
  } catch (error) {
    return error;
  }
};

export {
  login,
};
