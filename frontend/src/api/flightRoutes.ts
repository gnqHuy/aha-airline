import API from "../utils/api";

const URL_PREFIX = 'api/FlightRoutes';

export function getAllFlightRoutes() {
    return API.get(`${URL_PREFIX}/DTO`);
}

export function addFlightRoute(fromIATA: string, toIATA: string) {
    return API.post(`${URL_PREFIX}?fromAirportIATA=${fromIATA}&toAirportIATA=${toIATA}`)
}