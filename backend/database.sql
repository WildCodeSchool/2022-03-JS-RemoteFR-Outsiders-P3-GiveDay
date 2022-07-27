-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : srv-captain--mysql-db
-- Généré le : ven. 22 juil. 2022 à 14:07
-- Version du serveur :  5.7.38
-- Version de PHP : 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `giveday`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date` date NOT NULL,
  `texte` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
INSERT INTO `article` VALUES (1,'Découvrons ensemble les lunettes éco-responsables ! ','2021-06-12','C\'est grâce à Carole Riehl, fondatrice de Optic For Good, engagée et passionnée de consommation responsable, que nous avons découvert Green Lunettes au cœur de Lyon !','greenlunettes2.jpg'),(2,'Elles ne produisent pas que du miel… elles préservent la vie ??','2022-06-24',' Einstein disait que si les abeilles venaient à disparaitre, nous n’aurions que 4 années à vivre ! Les abeilles viennent chercher le nectar (un liquide très sucré ?) des fleurs afin de l’emmener dans la ruche et produire ainsi le miel. Elle repart de chaque fleur avec le nectar mais aussi avec du pollen dans leur pattes, qu’elle dépose dans d’autres fleurs pour qu’elles se reproduisent ! Le pollen sert aussi à nourrir les larves avant qu’elles deviennent des abeilles adultes. Plusieurs rôles dans la ruche : Les faux bourdons : ce sont les mâles de la colonie et ils vivent environ 50 jours.  L’abeille et le bourdon sont des insectes très paisibles, ils ne vont piquer que si leur vie est en danger. Paradoxalement, lorsqu’elle pique, l’abeille meurt car son abdomen se décroche avec le dard ?  ','abeille.jpg'),(3,'La naissance d’un 7ème continent au nord du Pacifique ! ??','2022-07-04','Connais-tu le 7ème continent ? ? En s’intéressant de plus près au sujet, on découvre qu’il existe en réalité 2 grandes masses de déchets, une à l’est du Pacifique vers le Japon et l’autre à l’ouest vers les États-Unis. La cause est le mouvement des courants marins dans cette région du globe. On voit sur l’image ci-dessous que les flèches forment des spirales (des gyres pour les plus curieux). Les grands fleuves déversent constamment des déchets humains dans la mer et les gyres regroupent ces déchets au même endroit, ce qui crée 2 agglomérations de plastiques dans le Pacifique. Ensemble, elles forment le 7ème continent…  Si la situation ne s’améliore pas, la fondation Ellen MCArthur estime qu’en 2050, il y aura plus de déchets que de poissons en volume, dans nos océans … Une petite note heureuse pour la fin ! ? ','merPlastique.png'),(4,'Fairphone, le téléphone écolo et design ?!','2022-07-05','Sur le marché depuis 2010, Fairphone  est une entreprise spécialisée dans la conception, fabrication et vente de téléphones mobiles écologiques. Ils vendent également des écouteurs sans fils, des coques de protection et beaucoup d’autres accessoires de téléphonie (chargeurs, câbles, écran de protection, …).Sur le site de Baotou (Chine), la plus grande raffinerie de terres rares au monde rejette des résidus radioactifs dans un lac artificiel adjacent ? L’enjeu se trouve dans la surconsommation. La vie moyenne d’un téléphone se situerait aux alentours de 10 ans, or la majorité en change tous les 2 ans pour un téléphone neuf. Les téléphones ne sont trop souvent pas recyclés ou reconditionnés, même s’ils fonctionnent. Par exemple, seulement 15% de français donnent une deuxième vie à leur téléphone.“Près de 50 millions de tonnes de déchets électroniques sont produits chaque année, soit plus de 6 kilogrammes pour chaque personne sur la planète.” De plus, ces téléphones écolos ont la particularité d’être démontables ! La grande majorité des téléphones d’aujourd’hui ne sont plus réparables soi-même ou facilement car on ne peut plus les démonter, le but étant bien souvent de se rendre à nouveau chez le fabricant. A l’inverse de cette démarche, Fairphone précise bien que les pièces de ses téléphones ne sont pas collées ?Vous êtes convaincu par le téléphone écolo ? Vous y voyez des inconvénients ? Partagez nous votre avis en commentaire, c’est ce qui nous intéresse le plus ?    ','rare_earthenware.jpg'),(9,'Les Outsiders bien sur vos écrans !!','2022-06-13','<p>Le num&eacute;ro 13 va-t-il porter bonheur au MCU ?&nbsp;<a href=\"https://www.premiere.fr/Cinema/News-Cinema/Love--Thunder-reussit-le-meilleur-demarrage-de-tous-les-Thor-au-box-office-US\"><em><strong>Thor : Love &amp; Thunder</strong></em></a>, qui sort ce mercredi en France, sera la 13e production de la phase IV du&nbsp;<strong>Mavel Cinematic Universe</strong>. Depuis janvier 2021, et l\'inauguration de l\'&egrave;re post-<em>Avengers: Endgame</em>&nbsp;par&nbsp;<em>WandaVision</em>, 7 s&eacute;ries ont d&eacute;j&agrave; &eacute;t&eacute; diffus&eacute;es sur Disney + et 5 films Marvel sont d&eacute;j&agrave; sortis dans salles obscures ! Le studio a mis les bouch&eacute;es doubles, en 18 mois. Marvel n\'a jamais &eacute;t&eacute; aussi prolifique. Et le MCU n\'a jamais sembl&eacute; aussi d&eacute;sordonn&eacute; !</p>','https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2022-06/Marvel-et-Disney-scaled.jpeg'),(10,'Les Outsiders de retour !!','2022-06-13','<p>Le num&eacute;ro 13 va-t-il porter bonheur au MCU ?&nbsp;<a href=\"https://www.premiere.fr/Cinema/News-Cinema/Love--Thunder-reussit-le-meilleur-demarrage-de-tous-les-Thor-au-box-office-US\"><em><strong>Thor : Love &amp; Thunder</strong></em></a>, qui sort ce mercredi en France, sera la 13e production de la phase IV du&nbsp;<strong>Mavel Cinematic Universe</strong>. Depuis janvier 2021, et l\'inauguration de l\'&egrave;re post-<em>Avengers: Endgame</em>&nbsp;par&nbsp;<em>WandaVision</em>, 7 s&eacute;ries ont d&eacute;j&agrave; &eacute;t&eacute; diffus&eacute;es sur Disney + et 5 films Marvel sont d&eacute;j&agrave; sortis dans salles obscures ! Le studio a mis les bouch&eacute;es doubles, en 18 mois. Marvel n\'a jamais &eacute;t&eacute; aussi prolifique. Et le MCU n\'a jamais sembl&eacute; aussi d&eacute;sordonn&eacute; !</p>','https://d1fmx1rbmqrxrr.cloudfront.net/cnet/i/edit/2022/05/marvel%20mcu%20phase%204.jpeg'),(15,'Ciel et espace','2022-07-13','<div class=\"article-free-content\">\n<div class=\"article-content__heading\">Apr&egrave;s la r&eacute;v&eacute;lation en avant-premi&egrave;re par le pr&eacute;sident Joe Biden de la toute premi&egrave;re image du Webb, les cinq premiers clich&eacute;s du nouveau t&eacute;lescope spatial ont enfin &eacute;t&eacute; d&eacute;voil&eacute;s. Ils sont &agrave; la hauteur des attentes.</div>\n</div>\n<div class=\"article-content__txt article-paywall-content\">\n<p>&laquo;&nbsp;On l&rsquo;a fait !&nbsp;&raquo; &laquo; Une nouvelle &egrave;re de l&rsquo;astronomie commence &raquo;, &laquo; Les images sont renversantes &raquo; &laquo;&nbsp;C&rsquo;est une journ&eacute;e historique !&nbsp;&raquo; De l&rsquo;administrateur de la Nasa Bill Nelson au prix Nobel de physique John Mather, en passant par le directeur scientifique du JWST, l&rsquo;enthousiasme est palpable lors de la r&eacute;v&eacute;lation des toutes premi&egrave;res images du Webb, ce 12 juillet 2022 &agrave; 16h30 heure de Paris, depuis le centre Goddard de la Nasa (Maryland).</p>\n<p>Les cibles d&eacute;voil&eacute;es ont &eacute;t&eacute; s&eacute;lectionn&eacute;es par la Nasa, mais aussi ses partenaires, les agences spatiales europ&eacute;enne et canadienne. Elles marquent le d&eacute;but officiel des op&eacute;rations scientifiques du James Webb qui doivent durer dix, voire vingt ans. Les voici dans l&rsquo;ordre de leur pr&eacute;sentation.</p>\n</div>','https://passionkoi28.com/img/cms/image-accueil-2.jpg'),(16,'Ciel et espace 2','2022-07-13','<p>&laquo;&nbsp;On l&rsquo;a fait !&nbsp;&raquo; &laquo; Une nouvelle &egrave;re de l&rsquo;astronomie commence &raquo;, &laquo; Les images sont renversantes &raquo; &laquo;&nbsp;C&rsquo;est une journ&eacute;e historique !&nbsp;&raquo; De l&rsquo;administrateur de la Nasa Bill Nelson au prix Nobel de physique John Mather, en passant par le directeur scientifique du JWST, l&rsquo;enthousiasme est palpable lors de la r&eacute;v&eacute;lation des toutes premi&egrave;res images du Webb, ce 12 juillet 2022 &agrave; 16h30 heure de Paris, depuis le centre Goddard de la Nasa (Maryland).</p>\n<p>Les cibles d&eacute;voil&eacute;es ont &eacute;t&eacute; s&eacute;lectionn&eacute;es par la Nasa, mais aussi ses partenaires, les agences spatiales europ&eacute;enne et canadienne. Elles marquent le d&eacute;but officiel des op&eacute;rations scientifiques du James Webb qui doivent durer dix, voire vingt ans. Les voici dans l&rsquo;ordre de leur pr&eacute;sentation.</p>','https://www.cieletespace.fr/media/default/0001/22/WEBB_Carene_1200x700-62cd.jpeg'),(17,'Pizza partie organisée au 31','2022-07-14','<p>La&nbsp;<strong>pizza</strong>&nbsp;est une&nbsp;<a title=\"Recette de cuisine\" href=\"https://fr.wikipedia.org/wiki/Recette_de_cuisine\">recette de cuisine</a>&nbsp;traditionnelle de la&nbsp;<a title=\"Cuisine italienne\" href=\"https://fr.wikipedia.org/wiki/Cuisine_italienne\">cuisine italienne</a>, originaire de&nbsp;<a title=\"Naples\" href=\"https://fr.wikipedia.org/wiki/Naples\">Naples</a>&nbsp;&agrave; base de galette de&nbsp;<a class=\"mw-redirect\" title=\"P&acirc;te &agrave; pain\" href=\"https://fr.wikipedia.org/wiki/P%C3%A2te_%C3%A0_pain\">p&acirc;te &agrave; pain</a>, garnie de divers m&eacute;langes d&rsquo;ingr&eacute;dients (<a title=\"Sauce tomate\" href=\"https://fr.wikipedia.org/wiki/Sauce_tomate\">sauce tomate</a>,&nbsp;<a title=\"Tomate s&eacute;ch&eacute;e\" href=\"https://fr.wikipedia.org/wiki/Tomate_s%C3%A9ch%C3%A9e\">tomates s&eacute;ch&eacute;es</a>,&nbsp;<a title=\"L&eacute;gume\" href=\"https://fr.wikipedia.org/wiki/L%C3%A9gume\">l&eacute;gumes</a>,&nbsp;<a title=\"Fromage\" href=\"https://fr.wikipedia.org/wiki/Fromage\">fromage</a>,&nbsp;<a title=\"Charcuterie\" href=\"https://fr.wikipedia.org/wiki/Charcuterie\">charcuterie</a>,&nbsp;<a title=\"Olive\" href=\"https://fr.wikipedia.org/wiki/Olive\">olives</a>,&nbsp;<a title=\"Huile d\'olive\" href=\"https://fr.wikipedia.org/wiki/Huile_d%27olive\">huile d\'olive</a>&hellip;)<sup id=\"cite_ref-1\" class=\"reference\"><a href=\"https://fr.wikipedia.org/wiki/Pizza#cite_note-1\">1</a></sup>&nbsp;et cuite au&nbsp;<a title=\"Four\" href=\"https://fr.wikipedia.org/wiki/Four\">four</a>. Plat&nbsp;<a class=\"mw-redirect\" title=\"Embl&eacute;matique\" href=\"https://fr.wikipedia.org/wiki/Embl%C3%A9matique\">embl&eacute;matique</a>&nbsp;de la&nbsp;<a class=\"mw-redirect\" title=\"Culture italienne\" href=\"https://fr.wikipedia.org/wiki/Culture_italienne\">culture italienne</a>, et de la&nbsp;<a title=\"Restauration rapide\" href=\"https://fr.wikipedia.org/wiki/Restauration_rapide\">restauration rapide</a>&nbsp;dans le monde entier, elle est d&eacute;clin&eacute;e sous de multiples variantes. &laquo;&nbsp;L\'art de fabriquer des&nbsp;<a title=\"Pizza napoletana\" href=\"https://fr.wikipedia.org/wiki/Pizza_napoletana\">pizzas napolitaines</a>&nbsp;artisanales traditionnelles par les&nbsp;<a title=\"Pizza&iuml;olo\" href=\"https://fr.wikipedia.org/wiki/Pizza%C3%AFolo\">pizza&iuml;olos</a>&nbsp;napolitains&nbsp;&raquo; est inscrit au&nbsp;<a class=\"mw-redirect\" title=\"Patrimoine mondial de l\'UNESCO\" href=\"https://fr.wikipedia.org/wiki/Patrimoine_mondial_de_l%27UNESCO\">Patrimoine mondial de l\'UNESCO</a>&nbsp;depuis 2017.</p>','https://upload.wikimedia.org/wikipedia/commons/c/c8/Pizza_Margherita_stu_spivack.jpg'),(18,'Les outsiders arrivent !!!','2022-07-18','<p>This is the initial content of the editor.</p>','https://passionkoi28.com/img/cms/image-accueil-2.jpg'),(19,'La passion de kois ?','2022-07-18','<p>Venez nombreux aux portes ouvertes...</p>','https://passionkoi28.com/img/cms/image-accueil-2.jpg');
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
CREATE TABLE `tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tag` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
INSERT INTO `tag` VALUES (1,'fête'),(2,'anniversaire'),(3,'enfants'),(4,'ados'),(5,'consommation responsable'),(6,'cadeau'),(7,'santé'),(8,'education'),(9,'environnement'),(10,'animaux');
UNLOCK TABLES;



--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prenom` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `email` varchar(180) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(80) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `codePostal` varchar(255) DEFAULT NULL,
  `pays` varchar(255) DEFAULT NULL,
  `tokenpwd` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--


