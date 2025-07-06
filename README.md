# 🍬 Carambar Blagues API

API REST pour les blagues Carambar & co - Projet entretien technique CDA

## 🚀 Liens

- **API déployée** : https://carambar-blagues-api-u6ws.onrender.com
- **Documentation Swagger** : https://carambar-blagues-api-u6ws.onrender.com/api-docs
- **Repository Frontend** : [À venir]

## 📡 Endpoints

| Méthode | URL | Description |
|---------|-----|-------------|
| GET | `/api/v1/blagues` | Récupérer toutes les blagues |
| GET | `/api/v1/blagues/:id` | Récupérer une blague par ID |
| GET | `/api/v1/blagues/random` | Récupérer une blague aléatoire |
| POST | `/api/v1/blagues` | Ajouter une nouvelle blague |

## 🛠️ Technologies

- **Runtime** : Node.js
- **Framework** : Express.js
- **ORM** : Sequelize
- **Base de données** : SQLite
- **Documentation** : Swagger
- **Architecture** : MVC
- **Déploiement** : Render.com

## 🏃‍♂️ Installation locale

```bash
# Cloner le projet
git clone https://github.com/tuirz/carambar-blagues-api.git
cd carambar-blagues-api

# Installer les dépendances
npm install

# Lancer le serveur
npm start
```

L'API sera accessible sur `http://localhost:3000`

## 📖 Documentation

La documentation interactive Swagger est disponible à `/api-docs`

## 🧪 Tests avec Postman

### GET - Toutes les blagues
```
GET https://carambar-blagues-api-u6ws.onrender.com/api/v1/blagues
```

### GET - Blague aléatoire
```
GET https://carambar-blagues-api-u6ws.onrender.com/api/v1/blagues/random
```

### POST - Ajouter une blague
```
POST https://carambar-blagues-api-u6ws.onrender.com/api/v1/blagues
Content-Type: application/json

{
  "question": "Votre question ?",
  "reponse": "Votre réponse !"
}
```

## 📁 Structure du projet

```
src/
├── app.js              # Point d'entrée
├── config/
│   ├── database.js     # Configuration Sequelize
│   └── swagger.js      # Configuration Swagger
├── models/
│   └── Blague.js       # Modèle Sequelize
├── controllers/
│   └── blagueController.js  # Logique métier
├── routes/
│   └── blagueRoutes.js # Définition des routes
└── seeders/
    └── blaguesSeeder.js # Données d'initialisation
```

## 👨‍💻 Auteur

Luigi SOUFAR - Candidat Concepteur Développeur d'Applications
