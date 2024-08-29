import { drizzle } from "drizzle-orm/d1";
import { Hono } from "hono";
import { users } from "./schema";
const app = new Hono();
app.get("/", (c) => {
    return c.text("Hello Hono!");
});
app.get("/users", async (c) => {
    const db = drizzle(c.env.DB);
    const result = await db.select().from(users).all();
    return c.json(result);
});
export default app;