LOCK TABLES `user` WRITE;
INSERT INTO `user` VALUES (3,'olivier','pochic','olivier@gmail.com','Giveday2022!','user','','','','','',''),(4,'ali','belala','ali@gmail.com','Giveday2022!','user','','','','','',''),(5,'guillaume','calliez','guillaume@gmail.com','Giveday2022!','user','','','','','',''),(6,'val','val','val@gmail.com','$2a$10$IXQ/zWm4pAWhJHzDXTGK/OR9kWcYMEk9Aopem6F6iraqR.NEDTk2i','admin','','','','','',''),(7,'antho','antho','antho@gmail.com','$2a$10$rOMfOWQxLZcK9XJdEMd3m.gCX.3D2zmwbKF6bzgYESWHdAAmzxAJm','admin','','','','','',''),(8,'guigui','guigui','guigui@test.fr','$2a$10$0D6ggEymysk2M4G.fm6IIOJpd1bw57DzIiX7vQrIOL8Zsj87Cupom','admin','','','','','','');
UNLOCK TABLES;

--
-- Table structure for table `asso`
--

DROP TABLE IF EXISTS `asso`;
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `asso`
--

LOCK TABLES `asso` WRITE;
INSERT INTO `asso` VALUES (1,'Ikigaï',NULL,NULL,NULL,NULL,NULL),(2,'Rejoué',NULL,NULL,NULL,NULL,NULL),(3,'Nine Lives',NULL,NULL,NULL,NULL,NULL),(4,'Association Rêves',NULL,NULL,NULL,NULL,NULL);
UNLOCK TABLES;
--
-- Table structure for table `event`
--

