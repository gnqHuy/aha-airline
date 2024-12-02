import API from "../utils/api";

export function testAPI() {
    return API.get('WeatherForecast');
}