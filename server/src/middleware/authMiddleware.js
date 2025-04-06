import jwt from 'jsonwebtoken';
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        res.status(401).json({ message: 'Acess denied. No token provided.' });
    }
    try {
        const decoded = jwt.verify(token, 'your-secret-key');
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
export default authMiddleware;