DROP TABLE IF EXISTS `event`;
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `event`
--

LOCK TABLES `event` WRITE;
INSERT INTO `event` VALUES (2,'Tom2022','Tom',6,'2022-09-20','14:00','17:00','maison','0585698755','papatom@gmail.com',0,0,3,4),(3,'Tom20221','Tom',6,'2022-09-20','14:00','17:00','maison','0585698755','papatom@gmail.com',0,0,3,8),(4,'Tom20222','Tom',6,'2022-09-20','14:00','17:00','maison','0585698755','papatom@gmail.com',0,0,3,8),(5,'Tom20223','Tom',6,'2022-09-20','14:00','17:00','maison','0585698755','papatom@gmail.com',0,0,3,8);
UNLOCK TABLES;



--
-- Table structure for table `cadeau`
--

DROP TABLE IF EXISTS `cadeau`;
CREATE TABLE `cadeau` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `url_site` longtext,
  `event_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_cadeau_event_idx` (`event_id`),
  CONSTRAINT `fk_cadeau_event` FOREIGN KEY (`event_id`) REFERENCES `event` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 ;

--
-- Dumping data for table `cadeau`
--

LOCK TABLES `cadeau` WRITE;
/*!40000 ALTER TABLE `cadeau` DISABLE KEYS */;
INSERT INTO `cadeau` VALUES (3,'Nintendo switch','https://www.fnac.com/Console-Nintendo-Switch-avec-paire-de-Joy-Con-Rouge-et-Bleu-Neon-V2/a13721295/w-4?esl-k=sem-google%7cnu%7cc588125096280%7cm%7ck1649173706824%7cp%7ct%7cdc%7ca138439419510%7cg16583476065&gclid=CjwKCAjwwo-WBhAMEiwAV4dybVmXAhhWLlEnzasxmj3Chs3YtmIGvSx8JhLfF0LcTc8ABe_v9ZwQORoC6HcQAvD_BwE&gclsrc=aw.ds&Origin=SEA_GOOGLE_PLA_CONSOL',2);
UNLOCK TABLES;


