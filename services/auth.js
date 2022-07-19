import callAPI from "../api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function setLogin(data) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

  return callAPI({
    url,
    method: 'POST',
    data,
  });
}

export async function setCity(data) {
  const url = `https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json`;

  return callAPI({
    url,
    method: 'GET',
    data,
  });
}