const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Enable CORS
app.use(cors());

// Serve static files from the 'images' folder
app.use('/images', express.static(path.join(__dirname, 'images'))); 

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'images', 'profile-1.jpg')); 
});

app.get('/', (req, res) => {
  res.send('Hello from the root endpoint!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});