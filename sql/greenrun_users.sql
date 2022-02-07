-- MySQL dump 10.13  Distrib 8.0.28, for Linux (x86_64)
--
-- Host: ec2-54-94-66-107.sa-east-1.compute.amazonaws.com    Database: greenrun
-- ------------------------------------------------------
-- Server version	8.0.28-0ubuntu0.20.04.3

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` varchar(45) DEFAULT NULL,
  `first_name` varchar(200) NOT NULL,
  `last_name` varchar(200) NOT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `email` varchar(500) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `birthdate` datetime DEFAULT NULL,
  `country_id` varchar(45) DEFAULT NULL,
  `city` varchar(350) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `document_id` varchar(50) DEFAULT NULL,
  `user_state` varchar(100) DEFAULT NULL,
  `deleted` tinyint DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'will','$2a$10$TRgjyY3rHrvwoKyTH674UerYkQ/b8EAwhQ89OeWXPaxj/Zes9C0Dq','admin','Willians Cesar','Franco Ribeiro','+55 (15) 99667-7075','contato@williansfranco.dev','Rua Ricardo Marcos de Madureira Moreira, 199','male','1980-08-03 00:00:00','1','Sorocaba',2,'121.123.123-23','active',0,'2022-01-31 00:00:00','2022-01-31 00:00:00','2022-01-31 00:00:00'),(2,'icefusion','$2a$10$TRgjyY3rHrvwoKyTH674UerYkQ/b8EAwhQ89OeWXPaxj/Zes9C0Dq','user','Will Ice','Fusion','+55 (11) 99887-7777','icefusion@icefusion.com.br','Rua Icefusion 100','male','1985-01-01 00:00:00','1','São Paulo',2,'111.111.111-11','active',0,'2022-01-31 00:00:00','2022-01-31 00:00:00','2022-01-31 00:00:00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-07 12:13:27
