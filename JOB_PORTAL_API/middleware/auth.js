import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token; // Retrieve token from cookies

    if (!token) {
        return res.status(401).json({ success: false, message: "Not authorized. Please log in again." });
    }

    try {
        const token_decode = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.body.userId = token_decode.id; // Attach the user ID to the request body
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        console.log(error);
        res.status(401).json({ success: false, message: 'Invalid token. Please log in again.' });
    }
}

export default authMiddleware;
