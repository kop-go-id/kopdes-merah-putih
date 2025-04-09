const { getAPIEndpoint } = require("@/utils/endpoint");

// TODO: Create share functions for region
const fetchProvince = async () => {
    try {
      const endpoint = getAPIEndpoint('/provinces', 'GET');
      const response = await callApi(endpoint);
      return response?.data;
    } catch (err) {}
};

const fetchDistrict = async (provinceCode) => {
try {
    const endpoint = getAPIEndpoint(`/districts/by-province-code/${provinceCode}`, 'GET');
    const response = await callApi(endpoint);
    return response?.data;
} catch (err) {}
};

const fetchSubDistrict = async (districtCode) => {
try {
    const endpoint = getAPIEndpoint(`/sub-districts/by-district-code/${districtCode}`, 'GET');
    const response = await callApi(endpoint);
    return response?.data;
} catch (err) {}
};

const fetchVillage = async (subDistrictCode) => {
try {
    const endpoint = getAPIEndpoint(`/villages/by-sub-district-code/${subDistrictCode}`, 'GET');
    const response = await callApi(endpoint);
    return response?.data;
} catch (err) {}
};

const getCooperativeTypes = async () => {
    try {
      const endpoint = getAPIEndpoint(`/cooperative/types`, 'GET');
      const response = await callApi(endpoint);
      return response?.data;
    } catch (err) {}
}

export {
    fetchProvince,
    fetchDistrict,
    fetchSubDistrict,
    fetchVillage,
    getCooperativeTypes,
};