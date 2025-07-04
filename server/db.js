// Import mysql2
const mysql = require("mysql2");

// Buat koneksi pool
const db = mysql.createPool({
  host: "localhost",     // Ganti sesuai host DB 
  user: "root",          // User DB 
  password: "",          // Password DB 
  database: "nama_db",   // Nama DB 
});

// Export pool supaya bisa dipakai di file lain
module.exports = db;
