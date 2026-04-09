// scripts/fetchTMDB.js
const axios = require("axios");
const fs = require("fs");
TMDB_API_KEY = '6c3fa331aa41a71db126f36675ecdaac'
const API_KEY = process.env.TMDB_API_KEY;

async function fetchMovies() {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}`
  );

  fs.writeFileSync("./data/raw/movies.json", JSON.stringify(res.data, null, 2));
}

fetchMovies();