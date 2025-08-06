const express = require('express');
const router = express.Router();
const { getAllPerundungan, getPerundunganCount, uploadPerundungan } = require('../controllers/perundunganController');

router.get('/', getAllPerundungan);

router.get('/count', getPerundunganCount);

router.post('/upload', uploadPerundungan);

module.exports = router;
