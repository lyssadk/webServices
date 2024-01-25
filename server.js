const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();
const mongoURI = process.env.MONGODB_URI;
const { MongoClient } = require('mongodb');

// Replace <your_database_url> with your MongoDB connection string

const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to the MongoDB server
client
  .connect()
  .then(() => {
    console.log('Connected to MongoDB');
    // You can start performing database operations here
  })
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// import mongoose
app.use('/', require('./routes'));
app.use(express.json());

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
