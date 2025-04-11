import { fetchData } from '@/utils/fetch';

const fetchProvince = () => fetchData('/provinces');
const fetchDistrict = (provinceCode) =>
  fetchData(`/districts/by-province-code/${provinceCode}`);
const fetchSubDistrict = (districtCode) =>
  fetchData(`/sub-districts/by-district-code/${districtCode}`);
const fetchVillage = (subDistrictCode) =>
  fetchData(`/villages/by-sub-district-code/${subDistrictCode}`);

export { fetchProvince, fetchDistrict, fetchSubDistrict, fetchVillage };
