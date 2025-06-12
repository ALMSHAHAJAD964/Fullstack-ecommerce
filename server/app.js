const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// Middleware
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());

//Routes
const categoryRoutes =require('./routes/categories');
const productRoutes =require('./routes/products');

app.use(`/api/category`,categoryRoutes);
app.use(`/api/products`,productRoutes);

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log('Database Connection is ready...');
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
