const fs = require("fs");

const raw = JSON.parse(fs.readFileSync("./data/raw/movies.json"));

const cleaned = raw.results.map(movie => ({
  title: movie.title,
  tmdb_id: movie.id,
  overview: movie.overview,
  genres: movie.genre_ids,
  release_date: movie.release_date,
  rating: movie.vote_average,
  facts: [],
  link_confidence: "NONE"
}));

fs.writeFileSync("./data/raw/gold/movies.json", JSON.stringify(cleaned, null, 2));