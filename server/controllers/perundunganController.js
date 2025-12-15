import { db } from '../db.js';
import { perundungan } from '../../src/db/schema.js';
import { eq } from 'drizzle-orm';

export const InsertPerundungan = async (req, res) => {
    try {
        const { isi_laporan } = req.body;
        const created_at = new Date().toISOString();

        await db.insert(perundungan).values({
            isi_laporan,
            created_at
        });
        res.status(201).json({ message: 'Laporan perundungan berhasil disimpan.' });
    } catch (error) {
        res.status(500).json({ message: 'Terjadi kesalahan saat menyimpan laporan perundungan.' });
    }
}

export const GetPerundungan = async (req, res) => {
    try {
        const perundunganList = await db.select().from(perundungan);
        res.json(perundunganList);
    } catch (error) {
        console.error("Error fetching perundungan:", error);
    }
}

export const deletePerundungan = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    const result = await db
      .delete(perundungan)
      .where(eq(perundungan.id_perundungan, Number(id)));

    if (result.rowsAffected === 0) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }

    res.json({ message: "Data berhasil dihapus" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Gagal menghapus data" });
  }
};