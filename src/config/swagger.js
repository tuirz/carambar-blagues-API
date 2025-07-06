const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Carambar Blagues API',
      version: '1.0.0',
      description: 'API REST pour les blagues Carambar & co - Projet entretien technique CDA',
      contact: {
        name: 'Luigi SOUFAR',
        email: 'tuirzz@icloud.com'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Serveur de développement'
      },
      {
        url: 'https://votre-app.onrender.com',
        description: 'Serveur de production'
      }
    ],
  },
  apis: ['./src/routes/*.js', './src/controllers/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
