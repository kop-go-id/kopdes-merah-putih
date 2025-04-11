import { callApi, getAPIEndpoint } from '@/utils/endpoint';
import { fetchData } from '@/utils/fetch';

const login = async (body) => {
  const endpoint = getAPIEndpoint('login', 'POST');

  try {
    const response = await callApi(endpoint, body);

    console.log(response);
    return response.data;
  } catch (error) {
    console.error('registerNewCooperative call error:', error);
    throw error;
  }
};

export {
  login,
};
