// services/linkingService.js
const axios = require("axios");

async function getWikidataQID(imdb_id) {
  const query = `
  SELECT ?item WHERE {
    ?item wdt:P345 "${imdb_id}".
  } LIMIT 1
  `;

  const url = "https://query.wikidata.org/sparql";

  const res = await axios.get(url, {
    params: { query, format: "json" },
  });

  if (res.data.results.bindings.length === 0) {
    return { qid: null, confidence: "NONE" };
  }

  const uri = res.data.results.bindings[0].item.value;
  const qid = uri.split("/").pop();

  return { qid, confidence: "HIGH" };
}

module.exports = { getWikidataQID };