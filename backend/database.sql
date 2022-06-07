-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2
-- http://www.phpmyadmin.net
--
-- Client :  localhost
-- Généré le :  Jeu 26 Octobre 2017 à 13:53
-- Version du serveur :  5.7.19-0ubuntu0.16.04.1
-- Version de PHP :  7.0.22-0ubuntu0.16.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `simple-mvc`
--

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `prenom` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `email` varchar(180) NOT NULL UNIQUE,
  `password` varchar(255) NOT NULL,
  `role` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `evenement` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `code` varchar(255) NOT NULL,
  `theme` varchar(255) NOT NULL,
  `prenom` varchar(180) NOT NULL UNIQUE,
  `age` INT NOT NULL,
  `date_evenement` DATETIME,
  `heure_début`  DATETIME,
  `heure_fin` DATETIME,
  `lieu` varchar(255),
  `telephone` varchar(255),
  `mail` varchar(255) NOT NULL,
  `cadeau` varchar(255) NOT NULL,
  
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `item`
--

INSERT INTO `user` (`prenom`, `nom`,`email`,`password`,`role`) VALUES
("guillaume", "caliez","caliezguillaume@live.fr","guigui0685","admin"),
("toto", "cali","caliezguillaume@gmail.com","guigui0685","user");

--
-- Index pour les tables exportées
--

--
-- Index pour la table `item`
--
-- ALTER TABLE `item`
--   ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables exportées
--

--
-- AUTO_INCREMENT pour la table `item`
--
ALTER TABLE `item`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
