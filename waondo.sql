-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 23, 2019 at 12:26 PM
-- Server version: 5.7.26-0ubuntu0.16.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `waondo`
--

-- --------------------------------------------------------

--
-- Table structure for table `academic_class_levels`
--

CREATE TABLE `academic_class_levels` (
  `AcademicClassLevelId` int(11) NOT NULL,
  `AcademicClassLevelName` varchar(9000) NOT NULL,
  `HierachyCode` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `actual_terms`
--

CREATE TABLE `actual_terms` (
  `TermId` int(11) NOT NULL,
  `TermIterationId` int(11) DEFAULT NULL,
  `TermStartDate` date NOT NULL,
  `TermEndDate` date NOT NULL,
  `Year` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `actual_terms`
--

INSERT INTO `actual_terms` (`TermId`, `TermIterationId`, `TermStartDate`, `TermEndDate`, `Year`) VALUES
(3, 1, '2018-01-01', '2018-03-31', 2018),
(4, 2, '2018-05-01', '2018-07-31', 2018),
(5, 3, '2018-08-01', '2018-11-30', 2018),
(6, 1, '2019-01-01', '2019-03-31', 2019),
(7, 2, '2019-05-01', '2019-07-31', 2019),
(8, 3, '2019-09-01', '2019-11-30', 2019);

-- --------------------------------------------------------

--
-- Table structure for table `actual_weeks`
--

CREATE TABLE `actual_weeks` (
  `ActualWeekId` int(11) NOT NULL,
  `TermId` int(11) NOT NULL,
  `WeekIterationId` int(11) NOT NULL,
  `WeekStartDate` date NOT NULL,
  `WeekEndDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `actual_weeks`
--

INSERT INTO `actual_weeks` (`ActualWeekId`, `TermId`, `WeekIterationId`, `WeekStartDate`, `WeekEndDate`) VALUES
(1, 6, 1, '2019-01-01', '2019-01-06');

-- --------------------------------------------------------

--
-- Table structure for table `carryforward`
--

CREATE TABLE `carryforward` (
  `CarryFowardId` int(11) NOT NULL,
  `AdmissionNo` varchar(200) NOT NULL,
  `CarryForwardAmount` int(11) NOT NULL,
  `DateCarriedForward` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `ClassId` int(11) NOT NULL,
  `LotId` int(11) NOT NULL,
  `ClassStreamId` int(11) NOT NULL,
  `ClassName` varchar(200) NOT NULL,
  `RegisteredDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `class_streams`
--

CREATE TABLE `class_streams` (
  `ClassStreamId` int(11) NOT NULL,
  `ClassStreamName` varchar(9000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `fee`
--

CREATE TABLE `fee` (
  `FeeId` int(11) NOT NULL,
  `AdmissionNo` varchar(200) NOT NULL,
  `LunchScheme` int(11) DEFAULT '0',
  `PE` int(11) DEFAULT '0',
  `EW` int(11) DEFAULT '0',
  `LT` int(11) DEFAULT '0',
  `RMI` int(11) DEFAULT '0',
  `Administration` int(11) DEFAULT '0',
  `Activity` int(11) DEFAULT '0',
  `Total` int(11) DEFAULT '0',
  `RecentPaidDate` datetime DEFAULT NULL,
  `TermBalance` int(11) DEFAULT '0',
  `AnnualBalance` int(11) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `installments`
--

CREATE TABLE `installments` (
  `InstallmentId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `AdmissionNo` varchar(200) NOT NULL,
  `InstallmentAmount` int(11) NOT NULL,
  `InstallmentDate` datetime NOT NULL,
  `IsCarryForward` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lots`
--

CREATE TABLE `lots` (
  `LotId` int(11) NOT NULL,
  `LotDescriptionId` int(11) NOT NULL,
  `AcademicClassLevelId` int(11) NOT NULL,
  `LotNickName` varchar(9000) NOT NULL,
  `RegisteredDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lot_descriptions`
--

CREATE TABLE `lot_descriptions` (
  `LotDescriptionId` int(11) NOT NULL,
  `LotDescription` varchar(9000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `month`
--

CREATE TABLE `month` (
  `MonthId` int(11) NOT NULL,
  `Month` varchar(200) NOT NULL,
  `Sync` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `month`
--

INSERT INTO `month` (`MonthId`, `Month`, `Sync`) VALUES
(1, 'February', 'Not Synchronised');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `RoleId` int(11) NOT NULL,
  `RoleDescription` varchar(9000) NOT NULL,
  `RoleCode` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `session_logs`
--

CREATE TABLE `session_logs` (
  `SessionLogId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `SessionStartDate` datetime NOT NULL,
  `SessionEndDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `StudentsId` int(11) NOT NULL,
  `AdmissionNo` varchar(200) NOT NULL,
  `StudentName` varchar(200) DEFAULT NULL,
  `StudentGender` varchar(200) DEFAULT NULL,
  `StudentTypeId` int(11) NOT NULL,
  `ClassId` int(11) DEFAULT NULL,
  `AdmissionDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student_types`
--

CREATE TABLE `student_types` (
  `StudentTypeId` int(11) NOT NULL,
  `StudentTypeDescription` varchar(9000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `term_iterations`
--

CREATE TABLE `term_iterations` (
  `TermIterationId` int(11) NOT NULL,
  `TermIterationDescription` varchar(9000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `term_iterations`
--

INSERT INTO `term_iterations` (`TermIterationId`, `TermIterationDescription`) VALUES
(1, 'Term One'),
(2, 'Term Two'),
(3, 'Term Three');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserId` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `EncryptedPassword` varchar(9000) NOT NULL,
  `Salt` varchar(9000) NOT NULL,
  `RegisteredDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`UserId`, `Name`, `Email`, `EncryptedPassword`, `Salt`, `RegisteredDate`) VALUES
(1, 'Silas Onyango', 'silas.onyango93@gmail.com', '69f5a14cf34f7d1115f5a0e9105ea3bbb6bd9eb5c91d956779f196b5d2f4888ff2e62254dacdf6ef33d1a8901f707f8596aa2857c051dee37b01f6607d1b6d93', 'qYwa78nf+CQXFwqpBODff9+lOxTMRQWN7a0HRygETdiRgxlEU/fVLNDscun6ImscMzI531drDbp/+8XPIrLMq9g9sKkBnGlLPLHwFofcFjesRFchZ61Env2SthrJi3Q161ZPQ4ovF0brEZ7iuNCMGMhI2VL7vVRLOxzf0OeynJE=', '2019-03-19 10:14:21');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `UserRoleId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `RoleId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `week_iterations`
--

CREATE TABLE `week_iterations` (
  `WeekIterationId` int(11) NOT NULL,
  `WeekIterationDescription` varchar(9000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `week_iterations`
--

INSERT INTO `week_iterations` (`WeekIterationId`, `WeekIterationDescription`) VALUES
(1, 'Week 1'),
(2, 'Week 2'),
(3, 'Week 3'),
(4, 'Week 4'),
(5, 'Week 5'),
(6, 'Week 6'),
(7, 'Week 7'),
(8, 'Week 8'),
(9, 'Week 9'),
(10, 'Week 10'),
(11, 'Week 11'),
(12, 'Week 12'),
(13, 'Week 13'),
(14, 'Week 14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `academic_class_levels`
--
ALTER TABLE `academic_class_levels`
  ADD PRIMARY KEY (`AcademicClassLevelId`);

--
-- Indexes for table `actual_terms`
--
ALTER TABLE `actual_terms`
  ADD PRIMARY KEY (`TermId`),
  ADD KEY `TermIterationId` (`TermIterationId`);

--
-- Indexes for table `actual_weeks`
--
ALTER TABLE `actual_weeks`
  ADD PRIMARY KEY (`ActualWeekId`),
  ADD KEY `TermId` (`TermId`),
  ADD KEY `WeekIterationId` (`WeekIterationId`);

--
-- Indexes for table `carryforward`
--
ALTER TABLE `carryforward`
  ADD PRIMARY KEY (`CarryFowardId`),
  ADD KEY `AdmissionNo` (`AdmissionNo`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`ClassId`),
  ADD KEY `LotId` (`LotId`),
  ADD KEY `ClassStreamId` (`ClassStreamId`);

--
-- Indexes for table `class_streams`
--
ALTER TABLE `class_streams`
  ADD PRIMARY KEY (`ClassStreamId`);

--
-- Indexes for table `fee`
--
ALTER TABLE `fee`
  ADD PRIMARY KEY (`FeeId`),
  ADD KEY `AdmissionNo` (`AdmissionNo`);

--
-- Indexes for table `installments`
--
ALTER TABLE `installments`
  ADD PRIMARY KEY (`InstallmentId`),
  ADD KEY `AdmissionNo` (`AdmissionNo`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `lots`
--
ALTER TABLE `lots`
  ADD PRIMARY KEY (`LotId`),
  ADD KEY `AcademicClassLevelId` (`AcademicClassLevelId`),
  ADD KEY `LotDescriptionId` (`LotDescriptionId`);

--
-- Indexes for table `lot_descriptions`
--
ALTER TABLE `lot_descriptions`
  ADD PRIMARY KEY (`LotDescriptionId`);

--
-- Indexes for table `month`
--
ALTER TABLE `month`
  ADD PRIMARY KEY (`MonthId`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`RoleId`);

--
-- Indexes for table `session_logs`
--
ALTER TABLE `session_logs`
  ADD PRIMARY KEY (`SessionLogId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`StudentsId`),
  ADD UNIQUE KEY `AdmissionNo` (`AdmissionNo`),
  ADD KEY `ClassId` (`ClassId`),
  ADD KEY `StudentTypeId` (`StudentTypeId`);

--
-- Indexes for table `student_types`
--
ALTER TABLE `student_types`
  ADD PRIMARY KEY (`StudentTypeId`);

--
-- Indexes for table `term_iterations`
--
ALTER TABLE `term_iterations`
  ADD PRIMARY KEY (`TermIterationId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`),
  ADD UNIQUE KEY `email` (`Email`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`UserRoleId`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `RoleId` (`RoleId`);

--
-- Indexes for table `week_iterations`
--
ALTER TABLE `week_iterations`
  ADD PRIMARY KEY (`WeekIterationId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `academic_class_levels`
--
ALTER TABLE `academic_class_levels`
  MODIFY `AcademicClassLevelId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `actual_terms`
--
ALTER TABLE `actual_terms`
  MODIFY `TermId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `actual_weeks`
--
ALTER TABLE `actual_weeks`
  MODIFY `ActualWeekId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `carryforward`
--
ALTER TABLE `carryforward`
  MODIFY `CarryFowardId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `classes`
--
ALTER TABLE `classes`
  MODIFY `ClassId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `class_streams`
--
ALTER TABLE `class_streams`
  MODIFY `ClassStreamId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `fee`
--
ALTER TABLE `fee`
  MODIFY `FeeId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `installments`
--
ALTER TABLE `installments`
  MODIFY `InstallmentId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `lots`
--
ALTER TABLE `lots`
  MODIFY `LotId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `lot_descriptions`
--
ALTER TABLE `lot_descriptions`
  MODIFY `LotDescriptionId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `month`
--
ALTER TABLE `month`
  MODIFY `MonthId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `RoleId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `session_logs`
--
ALTER TABLE `session_logs`
  MODIFY `SessionLogId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `StudentsId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `student_types`
--
ALTER TABLE `student_types`
  MODIFY `StudentTypeId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `term_iterations`
--
ALTER TABLE `term_iterations`
  MODIFY `TermIterationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `UserRoleId` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `week_iterations`
--
ALTER TABLE `week_iterations`
  MODIFY `WeekIterationId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `actual_terms`
--
ALTER TABLE `actual_terms`
  ADD CONSTRAINT `actual_terms_ibfk_1` FOREIGN KEY (`TermIterationId`) REFERENCES `term_iterations` (`TermIterationId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `actual_weeks`
--
ALTER TABLE `actual_weeks`
  ADD CONSTRAINT `actual_weeks_ibfk_1` FOREIGN KEY (`TermId`) REFERENCES `actual_terms` (`TermId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `actual_weeks_ibfk_2` FOREIGN KEY (`WeekIterationId`) REFERENCES `week_iterations` (`WeekIterationId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `carryforward`
--
ALTER TABLE `carryforward`
  ADD CONSTRAINT `carryforward_ibfk_1` FOREIGN KEY (`AdmissionNo`) REFERENCES `students` (`AdmissionNo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `classes`
--
ALTER TABLE `classes`
  ADD CONSTRAINT `classes_ibfk_1` FOREIGN KEY (`LotId`) REFERENCES `lots` (`LotId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `classes_ibfk_2` FOREIGN KEY (`ClassStreamId`) REFERENCES `class_streams` (`ClassStreamId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `fee`
--
ALTER TABLE `fee`
  ADD CONSTRAINT `fee_ibfk_1` FOREIGN KEY (`AdmissionNo`) REFERENCES `students` (`AdmissionNo`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `installments`
--
ALTER TABLE `installments`
  ADD CONSTRAINT `installments_ibfk_1` FOREIGN KEY (`AdmissionNo`) REFERENCES `students` (`AdmissionNo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `installments_ibfk_2` FOREIGN KEY (`AdmissionNo`) REFERENCES `students` (`AdmissionNo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `installments_ibfk_3` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`);

--
-- Constraints for table `lots`
--
ALTER TABLE `lots`
  ADD CONSTRAINT `lots_ibfk_1` FOREIGN KEY (`AcademicClassLevelId`) REFERENCES `academic_class_levels` (`AcademicClassLevelId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lots_ibfk_2` FOREIGN KEY (`LotDescriptionId`) REFERENCES `lot_descriptions` (`LotDescriptionId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `lots_ibfk_3` FOREIGN KEY (`LotDescriptionId`) REFERENCES `lot_descriptions` (`LotDescriptionId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `session_logs`
--
ALTER TABLE `session_logs`
  ADD CONSTRAINT `session_logs_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_ibfk_1` FOREIGN KEY (`ClassId`) REFERENCES `classes` (`ClassId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `students_ibfk_2` FOREIGN KEY (`StudentTypeId`) REFERENCES `student_types` (`StudentTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`RoleId`) REFERENCES `roles` (`RoleId`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
