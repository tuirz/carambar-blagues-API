const Blague = require("../models/Blague");

const blagues = [
  {
    question: "Quelle est la femelle du hamster ?",
    reponse: "L'Amsterdam"
  },
  {
    question: "Que dit un oignon quand il se cogne ?",
    reponse: "Aïe"
  },
  {
    question: "Quel est l'animal le plus heureux ?",
    reponse: "Le hibou, parce que sa femme est chouette."
  }
];

const seedBlagues = async () => {
  try {
    const count = await Blague.count();
    if (count === 0) {
      await Blague.bulkCreate(blagues);
      console.log("✅ Blagues seedées avec succès");
    } else {
      console.log("🔄 Blagues déjà présentes");
    }
  } catch (error) {
    console.error("❌ Erreur seeding:", error);
  }
};

module.exports = seedBlagues;
