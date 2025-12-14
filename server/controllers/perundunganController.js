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