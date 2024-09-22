CREATE TABLE IF NOT EXISTS traveler
(
  player_id INT NOT NULL PRIMARY KEY,
  name VARCHAR(20) NOT NULL,
  level INT NOT NULL,
  signature VARCHAR(50) NOT NULL,
  world_level TINYINT NOT NULL,
  achievement_num INT NOT NULL,
  tower_floor_index INT NOT NULL,
  tower_level_index INT NOT NULL,
  tower_star_index INT NOT NULL,
  theater_act_index INT NOT NULL,
  theater_mode_index INT NOT NULL,
  theater_star_index INT NOT NULL
);