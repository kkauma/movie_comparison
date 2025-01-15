const express = require("express");
const moviesRouter = require("./server/api/movies");

const app = express();

// Serve static files
app.use(express.static("."));

// API routes
app.use("/api/movies", moviesRouter);

// Only listen if not in Vercel environment
if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

// Export for Vercel
module.exports = app;
