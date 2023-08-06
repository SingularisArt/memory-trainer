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
  (1, 'SingularisArt', '2023-07-01 04:21:00', 19, 0.4231, 'Decks', 1, '{}', '{}', 22, 30),
  (2, 'SingularisArt', '2023-07-02 14:10:43', 106, 0.3778, 'Cards', 45, '{}', '{}', 17, 28),
  (3, 'SingularisArt', '2023-07-03 20:39:55', 102, 0.84, 'Cards', 50, '{}', '{}', 42, 8),
  (4, 'SingularisArt', '2023-07-04 23:32:39', 59, 0.3269, 'Decks', 2, '{}', '{}', 34, 70),
  (5, 'SingularisArt', '2023-07-05 14:36:13', 86, 0.3782, 'Decks', 3, '{}', '{}', 59, 97),
  (6, 'SingularisArt', '2023-07-06 02:53:13', 42, 0.451, 'Cards', 51, '{}', '{}', 23, 28),
  (7, 'SingularisArt', '2023-07-07 22:47:00', 55, 0.875, 'Cards', 48, '{}', '{}', 42, 6),
  (8, 'SingularisArt', '2023-07-08 15:47:06', 92, 0.8947, 'Cards', 38, '{}', '{}', 34, 4),
  (9, 'SingularisArt', '2023-07-09 14:06:04', 6, 0.14, 'Cards', 50, '{}', '{}', 7, 43),
  (10, 'SingularisArt', '2023-07-10 00:48:58', 44, 0.125, 'Cards', 16, '{}', '{}', 2, 14),
  (11, 'SingularisArt', '2023-07-11 03:12:39', 69, 0.2596, 'Decks', 2, '{}', '{}', 27, 77),
  (12, 'SingularisArt', '2023-07-12 12:30:33', 74, 0.2424, 'Cards', 33, '{}', '{}', 8, 25),
  (13, 'SingularisArt', '2023-07-13 12:40:23', 23, 0.0769, 'Decks', 1, '{}', '{}', 4, 48),
  (14, 'SingularisArt', '2023-07-14 08:54:00', 40, 0.2, 'Cards', 40, '{}', '{}', 8, 32),
  (15, 'SingularisArt', '2023-07-15 01:27:43', 88, 0.1859, 'Decks', 3, '{}', '{}', 29, 127),
  (16, 'SingularisArt', '2023-07-16 12:17:33', 78, 0.5385, 'Decks', 2, '{}', '{}', 56, 48),
  (17, 'SingularisArt', '2023-07-17 07:16:26', 7, 0.75, 'Decks', 3, '{}', '{}', 117, 39),
  (18, 'SingularisArt', '2023-07-18 05:31:16', 29, 0.4211, 'Cards', 19, '{}', '{}', 8, 11),
  (19, 'SingularisArt', '2023-07-19 07:14:38', 51, 0.7917, 'Cards', 24, '{}', '{}', 19, 5),
  (20, 'SingularisArt', '2023-07-20 09:41:47', 119, 0.125, 'Decks', 2, '{}', '{}', 13, 91),
  (21, 'SingularisArt', '2023-07-21 22:30:30', 12, 0.1667, 'Cards', 42, '{}', '{}', 7, 35),
  (22, 'SingularisArt', '2023-07-22 13:20:46', 54, 1.0, 'Cards', 16, '{}', '{}', 16, 0),
  (23, 'SingularisArt', '2023-07-23 21:54:55', 11, 0.8378, 'Cards', 37, '{}', '{}', 31, 6),
  (24, 'SingularisArt', '2023-07-24 23:26:57', 53, 0.125, 'Decks', 2, '{}', '{}', 13, 91),
  (25, 'SingularisArt', '2023-07-25 21:18:16', 67, 0.8365, 'Decks', 2, '{}', '{}', 87, 17),
  (26, 'SingularisArt', '2023-07-26 13:23:47', 47, 0.6346, 'Decks', 2, '{}', '{}', 66, 38),
  (27, 'SingularisArt', '2023-07-27 18:43:39', 34, 0.4423, 'Decks', 2, '{}', '{}', 46, 58),
  (28, 'SingularisArt', '2023-07-28 14:22:45', 18, 0.1667, 'Cards', 6, '{}', '{}', 1, 5),
  (29, 'SingularisArt', '2023-07-29 15:27:32', 52, 0.4103, 'Decks', 3, '{}', '{}', 64, 92),
  (30, 'SingularisArt', '2023-07-30 06:45:29', 69, 0.7115, 'Decks', 1, '{}', '{}', 37, 15),
  (31, 'SingularisArt', '2023-07-31 21:20:29', 76, 0.1224, 'Cards', 49, '{}', '{}', 6, 43),
  (32, 'SingularisArt', '2023-08-01 08:51:20', 29, 0.2045, 'Cards', 44, '{}', '{}', 9, 35),
  (33, 'SingularisArt', '2023-08-02 00:50:35', 115, 0.125, 'Decks', 2, '{}', '{}', 13, 91),
  (34, 'SingularisArt', '2023-08-03 04:58:23', 30, 0.9444, 'Cards', 18, '{}', '{}', 17, 1),
  (35, 'SingularisArt', '2023-08-04 14:55:33', 30, 0.75, 'Cards', 16, '{}', '{}', 12, 4);
