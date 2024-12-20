import QueryString from "qs";
import { FlightTickets } from "../object/ticket";
import API from "../utils/api";

const URL_PREFIX = 'api/Tickets';

export function AddTickets(objectParam: any) {
    return API.post(`${URL_PREFIX}`, objectParam);
}
