import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  credentials: JSON.parse(process.env.GOOGLE_CREDENTIALS_JSON),
});

const bucketName = "ai-movie-insights-data";

export async function getMoviesFromGCS() {
  const file = storage
    .bucket(bucketName)
    .file("gold/movies.json");

  const contents = await file.download();

  return JSON.parse(contents.toString());
}