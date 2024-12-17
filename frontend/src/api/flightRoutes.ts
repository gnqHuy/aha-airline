import API from "../utils/api";

const URL_PREFIX = 'api/FlightRoutes';

export function getAllFlightRoutes() {
    return API.get(`${URL_PREFIX}/DTO`);
}