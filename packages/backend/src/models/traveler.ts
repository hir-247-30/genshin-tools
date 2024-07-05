import mysql, { Pool } from 'mysql';
import { USER_ID } from '@config/define';
import { dbPoolConfig, myError500 } from '@common/util';
import { CustomeErrorResponse, EnkaApi } from '@config/types';

const DB_NAME = 'traveler';
const pool: Pool = mysql.createPool(dbPoolConfig);

export async function insert(playerInfo: EnkaApi.PlayerInfo): Promise<CustomeErrorResponse | void> {
    try {
        const insertData = [
            USER_ID,
            playerInfo.nickname,
            playerInfo.level,
            playerInfo.signature ?? null,
            playerInfo.worldLevel ?? null,
            playerInfo.nameCardId ?? null,
            playerInfo.finishAchievementNum ?? null,
            playerInfo.towerFloorIndex ?? null,
            playerInfo.towerLevelIndex ?? null,
        ];
        const sql: string = mysql.format(`INSERT INTO ${DB_NAME} SET ? ? ? ? ? ? ? ? ?`, insertData);
        pool.query(sql);
    } catch (error) {
        pool.end();
        return myError500(error);
    }
}
