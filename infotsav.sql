-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 16, 2019 at 08:09 AM
-- Server version: 5.7.25
-- PHP Version: 7.1.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `infotsav`
--

-- --------------------------------------------------------

--
-- Table structure for table `credentials`
--

CREATE TABLE `credentials` (
  `email` varchar(40) NOT NULL,
  `password` varchar(130) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `easter`
--

CREATE TABLE `easter` (
  `egg` varchar(40) NOT NULL,
  `score` int(11) NOT NULL DEFAULT '500'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `easter`
--

INSERT INTO `easter` (`egg`, `score`) VALUES
('16-12-1991', 730),
('16/12/1991', 610),
('404', 360),
('chumbaksajiyamera', 180),
('code', 200),
('dolittlepeopleevenmatter?', 350),
('excelsior', 680),
('eyeofagamotto', 200),
('fuck', 69),
('iamalsocalledwheels', 180),
('iamamerican', 60),
('iamthebillionaireplayboy', 510),
('jarviswhereismyunderwear', 190),
('khujatehaikhanjarse', 180),
('lostisreallylost', 260),
('mavimc', 570),
('ohmyheavens!', 190),
('shakespeareinthepark', 100),
('spidermantunechurayameredilkachain', 170),
('sunisgettingreallow', 180),
('thelokiclick', 190),
('theobviousone', 170),
('theponderegg', 110),
('this is not an easter egg', 180),
('xxxmen', 170),
('yougotagoodtaste', 180);

-- --------------------------------------------------------

--
-- Table structure for table `easter_redeem`
--

CREATE TABLE `easter_redeem` (
  `ifid` varchar(13) NOT NULL,
  `egg` varchar(40) NOT NULL,
  `score` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `eid` int(3) NOT NULL,
  `ename` varchar(40) NOT NULL,
  `max_members` int(2) NOT NULL DEFAULT '1',
  `fee` float NOT NULL,
  `category` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`eid`, `ename`, `max_members`, `fee`, `category`) VALUES
(0, 'Trovetrace', 1, 0, 'online'),
(1, 'Job Bureau', 1, 0, 'online'),
(2, 'Musically', 1, 0, 'online'),
(3, 'Boomerang', 1, 0, 'online'),
(4, 'Pranksters', 1, 0, 'online'),
(5, 'Fill in the Memes', 1, 0, 'online'),
(6, 'Poster Making', 1, 0, 'online'),
(7, 'Photography Contest', 1, 0, 'online'),
(8, 'Aptitude Quiz', 2, 100, 'onsite'),
(9, 'MARVELlous CINEphilia', 2, 100, 'onsite'),
(10, 'BIT Quiz', 2, 100, 'onsite'),
(11, 'Programming Quiz', 2, 100, 'onsite'),
(12, 'Treasure Hunt', 5, 100, 'onsite'),
(13, 'Hackin\'City', 3, 450, 'technical'),
(14, 'Techathlon', 3, 200, 'technical'),
(15, 'Code Shuffle', 2, 100, 'technical'),
(16, 'Code Rush', 1, 100, 'technical'),
(17, 'School Olympiad', 1, 100, 'school'),
(18, 'Innovate the Good', 1, 100, 'school'),
(19, 'Whizz Troop', 4, 200, 'school'),
(20, 'Jobs', 1, 100, 'managerial'),
(21, 'Pinnacle', 3, 200, 'managerial'),
(22, 'Corporate Crisis', 3, 100, 'managerial'),
(23, 'IPL Auction', 3, 150, 'managerial'),
(24, 'Brandsome', 4, 100, 'managerial'),
(25, 'Sameeksha', 2, 100, 'managerial'),
(26, 'FIFA', 1, 100, 'gamiacs'),
(27, 'Counter Strike Global Offensive', 5, 250, 'gamiacs'),
(28, 'Player Unknown\'s Battle Ground', 4, 100, 'gamiacs'),
(29, 'Blazing Wheel', 4, 200, 'robotics'),
(30, 'Mini Robo War', 4, 200, 'robotics'),
(31, 'Mega Robo War', 4, 300, 'robotics'),
(32, 'Drone Shot', 4, 200, 'robotics'),
(33, 'Course Chaser', 4, 200, 'robotics'),
(34, 'Robo Soccer', 4, 200, 'robotics');

-- --------------------------------------------------------

--
-- Table structure for table `event_admin`
--

CREATE TABLE `event_admin` (
  `eid` int(11) NOT NULL,
  `tokenid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event_admin`
--

INSERT INTO `event_admin` (`eid`, `tokenid`) VALUES
(18, 139945),
(17, 141924),
(8, 145963),
(32, 164892),
(7, 204771),
(27, 206965),
(15, 230769),
(16, 261573),
(30, 296270),
(22, 309725),
(5, 341186),
(23, 345096),
(10, 351407),
(29, 429425),
(34, 440362),
(24, 461248),
(31, 469581),
(33, 477761),
(19, 592878),
(12, 607490),
(25, 607923),
(0, 651838),
(21, 664053),
(13, 677606),
(2, 696658),
(1, 703550),
(20, 749526),
(28, 753925),
(26, 760466),
(6, 909260),
(4, 921284),
(11, 927719),
(3, 970858),
(9, 990984),
(14, 997218);

-- --------------------------------------------------------

--
-- Table structure for table `event_reg`
--

CREATE TABLE `event_reg` (
  `ifid` varchar(9) NOT NULL,
  `eid` int(3) NOT NULL,
  `teamid` varchar(15) NOT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lost`
--

CREATE TABLE `lost` (
  `user` varchar(20) NOT NULL,
  `count` int(11) NOT NULL DEFAULT '5'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lost`
--

INSERT INTO `lost` (`user`, `count`) VALUES
('Chopra', 229),
('Kunji', 288),
('Mavi', 301),
('Sharma', 248);

-- --------------------------------------------------------

--
-- Table structure for table `pass_reset`
--

CREATE TABLE `pass_reset` (
  `email` varchar(40) NOT NULL,
  `hash` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `teamid` varchar(15) NOT NULL,
  `status` int(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `paytm`
--

CREATE TABLE `paytm` (
  `orderid` varchar(50) NOT NULL,
  `custid` varchar(64) NOT NULL,
  `teamid` varchar(15) NOT NULL,
  `txnid` varchar(64) NOT NULL DEFAULT '0',
  `fee` float NOT NULL,
  `status` varchar(12) NOT NULL DEFAULT 'WAITING',
  `txndate` varchar(26) NOT NULL,
  `checksum` varchar(150) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `ifid` varchar(9) NOT NULL,
  `name` varchar(60) NOT NULL,
  `gender` varchar(10) NOT NULL,
  `college` varchar(150) NOT NULL,
  `city` varchar(40) NOT NULL,
  `email` varchar(40) NOT NULL,
  `mobile` bigint(13) NOT NULL,
  `confirm` int(1) NOT NULL DEFAULT '0',
  `timest` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `verify`
--

CREATE TABLE `verify` (
  `email` varchar(40) NOT NULL,
  `hash` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `credentials`
--
ALTER TABLE `credentials`
  ADD PRIMARY KEY (`email`),
  ADD KEY `email` (`email`);

--
-- Indexes for table `easter`
--
ALTER TABLE `easter`
  ADD PRIMARY KEY (`egg`),
  ADD KEY `egg` (`egg`);

--
-- Indexes for table `easter_redeem`
--
ALTER TABLE `easter_redeem`
  ADD UNIQUE KEY `ifid` (`ifid`,`egg`),
  ADD KEY `ifid_2` (`ifid`,`egg`),
  ADD KEY `ifid_3` (`ifid`),
  ADD KEY `egg` (`egg`),
  ADD KEY `ifid_4` (`ifid`,`egg`,`score`),
  ADD KEY `ifid_5` (`ifid`,`egg`),
  ADD KEY `ifid_6` (`ifid`),
  ADD KEY `egg_2` (`egg`),
  ADD KEY `ifid_7` (`ifid`,`score`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`eid`);

--
-- Indexes for table `event_admin`
--
ALTER TABLE `event_admin`
  ADD PRIMARY KEY (`tokenid`);

--
-- Indexes for table `event_reg`
--
ALTER TABLE `event_reg`
  ADD PRIMARY KEY (`ifid`,`eid`),
  ADD KEY `teamid` (`teamid`),
  ADD KEY `ifid` (`ifid`),
  ADD KEY `eid` (`eid`),
  ADD KEY `ifid_2` (`ifid`,`eid`),
  ADD KEY `eid_2` (`eid`,`teamid`),
  ADD KEY `time` (`time`);

--
-- Indexes for table `lost`
--
ALTER TABLE `lost`
  ADD PRIMARY KEY (`user`);

--
-- Indexes for table `pass_reset`
--
ALTER TABLE `pass_reset`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `phash` (`hash`),
  ADD KEY `email` (`email`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`teamid`),
  ADD KEY `teamid` (`teamid`);

--
-- Indexes for table `paytm`
--
ALTER TABLE `paytm`
  ADD PRIMARY KEY (`orderid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `id` (`ifid`),
  ADD KEY `ifid` (`ifid`),
  ADD KEY `email` (`email`);

--
-- Indexes for table `verify`
--
ALTER TABLE `verify`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `hash` (`hash`),
  ADD KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `eid` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
