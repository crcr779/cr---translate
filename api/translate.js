const { OpenAI } = require("openai");
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  try {
    const { text } = req.body || {};
    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      res.status(400).json({ error: 'text is required' });
      return;
    }

    const messages = [
      { role: "system", content: "你是一个翻译助手。将用户提供的文本从英语或日语翻译成简体中文，不添加额外解释，只返回翻译结果。" },
      { role: "user", content: `请翻译以下内容为简体中文：\n\n${text}` }
    ];

    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
      max_tokens: 1000,
      temperature: 0.1,
    });

    const translation = completion.choices?.[0]?.message?.content || '';
    res.status(200).json({ translation: translation.trim() });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: String(err) });
  }
};
