import { db } from '../db.js';
import { harapan } from '../../src/db/schema.js';
import { eq } from 'drizzle-orm';

export const InsertHarapan = async (req, res) => {
    try {
        const { isi_laporan } = req.body;
        const created_at = new Date().toISOString();

        await db.insert(harapan).values({
            isi_laporan,
            created_at
        });
        res.json({ message: 'Harapan received', data: isi_laporan });
    } catch (error) {
        console.error("Error inserting harapan:", error);
        res.status(500).json({ error: "Failed to insert harapan" });
    }
}