CREATE DATABASE IF NOT EXISTS memory_trainer;
USE memory_trainer;

DROP TABLE Cards;
CREATE TABLE IF NOT EXISTS Cards (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL DEFAULT 'SingularisArt',
  date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  finished_time INT UNSIGNED NOT NULL DEFAULT 60,
  score FLOAT UNSIGNED NOT NULL DEFAULT 10,
  item VARCHAR(255) NOT NULL DEFAULT 'Cards',
  number_of_items INT UNSIGNED NOT NULL DEFAULT 52,
  actual_card_data LONGTEXT NOT NULL DEFAULT '{}',
  memorized_card_data LONGTEXT NOT NULL DEFAULT '{}',
  number_of_correctly_memorized_items INT UNSIGNED NOT NULL DEFAULT 52,
  number_of_incorrectly_memorized_items INT UNSIGNED NOT NULL DEFAULT 0
);

INSERT INTO Cards (id, username, date, finished_time, score, item, number_of_items, actual_card_data, memorized_card_data, number_of_correctly_memorized_items, number_of_incorrectly_memorized_items)
VALUES
  (1, 'SingularisArt', '2023-07-01 14:44:08', 33, 0.0385, 'Decks', 4, '{}', '{}', 8, 200),
  (2, 'SingularisArt', '2023-07-02 11:39:31', 18, 0.0769, 'Decks', 1, '{}', '{}', 4, 48),
  (3, 'SingularisArt', '2023-07-03 09:48:10', 28, 0.5385, 'Decks', 2, '{}', '{}', 56, 48),
  (4, 'SingularisArt', '2023-07-04 15:20:30', 22, 0.6731, 'Decks', 2, '{}', '{}', 70, 34),
  (5, 'SingularisArt', '2023-07-05 10:26:36', 20, 1.0, 'Decks', 2, '{}', '{}', 104, 0),
  (6, 'SingularisArt', '2023-07-06 22:56:46', 49, 0.2353, 'Cards', 34, '{}', '{}', 8, 26),
  (7, 'SingularisArt', '2023-07-07 00:07:45', 15, 1.0, 'Cards', 3, '{}', '{}', 3, 0),
  (8, 'SingularisArt', '2023-07-08 12:53:57', 42, 0.1346, 'Decks', 1, '{}', '{}', 7, 45),
  (9, 'SingularisArt', '2023-07-09 22:20:59', 46, 0.0846, 'Decks', 5, '{}', '{}', 22, 238),
  (10, 'SingularisArt', '2023-07-10 20:05:51', 19, 0.7368, 'Cards', 38, '{}', '{}', 28, 10),
  (11, 'SingularisArt', '2023-07-11 14:19:25', 52, 0.9444, 'Cards', 18, '{}', '{}', 17, 1),
  (12, 'SingularisArt', '2023-07-12 18:20:41', 26, 0.2619, 'Cards', 42, '{}', '{}', 11, 31),
  (13, 'SingularisArt', '2023-07-13 18:13:03', 2, 0.3077, 'Decks', 4, '{}', '{}', 64, 144),
  (14, 'SingularisArt', '2023-07-14 10:22:30', 3, 0.0455, 'Cards', 22, '{}', '{}', 1, 21),
  (15, 'SingularisArt', '2023-07-15 18:55:25', 19, 0.0732, 'Cards', 41, '{}', '{}', 3, 38),
  (16, 'SingularisArt', '2023-07-16 02:21:41', 24, 0.0426, 'Cards', 47, '{}', '{}', 2, 45),
  (17, 'SingularisArt', '2023-07-17 07:44:55', 39, 0.4038, 'Decks', 4, '{}', '{}', 84, 124),
  (18, 'SingularisArt', '2023-07-18 14:15:09', 44, 1.0, 'Cards', 1, '{}', '{}', 1, 0),
  (19, 'SingularisArt', '2023-07-19 20:09:54', 2, 0.8333, 'Cards', 6, '{}', '{}', 5, 1),
  (20, 'SingularisArt', '2023-07-20 00:59:15', 9, 0.7019, 'Decks', 2, '{}', '{}', 73, 31),
  (21, 'SingularisArt', '2023-07-21 22:58:37', 32, 0.9327, 'Decks', 2, '{}', '{}', 97, 7),
  (22, 'SingularisArt', '2023-07-22 09:44:19', 4, 0.1846, 'Decks', 5, '{}', '{}', 48, 212),
  (23, 'SingularisArt', '2023-07-23 03:16:02', 54, 0.9091, 'Cards', 11, '{}', '{}', 10, 1),
  (24, 'SingularisArt', '2023-07-24 13:04:38', 32, 0.1176, 'Cards', 17, '{}', '{}', 2, 15),
  (25, 'SingularisArt', '2023-07-25 02:43:10', 11, 0.3061, 'Cards', 49, '{}', '{}', 15, 34),
  (26, 'SingularisArt', '2023-07-26 04:13:36', 31, 0.8462, 'Decks', 1, '{}', '{}', 44, 8),
  (27, 'SingularisArt', '2023-07-27 01:39:56', 35, 0.3864, 'Cards', 44, '{}', '{}', 17, 27),
  (28, 'SingularisArt', '2023-07-28 06:04:22', 15, 0.3077, 'Decks', 3, '{}', '{}', 48, 108),
  (29, 'SingularisArt', '2023-07-29 01:42:19', 26, 0.2667, 'Cards', 15, '{}', '{}', 4, 11),
  (30, 'SingularisArt', '2023-07-30 23:05:55', 54, 0.32, 'Cards', 25, '{}', '{}', 8, 17),
  (31, 'SingularisArt', '2023-07-31 21:22:26', 11, 0.75, 'Decks', 3, '{}', '{}', 117, 39),
  (32, 'SingularisArt', '2023-08-01 20:30:30', 58, 1.0, 'Cards', 17, '{}', '{}', 17, 0),
  (33, 'SingularisArt', '2023-08-02 20:28:35', 43, 0.6538, 'Decks', 1, '{}', '{}', 34, 18),
  (34, 'SingularisArt', '2023-08-03 06:52:01', 58, 0.5962, 'Decks', 1, '{}', '{}', 31, 21),
  (35, 'SingularisArt', '2023-08-04 13:52:44', 8, 0.1442, 'Decks', 4, '{}', '{}', 30, 178);
