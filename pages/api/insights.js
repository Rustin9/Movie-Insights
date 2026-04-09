import fs from "fs";
import { generateInsights } from "../../services/llmService";
import { getMoviesFromGCS } from "../../services/gcsService";
export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { movie } = req.body; 
    const data = await getMoviesFromGCS();
    //const data = JSON.parse(
      //fs.readFileSync("data/raw/gold/movies.json", "utf-8")
    //);

    const found = data.find(
      (m) => m.title.toLowerCase() === movie.toLowerCase()
    );

    if (!found) {
      return res.status(404).json({ error: "Movie not found" });
    }

    const result = await generateInsights(found);

    return res.status(200).json({
      hook: result.hook || "",
      themes: result.themes || [],
      trivia: result.trivia || []
    });

  } catch (err) {
    console.error("API ERROR:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}