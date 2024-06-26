import Fastify from 'fastify';
import * as controllers from './controllers/travelerProfile';

const app = Fastify({
    logger: true,
});

app.register(controllers.TravelerProfileController);

app.listen({ port: 3000 }, (err) => {
    if (err) throw err;
});
