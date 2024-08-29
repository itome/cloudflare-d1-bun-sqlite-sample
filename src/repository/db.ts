import { drizzle as d1Drizzle } from "drizzle-orm/d1";
import * as schema from "../schema";
import { BaseSQLiteDatabase } from "drizzle-orm/sqlite-core";

export type DB = BaseSQLiteDatabase<any, any, typeof schema>;

export const createDB = (db: D1Database): DB => {
	return d1Drizzle(db, { schema });
};
