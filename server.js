import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const QUESTION =
  "If everything has a cause, what is the cause of the first cause?";

// -------------------- CAPTCHA CHECK --------------------
app.post("/check", async (req, res) => {
  try {
    const userAnswer = req.body.answer || "";

    if (!API_KEY) {
      return res.status(500).json({ error: "API_KEY not configured" });
    }

    const response = await fetch(
      "https://ai.hackclub.com/proxy/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "qwen/qwen3-32b",
          messages: [
            {
              role: "system",
              content: `
You are a strict CAPTCHA validator.

Return ONLY YES or NO.

YES = answer is relevant and makes sense
NO = nonsense, empty, or unrelated text

No explanations.
              `.trim(),
            },
            {
              role: "user",
              content: `
QUESTION:
${QUESTION}

USER ANSWER:
${userAnswer}
              `.trim(),
            },
          ],
        }),
      },
    );

    const data = await response.json();

    let aiReply =
      data?.choices?.[0]?.message?.content?.trim()?.toUpperCase() || "NO";

    aiReply = aiReply.replace(/[^A-Z]/g, "");

    if (aiReply !== "YES") aiReply = "NO";

    res.json({ result: aiReply });
  } catch (err) {
    console.error("CHECK ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// -------------------- PASSWORD ROAST --------------------
app.post("/roast", async (req, res) => {
  try {
    const password = req.body.password || "";

    console.log("PASSWORD:", password);

    if (!API_KEY) {
      return res.status(500).json({ error: "API_KEY not configured" });
    }

    const response = await fetch(
      "https://ai.hackclub.com/proxy/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "qwen/qwen3-32b",
          messages: [
            {
              role: "system",
              content:
                "You are a funny roast generator. Roast only the password.",
            },
            {
              role: "user",
              content: `Roast this password: ${password}`,
            },
          ],
        }),
      },
    );

    const text = await response.text();

    console.log("RAW AI RESPONSE:", text);

    const data = JSON.parse(text);

    const roast = data?.choices?.[0]?.message?.content || "No roast generated.";

    res.json({ roast });
  } catch (err) {
    console.error("ROAST ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
