import OpenAI from "openai";   


const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateInsights(movie) {
  const prompt = `
You are a strict JSON generator.

Return ONLY valid JSON. No explanation.

Format:
{
  "hook": "string",
  "themes": ["string","string","string"],
  "trivia": ["string","string","string","string","string"]
}

Movie:
${JSON.stringify(movie)}
`;

  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const text = res.choices[0].message.content;

  try {
    const parsed = JSON.parse(text);

    return {
      hook: parsed.hook || "",
      themes: parsed.themes || [],
      trivia: parsed.trivia || []
    };
  } catch (err) {
    console.error("JSON PARSE ERROR:", text);

    return {
      hook: "Error generating hook",
      themes: [],
      trivia: []
    };
  }
}