import { CustomeErrorResponse } from '@config/types';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export async function axiosRequest<T>(requestOptions: {
    url: string;
    method: string;
    params?: { [key: string]: string | number; };
    headers?: { [key: string]: string; };
}) {
    const {
        url,
        method,
        params,
        headers,
    } = requestOptions;

    // @ts-expect-error サードパーティーの exactOptionalPropertyTypes
    const options: AxiosRequestConfig = {
        url,
        method,
        params,
        headers,
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

export function myError500(error: unknown): CustomeErrorResponse | undefined {
    if (!(error instanceof Error)) return;
    return {
        statuscode: 500,
        message: 'INTERNAL SERVER ERROR',
        error,
    };
}

export function myError400(error: unknown): CustomeErrorResponse | undefined {
    if (!(error instanceof Error)) return;
    return {
        statuscode: 400,
        message: 'INVALID PARAMETERS',
        error,
    };
}

export function myError404(): CustomeErrorResponse {
    return {
        statuscode: 404,
        message: 'NOT FOUND',
    };
}
