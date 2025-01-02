import jwt from "jsonwebtoken"

const secret= process.env.JWT_SECRET as string;

export const generateToken = (email: string): string => {
    return jwt.sign({ email }, secret, { expiresIn: "1h" });
};

export const verifyToken = (token: string): any => {
    return jwt.verify(token, secret);
}