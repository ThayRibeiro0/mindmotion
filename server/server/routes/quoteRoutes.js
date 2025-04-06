"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const router = express_1.default.Router();
router.get('/', async (_req, res) => {
    try {
        const { data } = await axios_1.default.get('https://zenquotes.io/api/random');
        res.json(data[0]);
    }
    catch (error) {
        res.status(500).json({ message: 'Failed to fetch quote' });
    }
});
exports.default = router;
