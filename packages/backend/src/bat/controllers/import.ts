import { axiosRequest } from '@common/util';
import { ENKA_NETWORK_API_URL, USER_ID } from '@config/define';
import { EnkaApi } from '@config/types';

await execute();

async function execute(): Promise<void> {
    const requestOptions = {
        url: ENKA_NETWORK_API_URL + USER_ID,
        method: 'GET',
    };

    const response = await axiosRequest<EnkaApi.EnkaApiResponse>(requestOptions);

    if (!response) return;

    console.log(response);
}
