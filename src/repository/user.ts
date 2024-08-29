import { users } from "../schema";
import { DB } from "./db";

export class UserRepository {
	private db: DB;

	constructor(db: DB) {
		this.db = db;
	}

	async getAll(): Promise<(typeof users.$inferSelect)[]> {
		return this.db.select().from(users).all();
	}
}
