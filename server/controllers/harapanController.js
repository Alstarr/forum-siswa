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

export const GetHarapan = async (req, res) => {
    try {
        const harapanList = await db.select().from(harapan);
        res.json(harapanList);
    } catch (error) {
        console.error("Error fetching harapan:", error);}
}

export const deleteHarapan = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    const result = await db
      .delete(harapan)
      .where(eq(harapan.id_harapan, Number(id)));

    if (result.rowsAffected === 0) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }

    res.json({ message: "Data berhasil dihapus" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Gagal menghapus data" });
  }
};