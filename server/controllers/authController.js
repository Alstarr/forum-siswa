const db = require("../config/db");

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM admin WHERE email = ? AND password = ?",
    [email, password],
    (err, results) => {
      if (err) return res.status(500).json({ message: "Query gagal" });
      if (results.length > 0) {
        res.json({
          success: true,
          message: "Login berhasil",
          user: {
            id: results[0].id_admin,
            email: results[0].email,
            nama: results[0].nama,
          },
        });
      } else {
        res.status(401).json({ success: false, message: "Email atau password salah" });
      }
    }
  );
};
