const express = require('express');
const router = express.Router();
const { getAllHarapan , getHarapanCount, uploadHarapan } = require('../controllers/harapanController');

router.get('/', getAllHarapan);

router.get('/count', getHarapanCount);

router.post('/upload', uploadHarapan);

module.exports = router;
