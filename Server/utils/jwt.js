import jwt from "jsonwebtoken"
import { config } from "dotenv"
config()

const secretKey = process.env.JWT_SECRET || "My secret key"

export const generateToken = (payload, expireTime) => {
    try {
        return jwt.sign(payload, secretKey, { expiresIn: "7d" }); 

    } catch (error) {
        throw error;
    }
}

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        throw error;
    }
}
