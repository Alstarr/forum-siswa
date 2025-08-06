const express = require('express');
const router = express.Router();
const { getAllKritik, getKritikCount, uploadKritik } = require('../controllers/kritikController');

// GET semua kritik (list)
router.get('/', getAllKritik);

// GET total count
router.get('/count', getKritikCount);

router.post('/upload', uploadKritik);

module.exports = router;
