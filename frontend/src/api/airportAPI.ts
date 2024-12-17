import API from "../utils/api";

const URL_PREFIX = 'api/Airports';

export function getAllAirport() {
    return API.get(`${URL_PREFIX}/DTO`);
}
export function getAllAirports() {
    return API.get(`${URL_PREFIX}`);
}