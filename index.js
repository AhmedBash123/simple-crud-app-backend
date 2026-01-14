require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./Routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.use('/api/products', productRoute);

//get

app.get('/', (req, res) => {
  res.send('Hello from Node and Express API');
});

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@backenddb.mqnnvka.mongodb.net/${process.env.DB_NAME}?appName=BackendDB`;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log('Connected!');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(() => console.log('Failed!'));
