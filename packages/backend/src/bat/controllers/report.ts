import { axiosRequest } from '@common/util';
import { HOYOLAB_DAILY_API_URL, SERVER_ZONE, USER_ID } from '@config/define';
import { HoyoLabApi } from '@config/types';
import { ok } from 'assert';
import { buildHoyoLabCookie, checkAndReport } from '../service/report';

await execute();

async function execute(): Promise<void> {
    const hoyoLabCookie = buildHoyoLabCookie();
    const requestOptions = {
        url: HOYOLAB_DAILY_API_URL,
        method: 'GET',
        params: {
            role_id: USER_ID,
            server: SERVER_ZONE,
            schedule_type: 1,
        },
        headers: hoyoLabCookie,
    };

    const response = await axiosRequest<HoyoLabApi.HoyoLabDailyApiResponse>(requestOptions);

    ok(response, `Totally empty response!`);

    checkAndReport(response);
}
