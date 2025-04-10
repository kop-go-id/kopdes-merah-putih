import { fetchData } from "@/utils/fetch";

const getCooperativeTypes = () => fetchData('/cooperative/types');
const getNPAKByProvince = (provinceCode) => fetchData(`/npak/by-province-code/${provinceCode}`);

export {
  getCooperativeTypes,
  getNPAKByProvince,
};