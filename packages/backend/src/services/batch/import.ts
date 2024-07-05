import { EnkaApi } from '@config/types';
import { insert } from '@models/traveler';

export async function executeImportForTraveler(playerInfo: EnkaApi.PlayerInfo): Promise<void> {
    const result = await insert(playerInfo);
    if (result) {
        throw new Error(`${result.statuscode} ${result.message} ${result.error?.message ?? 'エラーメッセージなし'}`);
    }
}

export async function executeImportForAvatar(avatarInfoList: EnkaApi.AvatarInfoList | undefined): Promise<void> {
    if (!avatarInfoList) return;

    // todo
    console.log(avatarInfoList);
}
