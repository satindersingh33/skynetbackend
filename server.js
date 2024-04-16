const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); // Import body-parser
const cors = require('cors');
const router=require("../backend/routes/nonVerifiedPagesRoutes");

const app = express();
const PORT =  9000;

mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB successfully!');
});

db.on('disconnected', () => {
  console.log('MongoDB connection disconnected');
});

// Middleware to parse JSON bodies
// app.use(bodyParser.json());
app.use(cors());

// Middleware to parse URL-encoded bodies
app.use(express.json());

// API routes
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
