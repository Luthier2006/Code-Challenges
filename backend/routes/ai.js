import express from "express";
import OpenAI from "openai";

const router = express.Router();

router.post("/", async (req, res) => {
  const { code, error, expected } = req.body;

  const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY
  });

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Explique erros de código de forma clara e objetiva." },
      {
        role: "user",
        content: `Código:\n${code}\n\nErro real:\n${error}\n\nSaída esperada:\n${expected}`
      }
    ]
  });

  res.json({ explanation: response.choices[0].message.content });
});

export default router;
