import { EnkaApi } from '@config/types';
import { upsert } from '@models/traveler';

export async function executeImportForTraveler(playerInfo: EnkaApi.PlayerInfo): Promise<void> {
    const result = await upsert(playerInfo);
    if (result) {
        throw new Error(`${result.statuscode} ${result.message} ${result.error?.message ?? 'エラーメッセージなし'}`);
    }
}

export async function executeImportForAvatar(avatarInfoList: EnkaApi.AvatarInfoList | undefined): Promise<void> {
    if (!avatarInfoList) return;
}
