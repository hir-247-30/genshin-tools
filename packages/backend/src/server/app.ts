import { myError404 } from '@common/util';
import { EXPRESS_PORT } from '@config/define';
import Express from 'express';
import { TravelerProfileController } from './controllers/travelerProfile';

const app: Express.Application = Express();

app.use(TravelerProfileController);

app.use(function(req, res) {
    const error = myError404();
    res.status(404).send({ error });
});

app.listen(EXPRESS_PORT, () => {
    console.log('Express server is running...');
    console.log(`Now, you can access to http://localhost:${EXPRESS_PORT}`);
});
