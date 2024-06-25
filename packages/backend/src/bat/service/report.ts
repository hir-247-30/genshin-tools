import { HOYOLAB_COOKIE_LTOKEN, HOYOLAB_COOKIE_LUID, REPORT_BORDER_HOME_COIN_RECOVERY_TIME, REPORT_BORDER_RESIN_RECOVERY_TIME } from '@config/define';
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

    // 樹脂
    const reportResin = reportForResinRecoveryTime(data.resin_recovery_time);
    // 洞天集宝盆
    const reportHomeCoin = reportForHomeCoinRecoveryTime(data.home_coin_recovery_time);
    // 参量物質変化器
    const reportTransformer = reportAvailableOnTransformer(data.transformer);
    // 探索派遣
    const reportExpeditions = reportExpeditionsFinished(data.expeditions);

    executeReport({ reportResin, reportHomeCoin, reportTransformer, reportExpeditions });
}

export function buildHoyoLabCookie() {
    return {
        Cookie: `ltoken_v2=${HOYOLAB_COOKIE_LTOKEN}; ltuid_v2=${HOYOLAB_COOKIE_LUID}`,
    };
}

async function executeReport(
    params: { reportResin: boolean; reportHomeCoin: boolean; reportTransformer: boolean; reportExpeditions: boolean; },
): Promise<void> {
    const {
        reportResin,
        reportHomeCoin,
        reportTransformer,
        reportExpeditions,
    } = params;

    if (!reportResin && !reportHomeCoin && !reportTransformer && !reportExpeditions) {
        return;
    }
}

function reportForResinRecoveryTime(resinRecoveryTime: string): boolean {
    if (REPORT_BORDER_RESIN_RECOVERY_TIME < 0) return false;

    return REPORT_BORDER_RESIN_RECOVERY_TIME > Number(resinRecoveryTime);
}

function reportForHomeCoinRecoveryTime(homeCoinRecoveryTime: string): boolean {
    if (REPORT_BORDER_HOME_COIN_RECOVERY_TIME < 0) return false;

    return REPORT_BORDER_HOME_COIN_RECOVERY_TIME > Number(homeCoinRecoveryTime);
}

function reportAvailableOnTransformer(transformer: HoyoLabApi.HoyoLabDailyApiTransformer): boolean {
    return transformer.recovery_time.reached;
}

function reportExpeditionsFinished(expeditions: HoyoLabApi.HoyoLabDailyApiExpeditions[]): boolean {
    const finishedExpeditions = expeditions.filter(ele => ele.status !== 'Ongoing');
    return finishedExpeditions.length > 0;
}
