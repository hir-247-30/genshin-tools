import { describe, it } from 'mocha';
import * as report from '../bat/service/report';

describe('report', () => {
    before(function() {
    });
    after(function() {
    });

    it('checkAndReport', done => {
        const maxResin = 200 as const;
        const maxHomeCoin = 2400 as const;
        const totalNum = 4 as const;
        const args = {
            retcode: 200,
            message: 'OK',
            data: {
                current_resin: 100,
                max_resin: maxResin,
                resin_recovery_time: '60000',
                finished_task_num: 0,
                total_task_num: 4,
                is_extra_task_reward_received: false,
                remain_resin_discount_num: 0,
                resin_discount_num_limit: 3,
                current_expedition_num: 5,
                max_expedition_num: 5,
                expeditions: [
                    {
                        avatar_side_icon: '',
                        status: 'Ongoing',
                        remained_time: '10000',
                    },
                    {
                        avatar_side_icon: '',
                        status: 'Ongoing',
                        remained_time: '10000',
                    },
                    {
                        avatar_side_icon: '',
                        status: 'Ongoing',
                        remained_time: '10000',
                    },
                    {
                        avatar_side_icon: '',
                        status: 'Ongoing',
                        remained_time: '10000',
                    },
                    {
                        avatar_side_icon: '',
                        status: 'Finished',
                        remained_time: '10000',
                    },
                ],
                current_home_coin: 1000,
                max_home_coin: maxHomeCoin,
                home_coin_recovery_time: '50000',
                calendar_url: '',
                transformer: {
                    obtained: true,
                    recovery_time: { Day: 1, Hour: 0, Minute: 0, Second: 0, reached: false },
                    wiki: '',
                    noticed: false,
                    latest_job_id: '0',
                },
                daily_task: {
                    total_num: totalNum,
                    finished_num: 0,
                    is_extra_task_reward_received: false,
                },
            },
        };
        report.checkAndReport(args);
        done();
    });
});
