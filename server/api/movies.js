const express = require("express");
const axios = require("axios");
require("dotenv").config();

const router = express.Router();

router.get("/search", async (req, res) => {
  try {
    const { term } = req.query;
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: process.env.OMDB_API_KEY,
        s: term,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/movie/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get("http://www.omdbapi.com/", {
      params: {
        apikey: process.env.OMDB_API_KEY,
        i: id,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
