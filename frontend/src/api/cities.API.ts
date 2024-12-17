import API from "../utils/api";

const URL_PREFIX = 'api/Cities';

export function getAllCities() {
    return API.get(`${URL_PREFIX}`);
}