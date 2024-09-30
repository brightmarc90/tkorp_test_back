# TKORP Test Front
Partie back du test technique TKORP qui a pour objectif la réalisation de l'API pour gérer via des différents endpoints le CRUD des personnes et des animaux.
## Installation
### Prérequis
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Nest CLI](https://docs.nestjs.com/cli/overview)
### Etapes d'installation
**1.** Cloner le dépôt
```bash
git clone https://github.com/brightmarc90/tkorp_test_back.git
```
**2.** Se rendre dans le dossier du projet
```bash
cd tkorp_test_back
```
**3.** Installer les dépendances
```bash
npm install
```
## Configuration
Pour la gestion des variables d'environnment créer le fichier ``.env`` à la racine du projet et ajouter la ligne suivante
```bash
DATABASE_URL="mysql://root:rootpassword@localhost:3307/tkorp_test_db"
```
Si vous utilisez MySQL localement, créer une nouvelle base de données en la nommant ``tkorp_test_db``.
Si vos informations de connexion à MySQL sont differentes de celles dans l'URL ci-dessus, mettez les à jour sachant que:
- **root**: est votre nom d'utilisateur
- **rootpassword**: votre mot de passe (ne mettez rien s'il y en a pas)
- **localhost:3307**: l'adresse et le port sur lequel tourne MySQL.

Si n'avez pas MySQL installé Ce projet est configuré pour créer un **conteneur Docker** pour faire tourner **MySql** et **Adminer**. Cf le fichier [docker-compose.yml](https://github.com/brightmarc90/tkorp_test_back/blob/main/docker-compose.yml)
Si vous utilisez docker lancer la commande suivante
```bash
docker-compose up --build
```
Cette commande lancera le conteneur dans docker. Pour accéder à Mysql de votre conteneur, rendez-vous sur http://localhost:8080 .
Connectez vous avec les informations suivantes:
- système: **MySQL**
- serveur: **mysql**
- utilisateur: **root**
- mot de passe: **rootpassword**

La base de données ``tkorp_test_db`` est créée par défaut.

Dans le terminal de votre projet à la racine exécutez la commande suivante
```bash
npx prisma migrate dev
```
Dans Adminer, cliquer ensuite sur ``requête SQL`` dans la colonne de gauche et copier dans la zone de texte le contenu du fichier [data-SQL.txt](https://github.com/brightmarc90/tkorp_test_back/blob/main/data-SQL.txt) puis cliquer sur ``Exécuter``. Toute les données seront importées.
## Lancer l'application
- ``npm run start:dev`` : démarre l'application en mode développement généralement sur l'adresse http://localhost:3000
## Endpoints de l'API
Pour avoir toute la documentation sur cet API et les tester rendez-vous sur http://localhost:3000/api-doc
## Technologies utilisées
- [NextJS](https://nextjs.org/docs)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Prisma](https://www.prisma.io): ORM
