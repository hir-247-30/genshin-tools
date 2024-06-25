import { axiosRequest } from '@common/util';
import { HOYOLAB_DAILY_API_URL, SERVER_ZONE, USER_ID } from '@config/define';
import { HoyoLabApi } from '@config/types';
import { ok } from 'assert';
import { checkAndReport } from '../service/report';

await execute();

async function execute(): Promise<void> {
    const requestOptions = {
        url: HOYOLAB_DAILY_API_URL,
        method: 'GET',
        params: {
            role_id: USER_ID,
            server: SERVER_ZONE,
            schedule_type: 1,
        },
    };

    const response = await axiosRequest<HoyoLabApi.HoyoLabDailyApiResponse>(requestOptions);

    // TEST
    ok(response, `Totally empty response!`);

    checkAndReport(response);
}
