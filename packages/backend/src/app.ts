import { myError404 } from '@common/util';
import { SERVER_PORT } from '@config/define';
import { TravelerProfileController } from '@controllers/server/travelerProfile';
import { serve } from '@hono/node-server';
import { Context, Hono } from 'hono';
import { logger } from 'hono/logger';

const app = new Hono();
app.use('*', logger());

app.get('/traveler/profile', TravelerProfileController);

app.use('*', async (c: Context, next) => {
    await next();
    const error = myError404();
    return c.json({ error });
});

const server = serve({ ...app, port: SERVER_PORT }, () => console.log(`Now, you can access to http://localhost:${SERVER_PORT}`));

const gracefulShutdown = function() {
    server.close(function () {
        console.log('bye');
        process.exit();
    });
};
process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
process.on('SIGHUP', gracefulShutdown);
