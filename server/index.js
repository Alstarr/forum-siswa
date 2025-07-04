// server/index.js

const express = require("express");
const cors = require("cors");

// Import routes
const kritikRoutes = require("./routes/kritikRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routing API
app.use("/api/kritik", kritikRoutes);
app.use("/api/auth", authRoutes);

// Jalankan server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
