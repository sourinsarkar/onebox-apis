import { Hono } from 'hono'
import { authRoutes } from "./routes/authRoutes"
import { listRoutes } from "./routes/listRoutes"
import * as dotenv from "dotenv"

dotenv.config()

const app = new Hono()

app.route("/auth", authRoutes);
app.route("/list", listRoutes);

export default app
