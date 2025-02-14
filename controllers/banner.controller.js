// controllers/banner.controller.js
const pool = require('../config/db');

// Listar todos os banners
exports.getBanners = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM banners');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