--
-- Table structure for table `article_has_tag`
--

DROP TABLE IF EXISTS `article_has_tag`;
CREATE TABLE `article_has_tag` (
  `article_id` int NOT NULL,
  `tag_id` int NOT NULL,
  PRIMARY KEY (`article_id`,`tag_id`),
  KEY `fk_article_has_tag_tag1_idx` (`tag_id`),
  KEY `fk_article_has_tag_article1_idx` (`article_id`),
  CONSTRAINT `fk_article_has_tag_article1` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE CASCADE,
 CONSTRAINT `fk_article_has_tag_tag1` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `article_has_tag`
--

LOCK TABLES `article_has_tag` WRITE;
INSERT INTO `article_has_tag` VALUES (1,5),(4,5),(3,9),(2,10);
UNLOCK TABLES;




--
-- Table structure for table `user_has_article`
--

DROP TABLE IF EXISTS `user_has_article`;
CREATE TABLE `user_has_article` (
  `user_id` int NOT NULL,
  `article_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`article_id`),
  KEY `fk_user_has_article_article1_idx` (`article_id`),
  KEY `fk_user_has_article_user1_idx` (`user_id`),
  CONSTRAINT `fk_user_has_article_article1` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_user_has_article_user1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_has_article`
--

LOCK TABLES `user_has_article` WRITE;
UNLOCK TABLES;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;