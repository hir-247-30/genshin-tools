import { FastifyInstance } from 'fastify';

export async function TravelerProfileController(route: FastifyInstance, done: (err?: Error) => void) {
    route.get(`/traveler/profile`, async (req, res) => {
        // 確認用
        console.log(req.query);
        res.send({ hello: 'world' });
        done();
    });
}
