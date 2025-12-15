import dotenv from "dotenv";
import { perundungan, harapan, kritik } from "../../src/db/schema.js";
import { db } from "../db.js";
import { admin } from "../../src/db/schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { eq, sql } from "drizzle-orm";

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET belum diset di .env");
}



export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Data tidak lengkap" });
  }

  const result = await db
    .select()
    .from(admin)
    .where(eq(admin.email, email));

  if (result.length === 0) {
    return res.status(401).json({ message: "Email tidak ditemukan" });
  }

  const data = result[0];

  const isMatch = await bcrypt.compare(password, data.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Password salah" });
  }

const token = jwt.sign(
  { id: data.id },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);

  res.json({
    message: "Login berhasil",
    token,
    admin: {
      id: data.id,
      email: data.email,
    },
  });
};

export const totalHarapan = async (req, res) => {
    try {
        const result = await db
        .select({
            total: sql`COUNT(*)`,
        })
        .from(harapan);

        res.json({
        total: result[0].total,
        });
    } catch (error) {
        console.error("Error count harapan:", error);
        res.status(500).json({ message: "Gagal mengambil jumlah data" });
    }
}

export const totalKritik = async (req, res) => {
    try {
        const result = await db
        .select({
            total: sql`COUNT(*)`,
        })
        .from(kritik);

        res.json({
        total: result[0].total,
        });
    } catch (error) {
       console.error("Error count k:", error);
        res.status(500).json({ message: "Gagal mengambil jumlah data" });
    }
}

export const totalPerundungan = async (req, res) => {
    try {
        const result = await db
        .select({
            total: sql`COUNT(*)`,
        })
        .from(perundungan);

        res.json({
        total: result[0].total,
        });
    } catch (error) {
       console.error("Error count perundungan:", error);
        res.status(500).json({ message: "Gagal mengambil jumlah data" });
    }
}