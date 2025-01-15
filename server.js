const express = require("express");
const moviesRouter = require("./server/api/movies");

const app = express();
const port = process.env.PORT || 3001;

// Serve static files
app.use(express.static("."));

// API routes
app.use("/api/movies", moviesRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
