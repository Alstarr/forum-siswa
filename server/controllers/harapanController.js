const db = require('../config/db');

exports.getAllHarapan = (req, res) => {
  db.query('SELECT * FROM harapan ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results); // PENTING: balikin ARRAY langsung!
  });
};

exports.getHarapanCount = (req, res) => {
  db.query("SELECT COUNT(*) AS count FROM harapan", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ count: results[0].count });
  });
};

exports.uploadHarapan = (req, res) => {
  const { isi_laporan } = req.body;

  if (!isi_laporan || isi_laporan.trim() === "") {
    return res.status(400).json({ error: "Pesan tidak boleh kosong"});
  }

  db.query("INSERT INTO harapan (isi_laporan, created_at) VALUES (?, NOW())", [isi_laporan], (err, result) => {
    if (err) {
      console.error("Error insert harapan:", err);
      return res.status(500).json({ error: "Gagal menyimpan form harapan"});
    }
    res.status(201).json({ sucess: true, message: "Form harapan berhasil dikirim"});
  });
};
