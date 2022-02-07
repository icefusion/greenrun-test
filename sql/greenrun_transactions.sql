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
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `amount` float DEFAULT NULL,
  `category` varchar(20) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `user_bet_id` int DEFAULT NULL,
  `deleted` tinyint DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (1,1,2800,'deposit','active',NULL,0,NULL,NULL,NULL),(2,1,300,'withdraw','active',NULL,0,NULL,NULL,NULL),(3,1,150,'bet','active',NULL,0,NULL,NULL,NULL),(4,1,120,'bet','active',NULL,0,NULL,NULL,NULL),(5,1,130,'bet','active',NULL,0,NULL,NULL,NULL),(6,1,280,'bet','active',NULL,0,NULL,NULL,NULL),(7,1,1800,'winning','active',NULL,0,NULL,NULL,NULL),(8,1,1500,'withdraw','active',NULL,0,NULL,NULL,NULL),(10,2,950,'winning','active',NULL,0,NULL,NULL,NULL),(12,2,2800,'deposit','active',NULL,NULL,'2022-02-07 08:34:49','2022-02-07 08:34:49',NULL),(13,2,300,'withdraw','active',NULL,NULL,'2022-02-07 08:36:24','2022-02-07 08:36:24',NULL),(20,2,450,'bet','active',NULL,NULL,'2022-02-07 10:31:43','2022-02-07 10:31:43',NULL);
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-07 12:13:26
