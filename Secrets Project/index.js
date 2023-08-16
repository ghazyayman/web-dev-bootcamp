// Import required modules
import express from "express";
import axios from "axios";

// Create an express app
const app = express();
const port = 3000; // You can change this to your desired port

// Set up static file serving from the public folder
app.use(express.static("public"));

// Set the view engine to EJS
app.get("/", async (req, res) => {
  try {
  const result = await axios.get ("https://secrets-api.appbrewery.com/random");
  res.render("index.ejs", {secret: result.data.secret, user: result.data.username});
} catch (error) {
  console.log(error.response.data);
  res.status(500);
}
});

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
