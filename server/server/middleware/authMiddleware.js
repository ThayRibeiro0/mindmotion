"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        res.status(401).json({ message: 'Acess denied. No token provided.' });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, 'your-secret-key');
        if (typeof decoded === 'object' && decoded !== null && 'id' in decoded) {
            req.user = { id: decoded.id };
        }
        else {
            throw new Error('Invalid token payload');
        }
        next();
    }
    catch (err) {
        res.status(401).json({ message: 'Token invalid' });
    }
};
exports.default = authMiddleware;
