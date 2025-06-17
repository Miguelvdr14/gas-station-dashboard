// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const connectDB = require('./db/db');
const authRouter = require('./routes/auth.routes');

const app = express();

// Middlewares globales
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRouter);

// Arranque del servidor
const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`✅  Server running on port ${PORT}`)
    );
  })
  .catch((err) => {
    console.error('❌  Failed to connect to MongoDB', err);
    process.exit(1);
  });