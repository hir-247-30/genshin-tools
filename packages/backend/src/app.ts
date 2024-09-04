import { myError404 } from '@common/util';
import { SERVER_PORT } from '@config/define';
import { TravelerProfileController } from '@controllers/server/travelerProfile';
import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { logger } from 'hono/logger';

const app = new Hono();
app.use('*', logger());

app.get('/traveler/profile', TravelerProfileController);

app.use('*', async (c, next) => {
    await next();
    const error = myError404();
    return c.json({ error });
});

serve({ ...app, port: SERVER_PORT }, () => console.log(`Now, you can access to http://localhost:${SERVER_PORT}`));
