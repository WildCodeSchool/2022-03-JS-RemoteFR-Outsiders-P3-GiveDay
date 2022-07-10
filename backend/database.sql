-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: localhost    Database: giveday_db
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
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article` (
  `id` int NOT NULL,
  `titre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date` date NOT NULL,
  `texte` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'Découvrons ensemble les lunettes éco-responsables ! ','2021-06-12','C\'est grâce à Carole Riehl, fondatrice de Optic For Good, engagée et passionnée de consommation responsable, que nous avons découvert Green Lunettes au cœur de Lyon !','greenlunettes2.jpg'),(2,'Elles ne produisent pas que du miel… elles préservent la vie ??','2022-06-24',' Einstein disait que si les abeilles venaient à disparaitre, nous n’aurions que 4 années à vivre ! Les abeilles viennent chercher le nectar (un liquide très sucré ?) des fleurs afin de l’emmener dans la ruche et produire ainsi le miel. Elle repart de chaque fleur avec le nectar mais aussi avec du pollen dans leur pattes, qu’elle dépose dans d’autres fleurs pour qu’elles se reproduisent ! Le pollen sert aussi à nourrir les larves avant qu’elles deviennent des abeilles adultes. Plusieurs rôles dans la ruche : Les faux bourdons : ce sont les mâles de la colonie et ils vivent environ 50 jours.  L’abeille et le bourdon sont des insectes très paisibles, ils ne vont piquer que si leur vie est en danger. Paradoxalement, lorsqu’elle pique, l’abeille meurt car son abdomen se décroche avec le dard ?  ','abeille.jpg'),(3,'La naissance d’un 7ème continent au nord du Pacifique ! ??','2022-07-04','Connais-tu le 7ème continent ? ? En s’intéressant de plus près au sujet, on découvre qu’il existe en réalité 2 grandes masses de déchets, une à l’est du Pacifique vers le Japon et l’autre à l’ouest vers les États-Unis. La cause est le mouvement des courants marins dans cette région du globe. On voit sur l’image ci-dessous que les flèches forment des spirales (des gyres pour les plus curieux). Les grands fleuves déversent constamment des déchets humains dans la mer et les gyres regroupent ces déchets au même endroit, ce qui crée 2 agglomérations de plastiques dans le Pacifique. Ensemble, elles forment le 7ème continent…  Si la situation ne s’améliore pas, la fondation Ellen MCArthur estime qu’en 2050, il y aura plus de déchets que de poissons en volume, dans nos océans … Une petite note heureuse pour la fin ! ? ','merPlastique.png'),(4,'Fairphone, le téléphone écolo et design ?!','2022-07-05','Sur le marché depuis 2010, Fairphone  est une entreprise spécialisée dans la conception, fabrication et vente de téléphones mobiles écologiques. Ils vendent également des écouteurs sans fils, des coques de protection et beaucoup d’autres accessoires de téléphonie (chargeurs, câbles, écran de protection, …).Sur le site de Baotou (Chine), la plus grande raffinerie de terres rares au monde rejette des résidus radioactifs dans un lac artificiel adjacent ? L’enjeu se trouve dans la surconsommation. La vie moyenne d’un téléphone se situerait aux alentours de 10 ans, or la majorité en change tous les 2 ans pour un téléphone neuf. Les téléphones ne sont trop souvent pas recyclés ou reconditionnés, même s’ils fonctionnent. Par exemple, seulement 15% de français donnent une deuxième vie à leur téléphone.“Près de 50 millions de tonnes de déchets électroniques sont produits chaque année, soit plus de 6 kilogrammes pour chaque personne sur la planète.” De plus, ces téléphones écolos ont la particularité d’être démontables ! La grande majorité des téléphones d’aujourd’hui ne sont plus réparables soi-même ou facilement car on ne peut plus les démonter, le but étant bien souvent de se rendre à nouveau chez le fabricant. A l’inverse de cette démarche, Fairphone précise bien que les pièces de ses téléphones ne sont pas collées ?Vous êtes convaincu par le téléphone écolo ? Vous y voyez des inconvénients ? Partagez nous votre avis en commentaire, c’est ce qui nous intéresse le plus ?    ','rare_earthenware.jpg');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_has_tag`
--

DROP TABLE IF EXISTS `article_has_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `article_has_tag` (
  `article_id` int NOT NULL,
  `tag_id` int NOT NULL,
  PRIMARY KEY (`article_id`,`tag_id`),
  KEY `fk_article_has_tag_tag1_idx` (`tag_id`),
  KEY `fk_article_has_tag_article1_idx` (`article_id`),
  CONSTRAINT `fk_article_has_tag_article1` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`),
  CONSTRAINT `fk_article_has_tag_tag1` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_has_tag`
--

LOCK TABLES `article_has_tag` WRITE;
/*!40000 ALTER TABLE `article_has_tag` DISABLE KEYS */;
INSERT INTO `article_has_tag` VALUES (1,5),(4,5),(3,9),(2,10);
/*!40000 ALTER TABLE `article_has_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asso`
--

DROP TABLE IF EXISTS `asso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asso` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `description` text,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_asso_user_idx` (`user_id`),
  CONSTRAINT `fk_asso_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asso`
