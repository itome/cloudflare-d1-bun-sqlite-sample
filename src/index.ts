import { Hono } from "hono";
import { createDB } from "./repository/db";
import { UserRepository } from "./repository/user";

type Bindings = {
	DB: D1Database;
};

const app = new Hono<{ Bindings: Bindings }>();

app.get("/users", async (c) => {
	const db = createDB(c.env.DB);
	const repository = new UserRepository(db);
	const result = await repository.getAll();
	return c.json(result);
});

export default app;
