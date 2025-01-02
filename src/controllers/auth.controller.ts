import { Context } from "hono";
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/jwt";

const users: { [key: string]: { password: string } } = {};

export const signup = async(c: Context) => {
    const { email, password } = await c.req.json();

    if(users[email]) {
        return c.json({ message: "User already exists." }, 400);
    }

    const encryptedPassword = await bcrypt.hash(password, 20);

}