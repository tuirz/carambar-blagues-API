const express = require("express");
const blagueController = require("../controllers/blagueController");

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Blague:
 *       type: object
 *       required:
 *         - question
 *         - reponse
 *       properties:
 *         id:
 *           type: integer
 *           description: ID unique de la blague
 *         question:
 *           type: string
 *           description: La question de la blague
 *         reponse:
 *           type: string
 *           description: La réponse de la blague
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *       example:
 *         id: 1
 *         question: "Quelle est la femelle du hamster ?"
 *         reponse: "L'Amsterdam"
 */

/**
 * @swagger
 * tags:
 *   name: Blagues
 *   description: Gestion des blagues Carambar
 */

/**
 * @swagger
 * /api/v1/blagues:
 *   get:
 *     summary: Récupère toutes les blagues
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Liste de toutes les blagues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blague'
 */

/**
 * @swagger
 * /api/v1/blagues/random:
 *   get:
 *     summary: Récupère une blague aléatoire
 *     tags: [Blagues]
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blague'
 */

/**
 * @swagger
 * /api/v1/blagues/{id}:
 *   get:
 *     summary: Récupère une blague par ID
 *     tags: [Blagues]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la blague
 *     responses:
 *       200:
 *         description: La blague demandée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blague'
 *       404:
 *         description: Blague non trouvée
 */

/**
 * @swagger
 * /api/v1/blagues:
 *   post:
 *     summary: Crée une nouvelle blague
 *     tags: [Blagues]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - question
 *               - reponse
 *             properties:
 *               question:
 *                 type: string
 *                 description: La question de la blague
 *               reponse:
 *                 type: string
 *                 description: La réponse de la blague
 *             example:
 *               question: "Pourquoi les plongeurs plongent-ils toujours en arrière ?"
 *               reponse: "Parce que sinon ils tombent dans le bateau"
 *     responses:
 *       201:
 *         description: Blague créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blague'
 *       400:
 *         description: Données manquantes
 */

// Routes des blagues
router.get("/", blagueController.getAllBlagues);
router.get("/random", blagueController.getRandomBlague);
router.get("/:id", blagueController.getBlagueById);
router.post("/", blagueController.createBlague);

module.exports = router;
