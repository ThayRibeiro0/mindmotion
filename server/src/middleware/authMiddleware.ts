import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface AuthenticatedRequest extends Request {
    user?: { id: string };
}

const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        res.status(401).json({ message: 'Acess denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token as string, 'your-secret-key');
        if (typeof decoded === 'object' && decoded !== null && 'id' in decoded) {
            req.user = { id: decoded.id as string };
        } else {
            throw new Error('Invalid token payload');
        }
        next();
    } catch (err) {
        res.status(401).json({ message: 'Token invalid' });
    }
};

export default authMiddleware;
