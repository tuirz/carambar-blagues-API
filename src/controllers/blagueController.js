const Blague = require("../models/Blague");

const blagueController = {
  // GET /api/v1/blagues - Récupérer toutes les blagues
  getAllBlagues: async (req, res) => {
    try {
      const blagues = await Blague.findAll();
      res.json(blagues);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la récupération des blagues" });
    }
  },

  // GET /api/v1/blagues/:id - Récupérer une blague par ID
  getBlagueById: async (req, res) => {
    try {
      const blague = await Blague.findByPk(req.params.id);
      if (!blague) {
        return res.status(404).json({ error: "Blague non trouvée" });
      }
      res.json(blague);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la récupération de la blague" });
    }
  },

  // GET /api/v1/blagues/random - Récupérer une blague aléatoire
  getRandomBlague: async (req, res) => {
    try {
      const count = await Blague.count();
      const randomIndex = Math.floor(Math.random() * count);
      const blague = await Blague.findOne({ offset: randomIndex });
      res.json(blague);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la récupération de la blague aléatoire" });
    }
  },

  // POST /api/v1/blagues - Ajouter une nouvelle blague
  createBlague: async (req, res) => {
    try {
      const { question, reponse } = req.body;
      if (!question || !reponse) {
        return res.status(400).json({ error: "Question et réponse sont requises" });
      }
      const blague = await Blague.create({ question, reponse });
      res.status(201).json(blague);
    } catch (error) {
      res.status(500).json({ error: "Erreur lors de la création de la blague" });
    }
  }
};

module.exports = blagueController;
