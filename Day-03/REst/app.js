const express = require('express');
const app = express();
const port = 3000;
const mock = require('./MOCK_DATA.json');

const data = {
  message: "Hello, this is your first API!",
  status: "success",
  code: 200
};

app.get('/api/data-json', (req, res) => {
  
    res.json(mock);
  });

app.get('/api/data', (req, res) => {
  res.json(data);
});
app.use((req, res) => {
  res.status(404).json({ message: "Route not found!" });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

