import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const bearerHeader = req.headers.authorization;

    if (!bearerHeader) {
        return res.status(401).json({ message: "Token not found" });
    }

    try {
        const bearer = bearerHeader.split(' ');
        if (bearer.length !== 2) {
            return res.status(401).json({ message: "Invalid token format" });
        }
        const token = bearer[1];
        const decoded = jwt.verify(token, process.env.secretKey);
        req.user = decoded;

        next();

    } catch (err) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

export default auth;