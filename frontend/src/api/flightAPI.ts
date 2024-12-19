import QueryString from "qs";
import API from "../utils/api";

const URL_PREFIX = '/api/Flights'

export function getFlightPreview(objectParam: any) {
    let query = QueryString.stringify(objectParam);
    return API.get(`${URL_PREFIX}/Preview/${query}`);
}

export function getPagedFlightDTO(pageSize: number, pageNumber: number) {
    return API.get(`${URL_PREFIX}/Paged?pageSize=${pageSize}&pageNumber=${pageNumber}`);
}