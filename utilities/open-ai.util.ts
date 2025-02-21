import axios from "axios";

class OpenAI {
  static async generateAISummary(insights: any) {
    const prompt = `Generate a brief human readable summary for sales insights: ${JSON.stringify(
      insights
    )}`;

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: prompt }],
      },
      {
        headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      }
    );

    return response.data.choices[0].message.content;
  }
}

export default OpenAI;
