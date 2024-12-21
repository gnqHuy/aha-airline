import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from "axios";
import config from "../config";
import { EnhancedStore } from "@reduxjs/toolkit";

const axiosInstance = axios.create({
    baseURL: config.API_URL,
    responseType: 'json',
    timeout: 20000,
});

export const setupAxios = (store: EnhancedStore) => {
    axiosInstance.interceptors.request.use(
        (request: InternalAxiosRequestConfig) => {
            const {
                auth: { accessToken },
            } = store.getState();

            if (accessToken) {
                if (request.headers) {
                    request.headers.set("Authorization", `Bearer ${accessToken}`);
                    
                }
            }
            return request;
        },
        (error: AxiosError) => Promise.reject(error)
    );

}

export default axiosInstance;