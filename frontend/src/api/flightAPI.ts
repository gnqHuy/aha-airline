import QueryString from "qs";
import API from "../utils/api";

const URL_PREFIX = '/api/Flights'

export function getFlightPreview(objectParam: any) {
    let query = QueryString.stringify(objectParam);
    return API.get(`${URL_PREFIX}/Preview/${query}`);
}