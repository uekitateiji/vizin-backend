const express = require('express');
const { getBanners } = require('../controllers/banner.controller');

const router = express.Router();

// Rota para listar banners
router.get('/banners', getBanners);

module.exports = router;
