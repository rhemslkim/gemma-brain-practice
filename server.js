const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route for testing the server
app.get('/', (req, res) => {
  res.send('Movie Recommender API is running!');
});

// Example endpoint for movies (we will expand this later)
app.get('/movies', (req, res) => {
  const movies = [
    { id: 1, title: "인셉션", year: 2010, genre: "SF" },
    { id: 2, title: "기생충", year: 2019, genre: "드라마" },
    { id: 3, title: "매트릭스", year: 1999, genre: "SF" }
  ];
  res.json(movies);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});