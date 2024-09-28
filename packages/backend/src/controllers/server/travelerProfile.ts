import { myError500 } from '@common/util';
import { USER_ID } from '@config/define';
import { fetch } from '@models/traveler';
import { Context } from 'hono';

// GET /traveler/profile
export const TravelerProfileController = async (c: Context) => {
    try {
        const traveler = await fetch(USER_ID);
        const response = {
            traveler,
        };
        return c.json(response);
    } catch (error: unknown) {
        return c.json(myError500(error));
    }
};
