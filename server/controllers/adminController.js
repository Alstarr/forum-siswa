import dotenv from "dotenv";
import { db } from "../db.js";
import { admin } from "../../src/db/schema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { eq } from "drizzle-orm";

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
