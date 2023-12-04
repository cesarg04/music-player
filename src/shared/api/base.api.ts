import axios from 'axios';
import Cookies from 'js-cookie';
import { ENVIRONMENTS } from '../const/env/enviroments.const';

export const api = {
    get: <T>(url: string, params?: object) =>
        axios.get<T>(ENVIRONMENTS.host + url, {
            headers: {
                token: Cookies.get('token'),
            },
            ...params,
        }),
    post: <T>(url: string, data: any, params?: object) =>
    {   
        return axios.post<T>(ENVIRONMENTS.host + url, data, {
            headers: {
                token: Cookies.get('token'),
            },
            ...params
        })
    },
    patch: <T>(url: string, data: any, params?: object) =>
        axios.patch<T>(ENVIRONMENTS.host + url, data, {
            headers: {
                token: Cookies.get('token'),
            },
            ...params
        }),
    delete: <T>(url: string) =>
        axios.delete<T>(ENVIRONMENTS.host + url, {
            headers: {
                token: Cookies.get('token'),
            },
        }),
};
