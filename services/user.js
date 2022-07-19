import callAPI from "../api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = 'api/v1';

export async function getUser() {
  const url = `${ROOT_API}/${API_VERSION}/user/get`;

  return callAPI({
    url,
    method: 'GET',
  });
}