# Rapport : Projet mcp-demo-spring-python avec Pr.Mohammed Youssfi

Le projet mcp-demo-spring-python est une application multi-modules conçue pour démontrer l'intégration harmonieuse entre Spring Boot (Java) et Python dans un contexte de microservices. Il combine :
 - Un backend Spring (mcp-client) pour la gestion de l'agent IA.
 - Un backend Spring (mcp-server) avec outils financiers
 - Un serveur Python (python-mcp-server) pour des fonctionnalités complémentaires
 - Un frontend léger (HTML/JS)
Utilisation d'Ollama avec Llama3.1 pour l'IA
 - Démontrer l'interopérabilité Spring/Python
 - Centraliser des données financières via des APIs
 - Utiliser l'IA pour traiter les requêtes

## Architecture Globale du projet :
![image](https://github.com/user-attachments/assets/9f792b32-6f86-43d9-b15e-89c38f0873aa)

Modules Clés
 - mcp-client	Spring Boot, SSE, Stdio	Routeur entre frontend/backends
 - mcp-server	Spring AI, REST	Gestion des données financières (actions)
 - python-mcp-server	FastAPI/Flask	Services complémentaires

## Flux de Données
1. Frontend → Envoie une requête au mcp-client
2. mcp-client :
   - Route vers mcp-server (pour les outils financiers)
   - Ou vers python-mcp-server (pour d'autres services)
3. Backends :
   - Traitement → Renvoi des données au client
   - Appel à Llama3.1 si nécessaire

## Description :
**Description détaillée du projet mcp-demo-spring-python**

Le projet mcp-demo-spring-python est une application innovante qui intègre harmonieusement des technologies Java et Python pour créer un système complet de gestion et d'analyse de données financières. Au cœur de ce système se trouve une architecture modulaire composée de trois éléments principaux : un serveur Spring (mcp-server) dédié au traitement des données boursières, un serveur Python (python-mcp-server) pour des fonctionnalités complémentaires, et un client central (mcp-client) qui orchestre les communications entre les différents composants. Le mcp-server, développé en Spring Boot, propose une série d'outils financiers sophistiqués permettant d'obtenir des informations détaillées sur des entreprises (comme Maroc Telecom et OCP dans la version actuelle), incluant leurs données boursières, chiffres clés et indicateurs financiers, avec une simulation réaliste des variations de cours. Le python-mcp-server, quant à lui, offre des services plus généraux via une API légère. L'ensemble est piloté par un frontend minimaliste en HTML/JavaScript qui communique avec le mcp-client, ce dernier utilisant intelligemment deux protocoles distincts : le SSE (Server-Sent Events) pour interagir avec le serveur Python et Stdio pour communiquer avec le serveur Spring. Une des innovations majeures de ce projet réside dans son intégration avec Ollama et le modèle Llama3.1, qui apporte une dimension d'intelligence artificielle pour l'analyse et le traitement des requêtes. La configuration fine des connexions entre les différents modules est gérée via des fichiers properties bien structurés, permettant une grande flexibilité dans le déploiement. Ce projet démontre non seulement l'interopérabilité efficace entre Java et Python dans un contexte de microservices, mais sert également de base solide pour des extensions futures comme l'ajout de bases de données, de systèmes de cache ou de fonctionnalités IA plus avancées, tout en offrant dès maintenant une solution opérationnelle pour la gestion et l'analyse de données financières.

## Resultats :

### Premier Essai: 3 tools
![image](https://github.com/user-attachments/assets/05488ae1-df73-4ce2-88f3-52235808d8e5)

### PostMan :
avec HTTP :
![image](https://github.com/user-attachments/assets/12f9a263-76bb-4de1-b4a4-4cf3de3a7291)
![image](https://github.com/user-attachments/assets/8b6b0f9b-91f0-4d72-a1f4-8dbf92a3f2d5)
![image](https://github.com/user-attachments/assets/658d6b77-4ccf-454f-bfd7-94e40139a882)

 avec Architecture Client-Serveur :
 ![image](https://github.com/user-attachments/assets/b902eb0d-f91f-415d-ad93-67749b8d1483)
 ![image](https://github.com/user-attachments/assets/339be6e5-d63f-47bf-92c1-68c2a043171a)

### Terminal :
![image](https://github.com/user-attachments/assets/44feb760-cbff-4406-b909-849dd0bc90b5)


### Swagger :
![image](https://github.com/user-attachments/assets/e9de9eab-8207-4f15-b8b2-dd3f1fb54b3b)

### Frontend ChatBot :
![image](https://github.com/user-attachments/assets/5137ecc3-5d97-43fe-bdc2-6d0586e12b2d)
![image](https://github.com/user-attachments/assets/5e2f88d0-60d0-49f1-bfaf-c8d7adfc520d)
![image](https://github.com/user-attachments/assets/4376ad79-7af0-4da7-8f07-40aa4298bcdd)

![image](https://github.com/user-attachments/assets/e3cc9ccb-1a86-48a9-b68a-2b83eec8c4d7)
![image](https://github.com/user-attachments/assets/a5ff9495-b952-48a7-9dc4-0ff841bcc19f)

