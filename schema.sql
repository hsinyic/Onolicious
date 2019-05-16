-- mysql -u root < schema.sql
-- http://filldb.info/

DROP DATABASE IF EXISTS photosdb;
CREATE DATABASE photosdb;
USE photosdb;

DROP TABLE IF EXISTS `photos`;
CREATE TABLE `photos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `restaurant` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `timestamp` date NOT NULL,
  `unrelated_report` int(11) DEFAULT NULL,
  `inappropriate_report` int(11) DEFAULT NULL,
  `dislike` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (1, 'Rempel Group', 'http://lorempixel.com/640/480/', '1977-02-12', 6, 3, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (2, 'Wolf, Price and Swaniawski', 'http://lorempixel.com/640/480/', '2005-07-17', 4, 3, 1);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (3, 'Hills Inc', 'http://lorempixel.com/640/480/', '1978-12-04', 8, 9, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (4, 'Towne, Robel and Lueilwitz', 'http://lorempixel.com/640/480/', '1978-04-14', 6, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (5, 'Labadie Group', 'http://lorempixel.com/640/480/', '1996-10-15', 2, 0, 1);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (6, 'Beer-Franecki', 'http://lorempixel.com/640/480/', '2009-10-14', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (7, 'Will Inc', 'http://lorempixel.com/640/480/', '1996-05-10', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (8, 'Quigley, Lockman and Cremin', 'http://lorempixel.com/640/480/', '2002-02-08', 0, 5, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (9, 'Koepp-Emmerich', 'http://lorempixel.com/640/480/', '1982-05-06', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (10, 'Feeney, Heathcote and Turcotte', 'http://lorempixel.com/640/480/', '2018-10-18', 0, 4, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (11, 'Auer Ltd', 'http://lorempixel.com/640/480/', '1972-11-16', 8, 1, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (12, 'Lebsack-Ruecker', 'http://lorempixel.com/640/480/', '2006-05-06', 7, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (13, 'Becker-Turcotte', 'http://lorempixel.com/640/480/', '2004-05-04', 5, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (14, 'Bogan-Grimes', 'http://lorempixel.com/640/480/', '1979-09-06', 3, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (15, 'Bednar, Nolan and Fritsch', 'http://lorempixel.com/640/480/', '1987-04-11', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (16, 'Monahan, Lind and Mosciski', 'http://lorempixel.com/640/480/', '2002-10-23', 6, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (17, 'Olson-Franecki', 'http://lorempixel.com/640/480/', '1999-03-03', 0, 5, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (18, 'Smith-Welch', 'http://lorempixel.com/640/480/', '1983-01-12', 0, 9, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (19, 'Koch Inc', 'http://lorempixel.com/640/480/', '1993-12-03', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (20, 'Mayert, Kulas and Langworth', 'http://lorempixel.com/640/480/', '1987-03-18', 0, 7, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (21, 'Terry Group', 'http://lorempixel.com/640/480/', '2010-12-07', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (22, 'Auer-McClure', 'http://lorempixel.com/640/480/', '1988-05-03', 1, 9, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (23, 'Lang Ltd', 'http://lorempixel.com/640/480/', '1974-05-23', 3, 4, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (24, 'Jakubowski, Zieme and Lind', 'http://lorempixel.com/640/480/', '2019-02-20', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (25, 'Murazik, Kulas and Bradtke', 'http://lorempixel.com/640/480/', '1998-03-03', 2, 3, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (26, 'Crooks Inc', 'http://lorempixel.com/640/480/', '1990-07-08', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (27, 'Stokes-Wolff', 'http://lorempixel.com/640/480/', '2016-01-11', 1, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (28, 'Douglas, Pagac and Mayer', 'http://lorempixel.com/640/480/', '1989-06-05', 3, 6, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (29, 'Kunze Group', 'http://lorempixel.com/640/480/', '1992-04-10', 0, 5, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (30, 'Effertz Ltd', 'http://lorempixel.com/640/480/', '1970-08-01', 0, 6, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (31, 'Russel-Beahan', 'http://lorempixel.com/640/480/', '1989-01-29', 2, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (32, 'Kub PLC', 'http://lorempixel.com/640/480/', '1975-03-29', 8, 2, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (33, 'Becker, Friesen and Ledner', 'http://lorempixel.com/640/480/', '2013-02-26', 0, 2, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (34, 'Rogahn-Murazik', 'http://lorempixel.com/640/480/', '1995-12-31', 9, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (35, 'Ebert-Morissette', 'http://lorempixel.com/640/480/', '2001-05-21', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (36, 'Gerlach, McCullough and Hammes', 'http://lorempixel.com/640/480/', '1998-02-18', 0, 8, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (37, 'Stokes, Stoltenberg and Deckow', 'http://lorempixel.com/640/480/', '2017-06-19', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (38, 'Sporer, Von and Torp', 'http://lorempixel.com/640/480/', '1989-01-14', 2, 8, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (39, 'Osinski, Hand and Abbott', 'http://lorempixel.com/640/480/', '1981-03-21', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (40, 'McKenzie, Shields and Spinka', 'http://lorempixel.com/640/480/', '2005-04-13', 7, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (41, 'Dach Ltd', 'http://lorempixel.com/640/480/', '2010-03-02', 0, 5, 1);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (42, 'Stracke-Mohr', 'http://lorempixel.com/640/480/', '1990-02-25', 5, 5, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (43, 'Douglas Inc', 'http://lorempixel.com/640/480/', '2013-03-15', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (44, 'Schiller-Hammes', 'http://lorempixel.com/640/480/', '2003-01-18', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (45, 'Gaylord, OHara and Klocko', 'http://lorempixel.com/640/480/', '2006-11-27', 0, 9, 1);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (46, 'Hartmann and Sons', 'http://lorempixel.com/640/480/', '1993-06-22', 6, 1, 1);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (47, 'Hickle, Flatley and Dare', 'http://lorempixel.com/640/480/', '1986-07-02', 2, 9, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (48, 'Kautzer Ltd', 'http://lorempixel.com/640/480/', '1986-09-09', 1, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (49, 'Yost Group', 'http://lorempixel.com/640/480/', '2003-06-19', 0, 7, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (50, 'Morissette-Hintz', 'http://lorempixel.com/640/480/', '2011-08-19', 3, 6, 1);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (51, 'Bednar-Rolfson', 'http://lorempixel.com/640/480/', '1980-08-28', 4, 5, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (52, 'Brekke-Fritsch', 'http://lorempixel.com/640/480/', '2010-08-07', 2, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (53, 'Sipes PLC', 'http://lorempixel.com/640/480/', '2006-03-22', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (54, 'Kertzmann-Kling', 'http://lorempixel.com/640/480/', '1985-04-24', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (55, 'Fritsch-Franecki', 'http://lorempixel.com/640/480/', '1977-10-28', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (56, 'Smitham, Renner and Frami', 'http://lorempixel.com/640/480/', '1972-09-30', 7, 2, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (57, 'Cartwright Group', 'http://lorempixel.com/640/480/', '1993-12-08', 0, 8, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (58, 'Brown, Marks and Koelpin', 'http://lorempixel.com/640/480/', '1991-05-12', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (59, 'Klein Inc', 'http://lorempixel.com/640/480/', '1997-04-09', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (60, 'Hammes PLC', 'http://lorempixel.com/640/480/', '1987-11-07', 0, 2, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (61, 'Ritchie PLC', 'http://lorempixel.com/640/480/', '2008-07-25', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (62, 'Christiansen, Keebler and Sipes', 'http://lorempixel.com/640/480/', '1985-04-13', 6, 0, 1);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (63, 'Klocko, Zulauf and Bayer', 'http://lorempixel.com/640/480/', '1988-02-13', 0, 2, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (64, 'Streich, Hudson and Ledner', 'http://lorempixel.com/640/480/', '1982-02-23', 5, 5, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (65, 'Lebsack and Sons', 'http://lorempixel.com/640/480/', '1992-02-17', 1, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (66, 'Rolfson, Emmerich and Gislason', 'http://lorempixel.com/640/480/', '2013-08-19', 3, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (67, 'Weimann-Cronin', 'http://lorempixel.com/640/480/', '1990-11-07', 0, 0, 1);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (68, 'Luettgen and Sons', 'http://lorempixel.com/640/480/', '1998-06-17', 1, 3, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (69, 'Legros-Daugherty', 'http://lorempixel.com/640/480/', '2015-03-04', 9, 6, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (70, 'Bruen-Pagac', 'http://lorempixel.com/640/480/', '1989-03-06', 0, 6, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (71, 'Braun-Sanford', 'http://lorempixel.com/640/480/', '1983-11-27', 8, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (72, 'Nikolaus, Mann and Jakubowski', 'http://lorempixel.com/640/480/', '1974-10-05', 0, 3, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (73, 'Heidenreich, Gislason and Orn', 'http://lorempixel.com/640/480/', '1998-09-15', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (74, 'Hodkiewicz-Bashirian', 'http://lorempixel.com/640/480/', '2008-10-04', 0, 5, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (75, 'Koch LLC', 'http://lorempixel.com/640/480/', '1974-08-03', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (76, 'Kunze Group', 'http://lorempixel.com/640/480/', '1979-07-10', 6, 3, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (77, 'Effertz-Gleichner', 'http://lorempixel.com/640/480/', '2002-03-09', 8, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (78, 'Prosacco, Thiel and Bailey', 'http://lorempixel.com/640/480/', '2001-02-23', 0, 6, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (79, 'Jacobs, Thompson and Bashirian', 'http://lorempixel.com/640/480/', '1997-08-19', 4, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (80, 'Hermiston and Sons', 'http://lorempixel.com/640/480/', '1989-06-20', 0, 3, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (81, 'Dicki, Huels and Baumbach', 'http://lorempixel.com/640/480/', '1978-05-01', 0, 3, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (82, 'Reynolds, Quitzon and Reilly', 'http://lorempixel.com/640/480/', '1980-12-16', 0, 6, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (83, 'Champlin Ltd', 'http://lorempixel.com/640/480/', '1993-01-08', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (84, 'Botsford, Beatty and Walter', 'http://lorempixel.com/640/480/', '1985-05-25', 7, 4, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (85, 'Lehner PLC', 'http://lorempixel.com/640/480/', '2013-08-25', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (86, 'Blick Group', 'http://lorempixel.com/640/480/', '2017-09-04', 7, 8, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (87, 'Reichert, Jaskolski and Nitzsche', 'http://lorempixel.com/640/480/', '1990-12-05', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (88, 'Murazik-Osinski', 'http://lorempixel.com/640/480/', '2002-12-02', 0, 3, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (89, 'Zemlak Group', 'http://lorempixel.com/640/480/', '2001-04-24', 0, 7, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (90, 'Waters-Keebler', 'http://lorempixel.com/640/480/', '1972-04-13', 4, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (91, 'Satterfield, Cronin and Fadel', 'http://lorempixel.com/640/480/', '1988-02-04', 0, 4, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (92, 'Berge-Hahn', 'http://lorempixel.com/640/480/', '1979-01-02', 1, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (93, 'Boyer-Zemlak', 'http://lorempixel.com/640/480/', '1986-12-31', 6, 9, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (94, 'Aufderhar, Jones and Bode', 'http://lorempixel.com/640/480/', '1976-03-22', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (95, 'Lubowitz PLC', 'http://lorempixel.com/640/480/', '2006-05-09', 0, 7, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (96, 'Walter, Nader and Mitchell', 'http://lorempixel.com/640/480/', '2011-03-02', 7, 6, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (97, 'Rohan-Wilderman', 'http://lorempixel.com/640/480/', '2012-07-01', 0, 9, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (98, 'Zboncak, Auer and Orn', 'http://lorempixel.com/640/480/', '1979-04-02', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (99, 'Johnson-Walker', 'http://lorempixel.com/640/480/', '1980-10-29', 0, 0, 0);
INSERT INTO `photos` (`id`, `restaurant`, `url`, `timestamp`, `unrelated_report`, `inappropriate_report`, `dislike`) VALUES (100, 'Bechtelar and Sons', 'http://lorempixel.com/640/480/', '2016-01-05', 0, 6, 0);