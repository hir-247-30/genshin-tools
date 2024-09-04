import { myError500 } from '@common/util';
import { Context } from 'hono';

// GET /traveler/profile
export const TravelerProfileController = async (c: Context) => {
    try {
        const query = c.req.query('test');
        const testResponse = {
            text: 'OK',
            query: query,
        };
        return c.json(testResponse);
    } catch (error: unknown) {
        return c.json(myError500(error));
    }
};
