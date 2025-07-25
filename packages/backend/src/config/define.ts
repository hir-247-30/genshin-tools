import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

// GENSHIN PERSONAL
export const USER_ID = process.env.USER_ID || '';
export const HOYOLAB_COOKIE_LTOKEN = process.env.HOYOLAB_COOKIE_LTOKEN || '';
export const HOYOLAB_COOKIE_LUID = process.env.HOYOLAB_COOKIE_LUID || '';
export const REPORT_BORDER_RESIN_RECOVERY_TIME = 7200; // 2時間前
export const REPORT_BORDER_HOME_COIN_RECOVERY_TIME = 36000; // 10時間前
export const SERVER_ZONE = 'os_asia';

// DATABASE
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_PORT = parseInt(process.env.DB_PORT || '13306');
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || 'password';
export const DB_NAME = process.env.DB_NAME || 'genshin-tools-database';

// SYSTEM
export const SERVER_PORT = parseInt(process.env.SERVER_PORT || '3000');
export const ENKA_NETWORK_API_URL = 'https://enka.network/api/uid/';
export const MAX_RESIN = 200;
export const MAX_HOME_COIN = 2400;
export const DAILY_TASK_NUMBER = 4;
