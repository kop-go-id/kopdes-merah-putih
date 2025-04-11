import { callApi, getAPIEndpoint } from '@/utils/endpoint';

const login = async (body) => {
  const endpoint = getAPIEndpoint('login', 'POST');

  try {
    const response = await callApi(endpoint, body);
    return response ?? 'error';
  } catch (error) {
    return error;
  }
};

export {
  login,
};
