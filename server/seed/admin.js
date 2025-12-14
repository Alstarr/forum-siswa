import bcrypt from "bcryptjs";
import { db } from "../db.js";
import { admin } from "../../src/db/schema.js";

const hash = await bcrypt.hash("admin123", 10);

await db.insert(admin).values({
  email: "admin@osis.id",
  password: hash,
});

console.log("Admin created");
process.exit();
