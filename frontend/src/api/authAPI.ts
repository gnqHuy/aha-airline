import API from "../utils/api";

const URL_PREFIX = 'api/Auth';

export function logIn(objectParam: any) {
    return API.post(`${URL_PREFIX}/login`, objectParam);
}

export function signUp(objectParam: any) {
    return API.post(`${URL_PREFIX}/register`, objectParam);
}