const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

const PORT = 3000;

const usersRoutes = require('./app');



// Use the users routes

app.use('/api', usersRoutes);



app.listen(PORT, () => {
    console.log(`"<h1>server is running on port:${PORT} !"`);
  });