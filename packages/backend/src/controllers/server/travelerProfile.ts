import { myError500 } from '@common/util';
import { NextFunction, Request, Response, Router } from 'express';

const route: Router = Router();

route.get('/traveler/profile', function(req: Request, res: Response, next: NextFunction) {
    try {
        const query = req.params.test;
        const testResponse = {
            text: 'OK',
            query: query,
        };
        res.send(testResponse);
    } catch (error: unknown) {
        next(myError500(error));
    }
});

export const TravelerProfileController: Router = route;
