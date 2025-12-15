import { db } from "../db.js";
import { kritik } from "../../src/db/schema.js";
import { eq } from "drizzle-orm";

export const InsertKritik = async (req, res) => {
    try {
        const { isi_laporan } = req.body;
        const created_at = new Date().toISOString();

        await db.insert(kritik).values({
            isi_laporan,
            created_at
        })
        res.json({ message: "Kritik received", data: isi_laporan });
    } catch (error) {
        console.error("Error inserting kritik:", error);
        res.status(500).json({ error: "Failed to insert kritik" });
    }
}

export const Getkritik = async (req, res) => {
    try {
        const kritikList = await db.select().from(kritik);
        res.json(kritikList);
    } catch (error) {
        console.error("Error fetching kritik:", error);
    }
}

export const deleteKritik = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "ID tidak valid" });
    }

    const result = await db
      .delete(kritik)
      .where(eq(kritik.id_kritik, Number(id)));

    if (result.rowsAffected === 0) {
      return res.status(404).json({ message: "Data tidak ditemukan" });
    }

    res.json({ message: "Data berhasil dihapus" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ message: "Gagal menghapus data" });
  }
};