import { dbConnectionOptions, myError500 } from '@common/util';
import { USER_ID } from '@config/define';
import { CustomeErrorResponse, EnkaApi } from '@config/types';
import mysql, { Pool } from 'mysql2';

const DB_NAME = 'traveler';

export async function upsert(playerInfo: EnkaApi.PlayerInfo): Promise<CustomeErrorResponse | void> {
    const pool: Pool = mysql.createPool(dbConnectionOptions);
    try {
        const sql: string = mysql.format(`
            INSERT INTO ${DB_NAME} SET
            player_id = :player_id,
            name = :name,
            level = :level,
            signature = :signature,
            world_level = :world_level,
            achievement_num = :achievement_num,
            tower_floor_index = :tower_floor_index,
            tower_level_index = :tower_level_index,
            tower_star_index = :tower_star_index,
            theater_act_index = :theater_act_index,
            theater_mode_index = :theater_mode_index,
            theater_star_index = :theater_star_index
        `);
        const values = {
            player_id: USER_ID,
            name: playerInfo.nickname,
            level: playerInfo.level,
            signature: playerInfo.signature ?? '',
            world_level: playerInfo.worldLevel ?? 0,
            achievement_num: playerInfo.finishAchievementNum ?? 0,
            tower_floor_index: playerInfo.towerFloorIndex ?? 0,
            tower_level_index: playerInfo.towerLevelIndex ?? 0,
            tower_star_index: playerInfo.towerStarIndex ?? 0,
            theater_act_index: playerInfo.theaterActIndex ?? 0,
            theater_mode_index: playerInfo.theaterModeIndex ?? 0,
            theater_star_index: playerInfo.theaterStarIndex ?? 0,
        };
        pool.execute(sql, values);
    } catch (error) {
        return myError500(error);
    }
}
