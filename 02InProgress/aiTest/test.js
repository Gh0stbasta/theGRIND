import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "",
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [{ role: "user", content: "rechne 2 + 2" }],
});

completion.then((result) => console.log(result.choices[0].message));
