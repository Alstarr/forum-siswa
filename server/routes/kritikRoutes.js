// contoh doang ini rel, tinggal lu implementasiin

const express = require("express");
const router = express.Router();
const db = require("../db");

// === GET Semua Kritik ===
// URL: GET http://localhost:5000/api/kritik
router.get("/", (req, res) => {
  db.query("SELECT * FROM kritik_saran", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// === Tambah Kritik ===
// URL: POST http://localhost:5000/api/kritik
router.post("/", (req, res) => {
  const { isi_pesan } = req.body;
  db.query(
    "INSERT INTO kritik_saran (pesan) VALUES (?)",
    [isi_pesan],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ success: true, id: result.insertId });
    }
  );
});

module.exports = router;
