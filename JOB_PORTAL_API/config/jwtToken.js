import jwt from "jsonwebtoken"

// create token
export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
    });
};
