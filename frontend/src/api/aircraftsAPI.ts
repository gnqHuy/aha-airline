import QueryString from "qs";
import API from "../utils/api";

const URL_PREFIX = '/api/Aircrafts';

export function getAllAircrafts() {
  return API.get(`${URL_PREFIX}`);
}
export function addAircrafts(objectParam: any) {
  let query = QueryString.stringify(objectParam);
  return API.post(`${URL_PREFIX}/${query}`);
}


