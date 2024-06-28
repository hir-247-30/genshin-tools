import { EnkaApi } from '@config/types';
import { insertTravelerData } from '../models/traveler';

export async function executeImportForTraveler(playerInfo: EnkaApi.PlayerInfo): Promise<void> {
    const result = await insertTravelerData(playerInfo);
    if (result) {
        console.log(result);
    }
}

export async function executeImportForAvatar(avatarInfoList: EnkaApi.AvatarInfoList | undefined): Promise<void> {
    if (!avatarInfoList) return;

    // todo
    console.log(avatarInfoList);
}
