const db = require('../config/db');

exports.getAllPerundungan = (req, res) => {
  db.query('SELECT * FROM perundungan ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results); // PENTING: balikin ARRAY langsung!
  });
};

exports.getPerundunganCount = (req, res) => {
  db.query("SELECT COUNT(*) AS count FROM perundungan", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ count: results[0].count });
  });
};

exports.uploadPerundungan = (req, res) => {
  const { isi_laporan} = req.body;
  
  if (!isi_laporan || isi_laporan.trim() === "") {
    return res.status(400).json({ error: "Pesan tidak boleh kosong"});
  }

  db.query("INSERT INTO perundungan (isi_laporan, created_at) VALUES (?, NOW())", [isi_laporan], (err, result) => {
    if (err) {
      console.error("Error insert form perundungan:", err);
      return res.status(500).json({ error: "Gagal menyimpan form perundungan"});
    }
    res.status(201).json({ success: true, message: "Form perundungan berhasil dikirim"});
  });
};
