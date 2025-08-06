const db = require('../config/db');

exports.getAllKritik = (req, res) => {
  db.query('SELECT * FROM kritik ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results); // PENTING: balikin ARRAY langsung!
  });
};

exports.getKritikCount = (req, res) => {
  db.query('SELECT COUNT(*) AS count FROM kritik', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ count: results[0].count });
  });
};
  
exports.uploadKritik = (req, res) => {
  const { isi_laporan } = req.body;

  if (!isi_laporan || isi_laporan.trim() === "") {
    return res.status(400).json({ error: "Pesan tidak boleh kosong" });
  }

  db.query("INSERT INTO kritik (isi_laporan, created_at) VALUES (?, NOW())", [isi_laporan], (err, result) => {
    if (err) {
      console.error("Error insert kritik:", err);
      return res.status(500).json({ error: "Gagal menyimpan kritik" });
    }
    res.status(201).json({ success: true, message: "Kritik berhasil dikirim" });
  });
};