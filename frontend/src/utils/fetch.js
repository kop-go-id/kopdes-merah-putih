import { callApi, getAPIEndpoint } from './endpoint';

export const fetchData = async (path) => {
  try {
    const endpoint = getAPIEndpoint(path, 'GET');
    const response = await callApi(endpoint);
    return response?.data;
  } catch (err) {
    console.error(`Failed to fetch data`, err);
  }
};
