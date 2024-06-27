import * as util from '@common/util';
import { assert } from 'chai';
import { describe, it } from 'mocha';

describe('models/time', () => {
    before(function() {
    });
    after(function() {
    });

    it('myError404', () => {
        const error404 = {
            statuscode: 404,
            message: 'NOT FOUND',
        };
        assert.deepEqual(util.myError404(), error404);
    });
});
