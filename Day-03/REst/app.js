// Importing the express module
const express = require('express');
const app = express();
const fs = require('fs');
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

// Route to fetch data
app.get('/api/data', (req, res) => {
  res.json(data);
});
// Handling 404 (Page Not Found)
app.use((req, res) => {
  res.status(404).json({ message: "Route not found!" });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



// const express = require('express');

// const router = express.Router();



// // Sample user data (temporary)

// let users = [

//   { id: 1, name: 'John Doe', age: 30 },

//   { id: 2, name: 'Jane Smith', age: 25 },

//   // Add more users as needed

// ];



// // Get all users

// router.get('/users', (req, res) => {

//   res.json(users);

// });



// // Get a single user by ID

// router.get('/users/:id', (req, res) => {

//   const { id } = req.params;

//   const user = users.find((user) => user.id === parseInt(id));



// if (!user) {

//     return res.status(404).json({ message: 'User not found' });

//   }



// res.json(user);

// });



// // Create a new user

// router.post('/users', (req, res) => {

//   const { name, age } = req.body;



// // Simple validation

//   if (!name || !age) {

//     return res.status(400).json({ message: 'Name and age are required' });

//   }



// const newUser = { id: users.length + 1, name, age };

//   users.push(newUser);



// res.status(201).json(newUser);

// });



// // Update an existing user by ID

// router.put('/users/:id', (req, res) => {

//   const { id } = req.params;

//   const { name, age } = req.body;



// // Simple validation

//   if (!name || !age) {

//     return res.status(400).json({ message: 'Name and age are required' });

//   }



// const user = users.find((user) => user.id === parseInt(id));



// if (!user) {

//     return res.status(404).json({ message: 'User not found' });

//   }



// user.name = name;

//   user.age = age;



// res.json(user);

// });



// // Delete a user by ID

// router.delete('/users/:id', (req, res) => {

//   const { id } = req.params;

//   users = users.filter((user) => user.id !== parseInt(id));

//   res.sendStatus(204);

// });



// module.exports = router;

