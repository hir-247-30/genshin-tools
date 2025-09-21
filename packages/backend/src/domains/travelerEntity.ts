import { Database, Entity } from '#config/types';

export class TravelersEntity {
    private player_id: string;
    private name: string;
    private level: number;
    private signature: string;
    private world_level: number;
    private achievement_num: number;
    private tower_floor_index: number;
    private tower_level_index: number;
    private tower_star_index: number;
    private theater_act_index: number;
    private theater_mode_index: number;
    private theater_star_index: number;

    constructor(traveler: Database.Traveler) {
        this.player_id = traveler.player_id;
        this.name = traveler.name;
        this.level = traveler.level;
        this.signature = traveler.signature;
        this.world_level = traveler.world_level;
        this.achievement_num = traveler.achievement_num;
        this.tower_floor_index = traveler.tower_floor_index;
        this.tower_level_index = traveler.tower_level_index;
        this.tower_star_index = traveler.tower_star_index;
        this.theater_act_index = traveler.theater_act_index;
        this.theater_mode_index = traveler.theater_mode_index;
        this.theater_star_index = traveler.theater_star_index;
    }

    public getEntity(): Entity.Traveler {
        return {
            player_id: this.player_id,
            name: this.name,
            level: this.level,
            signature: this.signature,
            world_level: this.world_level,
            achievement_num: this.achievement_num,
            tower_floor_index: this.tower_floor_index,
            tower_level_index: this.tower_level_index,
            tower_star_index: this.tower_star_index,
            theater_act_index: this.theater_act_index,
            theater_mode_index: this.theater_mode_index,
            theater_star_index: this.theater_star_index,
        };
    }
}
