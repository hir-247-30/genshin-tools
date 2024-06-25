import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export async function axiosRequest<T>(requestOptions: { url: string; method: string; params?: { [key: string]: string | number; }; }) {
    const {
        url,
        method,
        params,
    } = requestOptions;

    const options: AxiosRequestConfig = {
        url,
        method,
        params,
    };

    return axios(options)
        .then((res: AxiosResponse<T>) => {
            return res.data;
        })
        .catch((e: AxiosError<{ error: string; }>) => {
            console.log(e.message);
            return undefined;
        });
}
