import {
	afterEach,
	beforeAll,
	beforeEach,
	describe,
	expect,
	test,
} from "bun:test";
import { migrate } from "drizzle-orm/bun-sqlite/migrator";
import { createTestDB } from "./db.test";
import { UserRepository } from "./user";
import { users } from "../schema";

describe("UserRepository", () => {
	const db = createTestDB();
	const repository = new UserRepository(db);

	beforeAll(async () => {
		migrate(db, { migrationsFolder: "migrations" });
	});

	beforeEach(async () => {
		await db.insert(users).values([
			{
				name: "John Doe",
				email: "foo@bar.com",
			},
			{
				name: "Taro Yamada",
				email: "hoge@fuga.com",
			},
		]);
	});

	afterEach(async () => {
		await db.delete(users);
	});

	test("get all users", async () => {
		const users = await repository.getAll();
		expect(users).toHaveLength(2);
	});
});
