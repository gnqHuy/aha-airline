import API from "../utils/api";

const URL_PREFIX = 'api/Aircrafts';

export function getAllAircrafts() {
    return API.get(`${URL_PREFIX}`);
}