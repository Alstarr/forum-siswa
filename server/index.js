require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Import semua routes
const kritikRoutes = require('./routes/kritikRoutes');
const harapanRoutes = require('./routes/harapanRoutes');
const perundunganRoutes = require('./routes/perundunganRoutes');
const authRoutes = require('./routes/authRoutes'); // optional

const app = express();

// Middleware global
app.use(cors());
app.use(express.json());

// Register routes dengan prefix URL
app.use('/api/kritik', kritikRoutes);
app.use('/api/harapan', harapanRoutes);
app.use('/api/perundungan', perundunganRoutes);
app.use('/api', authRoutes); // Contoh: POST /api/login

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
