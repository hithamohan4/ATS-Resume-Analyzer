const fs = require("fs");
const pdfParse = require("pdf-parse");
const model = require("../config/gemini");

const uploadResume = async (req, res) => {
  try {
    const dataBuffer = fs.readFileSync(req.file.path);
    const pdfData = await pdfParse(dataBuffer);

    const prompt = `
You are an expert ATS Resume Analyzer.

Analyze the resume and respond ONLY in valid JSON.

Format:

{
  "atsScore": 85,
  "strengths": [
    "Strength 1",
    "Strength 2"
  ],
  "missingKeywords": [
    "Keyword 1",
    "Keyword 2"
  ],
  "suggestions": [
    "Suggestion 1",
    "Suggestion 2"
  ],
  "analysis": "Detailed ATS analysis in paragraph form."
}

Do not add markdown.
Do not use \`\`\`json.
Return only valid JSON.

Resume:

${pdfData.text}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const analysis = JSON.parse(response.text());
    console.log(analysis);

    res.json({
      text: pdfData.text,
      analysis,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to analyze resume",
    });
  }
};

module.exports = {
  uploadResume,
};