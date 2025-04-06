"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authMiddleware_js_1 = __importDefault(require("../middleware/authMiddleware.js"));
const Meditation_js_1 = __importDefault(require("../models/Meditation.js"));
const meditationRouter = express_1.default.Router();
// Rota protegida para criar log de meditação
meditationRouter.post('/meditation/log', authMiddleware_js_1.default, async (req, res) => {
    try {
        const { duration, mood, notes } = req.body;
        const user_id = req.user?.id;
        const newLog = Meditation_js_1.default.create({ user_id, duration, mood, notes });
        res.json({ message: 'Log created successfully!', data: newLog });
    }
    catch (error) {
        console.error("Error creating meditation log:", error);
        res.status(500).json({ error: "Erro ao criar o log de meditação." });
    }
});
// Rota protegida para buscar logs do usuário
meditationRouter.get("/meditation/logs", authMiddleware_js_1.default, async (req, res) => {
    try {
        const user_id = req.user?.id ?? null;
        const logs = Meditation_js_1.default.findAll({ where: { user_id } });
        res.json(logs);
    }
    catch (error) {
        console.error("Error fetching meditation logs:", error);
        res.status(500).json({ error: "Erro ao buscar os logs de meditação." });
    }
});
exports.default = meditationRouter;