--

LOCK TABLES `asso` WRITE;
/*!40000 ALTER TABLE `asso` DISABLE KEYS */;
INSERT INTO `asso` VALUES (1,'pâte blanche',NULL,NULL,NULL,NULL,NULL),(2,'rejoué',NULL,NULL,NULL,NULL,NULL),(3,'onisep',NULL,NULL,NULL,NULL,NULL),(4,'terre de milpa',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `asso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cadeau`
--

DROP TABLE IF EXISTS `cadeau`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cadeau` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `url_site` longtext,
  `event_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cadeau_event_idx` (`event_id`),
  CONSTRAINT `fk_cadeau_event` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cadeau`
--

LOCK TABLES `cadeau` WRITE;
/*!40000 ALTER TABLE `cadeau` DISABLE KEYS */;
INSERT INTO `cadeau` VALUES (3,'Nintendo switch','https://www.fnac.com/Console-Nintendo-Switch-avec-paire-de-Joy-Con-Rouge-et-Bleu-Neon-V2/a13721295/w-4?esl-k=sem-google%7cnu%7cc588125096280%7cm%7ck1649173706824%7cp%7ct%7cdc%7ca138439419510%7cg16583476065&gclid=CjwKCAjwwo-WBhAMEiwAV4dybVmXAhhWLlEnzasxmj3Chs3YtmIGvSx8JhLfF0LcTc8ABe_v9ZwQORoC6HcQAvD_BwE&gclsrc=aw.ds&Origin=SEA_GOOGLE_PLA_CONSOL',2);
/*!40000 ALTER TABLE `cadeau` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `event` (
  `id` int NOT NULL AUTO_INCREMENT,
  `code` varchar(45) NOT NULL,
  `prenom` varchar(45) DEFAULT NULL,
  `age` int DEFAULT NULL,
  `date` varchar(40) DEFAULT NULL,
  `heure_de_debut` varchar(45) DEFAULT NULL,
  `heure_de_fin` varchar(45) DEFAULT NULL,
  `lieu` varchar(255) DEFAULT NULL,
  `telephone` varchar(45) DEFAULT NULL,
  `mail` varchar(45) NOT NULL,
  `cagnotte_don_asso` float DEFAULT '0',
  `cagnotte_somme_cadeau` float DEFAULT '0',
  `asso_id` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code_UNIQUE` (`code`),
  KEY `fk_event_asso1_idx` (`asso_id`),
  KEY `fk_event_user1_idx` (`user_id`),
  CONSTRAINT `fk_event_asso1` FOREIGN KEY (`asso_id`) REFERENCES `asso` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_event_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
/*!40000 ALTER TABLE `event` DISABLE KEYS */;
INSERT INTO `event` VALUES (2,'Tom2022','Tom',6,'2022-09-20','14:00','17:00','maison','0585698755','papatom@gmail.com',0,0,3,4);
/*!40000 ALTER TABLE `event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tag` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (1,'fête'),(2,'anniversaire'),(3,'enfants'),(4,'ados'),(5,'consommation responsable'),(6,'cadeau'),(7,'santé'),(8,'education'),(9,'environnement'),(10,'animaux');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prenom` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `email` varchar(180) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (3,'olivier','pochic','olivier@gmail.com','Giveday2022!','user'),(4,'ali','belala','ali@gmail.com','Giveday2022!','user'),(5,'guillaume','calliez','guillaume@gmail.com','Giveday2022!','user'),(6,'val','val','val@gmail.com','$2a$10$IXQ/zWm4pAWhJHzDXTGK/OR9kWcYMEk9Aopem6F6iraqR.NEDTk2i','user'),(7,'antho','antho','antho@gmail.com','$2a$10$rOMfOWQxLZcK9XJdEMd3m.gCX.3D2zmwbKF6bzgYESWHdAAmzxAJm','user');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_has_article`
--

DROP TABLE IF EXISTS `user_has_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_has_article` (
  `user_id` int NOT NULL,
  `article_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`article_id`),
  KEY `fk_user_has_article_article1_idx` (`article_id`),
  KEY `fk_user_has_article_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_has_article_article1` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_has_article_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_has_article`
--

LOCK TABLES `user_has_article` WRITE;
/*!40000 ALTER TABLE `user_has_article` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_has_article` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-06 14:44:03
