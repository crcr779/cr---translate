# Voice Translate (Vercel + OpenAI, safe)

前端使用浏览器 Web Speech API 语音输入。后端使用 Vercel Serverless + OpenAI API 进行英/日 -> 中文翻译。

## 部署步骤
1. 创建 GitHub 仓库并上传 ZIP 解压后的文件。
2. 在 Vercel 导入仓库并部署。
3. 在 Vercel 设置环境变量：`OPENAI_API_KEY` = 你的 OpenAI Key。
4. 点击 Deploy 即可访问网站。
