import { REPORT_BORDER_RESIN_RECOVERY_TIME } from '@config/define';
import { HoyoLabApi } from '@config/types';
import { ok } from 'assert';

export async function checkAndReport(hoyoLabDailyApiResponse: HoyoLabApi.HoyoLabDailyApiResponse): Promise<void> {
    const {
        retcode,
        message,
        data,
    } = hoyoLabDailyApiResponse;

    ok(retcode === 0, `Invalid retcode ${message}`);
    ok(message === 'OK', `Invalid message ${message}`);
    ok(data !== null, `Invalid data ${message}`);

    const reportResin = reportForResinRecoveryTime(data.resin_recovery_time);

    console.log(reportResin);
}

function reportForResinRecoveryTime(resinRecoveryTime: string): boolean {
    if (REPORT_BORDER_RESIN_RECOVERY_TIME < 0) return false;

    return REPORT_BORDER_RESIN_RECOVERY_TIME > Number(resinRecoveryTime);
}
