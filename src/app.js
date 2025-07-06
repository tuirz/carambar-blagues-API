const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { sequelize } = require('./config/database');
const blagueRoutes = require('./routes/blagueRoutes');
const seedBlagues = require('./seeders/blaguesSeeder');
const { swaggerUi, specs } = require('./config/swagger');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Route de base
app.get('/', (req, res) => {
  res.json({
    message: 'API Carambar Blagues',
    version: '1.0.0',
    endpoints: {
      blagues: '/api/v1/blagues',
      random: '/api/v1/blagues/random',
      documentation: '/api-docs'
    }
  });
});

// Documentation Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Routes API
app.use('/api/v1/blagues', blagueRoutes);

// Initialisation de la base de données
async function initDatabase() {
  try {
    await sequelize.sync();
    console.log('📄 Base de données synchronisée');
    await seedBlagues();
  } catch (error) {
    console.error('❌ Erreur initialisation BDD:', error);
  }
}

app.listen(PORT, async () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  await initDatabase();
});

module.exports = app;
