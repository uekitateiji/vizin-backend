require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bannerRoutes = require('./routes/banner.routes');

const app = express();

// Configurações do servidor
app.use(express.json());
app.use(cors());

// Definição das rotas
app.use('/api', bannerRoutes);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
