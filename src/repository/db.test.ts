import { Database } from "bun:sqlite";
import { drizzle as bunDrizzle } from "drizzle-orm/bun-sqlite";
import { DB } from "./db";
import * as schema from "../schema";

export const createTestDB = (): DB => {
	return bunDrizzle(new Database(":memory:"), { schema });
};
