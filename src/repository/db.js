import { drizzle as d1Drizzle } from "drizzle-orm/d1";
import * as schema from "../schema";
// 本来はD1用の型を返すべきだが、以下の問題により型定義を誤魔化している。
// D1の型でなくBunSQLiteの型を使っているのは、Bunの方が使える機能が限られているため
// https://github.com/drizzle-team/drizzle-orm/issues/1129
export const createDB = (db) => {
    return d1Drizzle(db, { schema });
};
