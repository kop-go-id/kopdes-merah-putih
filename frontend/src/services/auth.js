import { callApi, getAPIEndpoint } from '@/utils/endpoint';

const login = async (body) => {
  const endpoint = getAPIEndpoint('login', 'POST');

  try {
    const response = await callApi(endpoint, body);

    console.log(response);
    return response;
  } catch (error) {
    console.error('login call error:', error);
    throw error;
  }
};

export {
  login,
};
