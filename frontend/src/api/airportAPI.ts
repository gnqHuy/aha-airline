import API from "../utils/api";

const URL_PREFIX = 'api/Airports';

export function testAPI() {
    return API.get('WeatherForecast');
}

export function getAllAirport() {
    return API.get(`${URL_PREFIX}/DTO`);
}