import QueryString from "qs";
import API from "../utils/api";

const URL_PREFIX = '/api/Flights'

export function getFlightPreview(objectParam: any) {
    let query = QueryString.stringify(objectParam);
    return API.get(`${URL_PREFIX}/Preview?${query}`);
}

export function getPagedFlightDTO(pageSize: number, pageNumber: number) {
    return API.get(`${URL_PREFIX}/Paged?pageSize=${pageSize}&pageNumber=${pageNumber}`);
}

export function getFromRequest(fromIATA: string, toIATA: string, dateTime?: string) {
    return API.get(`${URL_PREFIX}/FromRequest?fromIATA=${fromIATA}&toIATA=${toIATA}&dateTime=${dateTime}`);
}

export function getFromAircraftAndRoute(aircraftName: string, fromIATA: string, toIATA: string) {
    return API.get(`${URL_PREFIX}/FromRequest?aircraftName=${aircraftName}&fromIATA=${fromIATA}&toIATA=${toIATA}`);
}

export function generateFlights(days: number) {
    return API.post(`${URL_PREFIX}/AutoGenerate?days=${days}`);
}