USE memory_trainer;

CREATE TABLE IF NOT EXISTS Cards (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL DEFAULT 'SingularisArt',
  date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  finished_time INT UNSIGNED NOT NULL DEFAULT 60,
  score INT UNSIGNED NOT NULL DEFAULT 10,
  item VARCHAR(255) NOT NULL DEFAULT 'Cards',
  number_of_items INT UNSIGNED NOT NULL DEFAULT 52,
  actual_card_data LONGTEXT NOT NULL DEFAULT '{}',
  guessed_card_data LONGTEXT NOT NULL DEFAULT '{}'
);

INSERT INTO Cards (id, username, date, finished_time, score, item, number_of_items, actual_card_data, guessed_card_data)
VALUES
  (1, 'SingularisArt', '2023-08-01 12:00:00', 60, 2, 'Decks', 2, '{}', '{}'),
  (2, 'SingularisArt', '2023-07-31 12:00:00', 60, 10, 'Cards', 52, '{}', '{}'),
  (3, 'SingularisArt', '2023-07-30 12:00:00', 60, 5, 'Cards', 52, '{}', '{}'),
  (4, 'SingularisArt', '2023-07-29 12:00:00', 60, 1, 'Cards', 52, '{}', '{}'),
  (5, 'SingularisArt', '2023-07-28 12:00:00', 60, 4, 'Decks', 2, '{}', '{}'),
  (6, 'SingularisArt', '2023-07-27 12:00:00', 60, 2, 'Decks', 3, '{}', '{}'),
  (7, 'SingularisArt', '2023-07-26 12:00:00', 60, 10, 'Decks', 4, '{}', '{}'),
  (8, 'SingularisArt', '2023-07-25 12:00:00', 60, 8, 'Cards', 52, '{}', '{}'),
  (9, 'SingularisArt', '2023-07-24 12:00:00', 60, 2, 'Cards', 52, '{}', '{}'),
  (10, 'SingularisArt', '2023-07-23 12:00:00', 60, 1, 'Cards', 52, '{}', '{}'),
  (11, 'SingularisArt', '2023-07-22 12:00:00', 60, 3, 'Decks', 2, '{}', '{}'),
  (12, 'SingularisArt', '2023-07-21 12:00:00', 60, 2, 'Cards', 52, '{}', '{}'),
  (13, 'SingularisArt', '2023-07-20 12:00:00', 60, 7, 'Decks', 2, '{}', '{}'),
  (14, 'SingularisArt', '2023-07-19 12:00:00', 60, 4, 'Cards', 52, '{}', '{}'),
  (15, 'SingularisArt', '2023-07-18 12:00:00', 60, 1, 'Cards', 52, '{}', '{}'),
  (16, 'SingularisArt', '2023-07-17 12:00:00', 60, 4, 'Decks', 3, '{}', '{}'),
  (17, 'SingularisArt', '2023-07-16 12:00:00', 60, 7, 'Decks', 5, '{}', '{}'),
  (18, 'SingularisArt', '2023-07-15 12:00:00', 60, 6, 'Cards', 52, '{}', '{}'),
  (19, 'SingularisArt', '2023-07-14 12:00:00', 60, 8, 'Decks', 2, '{}', '{}'),
  (20, 'SingularisArt', '2023-07-13 12:00:00', 60, 6, 'Cards', 52, '{}', '{}'),
  (21, 'SingularisArt', '2023-07-12 12:00:00', 60, 3, 'Cards', 52, '{}', '{}'),
  (22, 'SingularisArt', '2023-07-11 12:00:00', 60, 8, 'Cards', 52, '{}', '{}'),
  (23, 'SingularisArt', '2023-07-10 12:00:00', 60, 5, 'Decks', 2, '{}', '{}'),
  (24, 'SingularisArt', '2023-07-09 12:00:00', 60, 1, 'Cards', 52, '{}', '{}'),
  (25, 'SingularisArt', '2023-07-08 12:00:00', 60, 1, 'Cards', 52, '{}', '{}'),
  (26, 'SingularisArt', '2023-07-07 12:00:00', 60, 10, 'Decks', 2, '{}', '{}'),
  (27, 'SingularisArt', '2023-07-06 12:00:00', 60, 8, 'Cards', 52, '{}', '{}'),
  (28, 'SingularisArt', '2023-07-05 12:00:00', 60, 7, 'Cards', 52, '{}', '{}'),
  (29, 'SingularisArt', '2023-07-04 12:00:00', 60, 9, 'Decks', 3, '{}', '{}'),
  (30, 'SingularisArt', '2023-07-03 12:00:00', 60, 9, 'Cards', 52, '{}', '{}'),
  (31, 'SingularisArt', '2023-07-02 12:00:00', 60, 7, 'Cards', 52, '{}', '{}'),
  (32, 'SingularisArt', '2023-07-01 12:00:00', 60, 4, 'Decks', 4, '{}', '{}');
