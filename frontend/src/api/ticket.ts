import QueryString from "qs";
import { FlightTickets } from "../object/ticket";
import API from "../utils/api";

const URL_PREFIX = 'api/Tickets';

export function AddTickets(objectParam: any) {
    return API.post(`${URL_PREFIX}`, objectParam);
}

export function GetByReservationOrTicketCode(query: string) {
    return API.get(`${URL_PREFIX}/GetByReservationOrTicketCode?reservationCode=${query}`);
}

export function UpgradeSeatById(query: string) {
    return API.put(`${URL_PREFIX}/UpgradeSeat/Id?ticketId=${query}`);
}

export function UpgradeSeatByCode(query: string) {
    return API.put(`${URL_PREFIX}/UpgradeSeat/Code?ticketCode=${query}`);
}

export function CancelTicketById(query: string) {
    return API.delete(`${URL_PREFIX}/CancelTicket/Id?ticketId=${query}`);
}

export function CancelTicketByCode(query: string) {
    return API.delete(`${URL_PREFIX}/CancelTicket/Code?ticketCode=${query}`);
}