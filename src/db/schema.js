import { mysqlTable, serial, varchar, text, int } from "drizzle-orm/mysql-core";

export const admin = mysqlTable("admin", {
    id: int("id").primaryKey().autoincrement(),
    email: varchar("email", { length: 255 }).notNull(),
    password: varchar("password", { length: 255 }).notNull(),
    created_at: varchar("created_at", { length: 255 }).notNull(),
})

export const harapan = mysqlTable("harapan", {
    id_harapan: int("id_harapan").primaryKey().autoincrement(),
    isi_laporan: text("isi_laporan").notNull(),
    created_at: varchar("created_at", { length: 255 }).notNull(),
})

export const kritik = mysqlTable("kritik", {
    id_kritik: int("id_kritik").primaryKey().autoincrement(),
    isi_laporan: text("isi_laporan").notNull(),
    created_at: varchar("created_at", { length: 255 }).notNull(),
})

export const perundungan = mysqlTable("perundungan", {
    id_perundungan: int("id_perundungan").primaryKey().autoincrement(),
    isi_laporan: text("isi_laporan").notNull(),
    created_at: varchar("created_at", { length: 255 }).notNull(),
})