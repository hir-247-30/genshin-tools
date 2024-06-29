import { myError500 } from '@common/util';
import { CustomeErrorResponse, EnkaApi } from '@config/types';
import mysql, { Pool, PoolConfig } from 'mysql';

const DB_NAME = 'traveler';
const poolConfig: PoolConfig = {
    host: 'host',
    port: 3306,
    user: 'user',
    password: 'password',
    database: 'database',
};
const pool: Pool = mysql.createPool(poolConfig);

export async function insertTravelerData(playerInfo: EnkaApi.PlayerInfo): Promise<CustomeErrorResponse | void> {
    try {
        const insertData = [playerInfo.nickname];
        const sql: string = mysql.format(`INSERT INTO ${DB_NAME} SET ?`, insertData);
        pool.query(sql);
    } catch (error) {
        pool.end();
        return myError500(error);
    }
}
