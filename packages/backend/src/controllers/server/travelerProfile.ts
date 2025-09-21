import { myError404, myError500 } from '#common/util';
import { USER_ID } from '#config/define';
import { TravelersEntity } from '#domains/travelerEntity';
import { fetch } from '#models/traveler';
import { Context } from 'hono';

// GET /traveler/profile
export const TravelerProfileController = async (c: Context) => {
    try {
        const traveler = await fetch(USER_ID);
        if (!traveler) return c.json(myError404('Traveler not found'));

        const travelerEntity = new TravelersEntity(traveler);

        const response = {
            traveler: travelerEntity.getEntity(),
        };
        return c.json(response);
    } catch (error: unknown) {
        return c.json(myError500(error));
    }
};
