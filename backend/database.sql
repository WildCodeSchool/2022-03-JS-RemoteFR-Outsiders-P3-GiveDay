-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: giveday
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `asso`
--

DROP TABLE IF EXISTS `asso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asso` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `logo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `user_asso_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`user_asso_id`),
  CONSTRAINT `user_asso_id` FOREIGN KEY (`user_asso_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asso`
--

LOCK TABLES `asso` WRITE;
/*!40000 ALTER TABLE `asso` DISABLE KEYS */;
INSERT INTO `asso` VALUES (1,'les clown','test','test','test','testtttt',1);
/*!40000 ALTER TABLE `asso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadeau`
--

DROP TABLE IF EXISTS `cadeau`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cadeau` (
  `id_cadeau` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `url_site` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `event_id` int NOT NULL,
  PRIMARY KEY (`id_cadeau`),
  KEY `event_id_idx` (`event_id`),
  CONSTRAINT `event_id` FOREIGN KEY (`event_id`) REFERENCES `event` (`idevenement`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadeau`
--

LOCK TABLES `cadeau` WRITE;
/*!40000 ALTER TABLE `cadeau` DISABLE KEYS */;
INSERT INTO `cadeau` VALUES (1,'pc gamer','http//test',1);
/*!40000 ALTER TABLE `cadeau` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `idevenement` int NOT NULL AUTO_INCREMENT,
  `code` varchar(45) NOT NULL,
  `prenom` varchar(45) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `date` varchar(40) DEFAULT NULL,
  `heure_de_debut` varchar(45) DEFAULT NULL,
  `heure_de_fin` varchar(45) DEFAULT NULL,
  `lieu` varchar(255) DEFAULT NULL,
  `telephone` varchar(45) DEFAULT NULL,
  `mail` varchar(45) NOT NULL,
  `asso_event_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`idevenement`),
  UNIQUE KEY `code_UNIQUE` (`code`),
  KEY `user_id_idx` (`user_id`),
  KEY `asso_event_id_idx` (`asso_event_id`),
  CONSTRAINT `asso_event_id` FOREIGN KEY (`asso_event_id`) REFERENCES `asso` (`id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (1,'20220125guigui','guigui',37,'30 septembre','20h00','3h00','dernière rue a droite Arcachon','06245456','test@test.fr',1,1),(2,'20220125guiguitestpost','guigui2',372,'30 aout','20h00','3h00','dernière rue a droite Bordeaux','0624545446','test2@test2.fr',1,1),(3,'1','guiguiguipost',37,'2018-07-22','15:00','17:00','bordeaux','06 24 65 28 27','test@testpostfront.fr',1,1),(5,'2','guiguipost2',300,'',NULL,NULL,'gsfgsdfgdf','06 10 10 10 10','test3@test3.fr',1,1),(6,'2000','guiguipost3',37,'2018-07-21',NULL,NULL,'dfsdfsdf','06 10 10 10 10','test3@test3.fr',1,1),(8,'2100','guiguipost4',300,'2018-07-21','14:00',NULL,'hfghfgh','06 10 10 10 10','test3@test4.fr',1,1),(9,'2140','guiguipost5',200,'','15:00','17:00','tyrtyrt','06 10 10 10 10','test5@test5.fr',1,1),(10,'2450','guiguipost5',200,'','15:00','17:00','tyrtyrt','06 10 10 10 10','test5@test5.fr',1,1),(12,'24504444','guiguipost5',200,'11/01/15','15:00','17:00','tyrtyrt','06 10 10 10 10','test5@test5.fr',1,1);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prenom` varchar(255) CHARACTER SET latin1 NOT NULL,
  `nom` varchar(255) CHARACTER SET latin1 NOT NULL,
  `email` varchar(180) CHARACTER SET latin1 NOT NULL,
  `password` varchar(255) CHARACTER SET latin1 NOT NULL,
  `role` varchar(80) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'guillaume','caliez','caliezguillaume@live.fr','guigui0685','admin'),(2,'toto','cali','caliezguillaume@gmail.com','guigui0685','user'),(3,'blalbla','bla','caliezguillaume@livedd.fr','$2a$10$VwFt3N6bRSRGAUwSW3lFV.oJ5JwvaxhhGDT0DVp0DtjpazQ3ufMDG','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-21 17:07:18
