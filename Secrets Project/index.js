// Import required modules
const express = require('express');
const axios = require('axios');
const path = require('path');

// Create an express app
const app = express();
const port = 3000; // You can change this to your desired port

// Set up static file serving from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Define a route for the home page
app.get('/', async (req, res) => {
  try {
    // Fetch a random secret using axios
    const response = await axios.get('https://secrets-api.appbrewery.com/random');
    const randomSecret = response.data.secret;
    const username = response.data.username;

    // Render the index.ejs template and pass the secret and username as variables
    res.render('index', { secret: randomSecret, username: username });
  } catch (error) {
    console.error('Error fetching secret:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
