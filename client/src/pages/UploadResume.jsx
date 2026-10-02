import { useState } from "react";
import axios from "axios";
import ScoreCard from "../components/ScoreCard";
import StrengthCard from "../components/StrengthCard";
import MissingSkills from "../components/MissingSkills";
import Suggestions from "../components/Suggestions";
import ResumePreview from "../components/ResumePreview";
import "../App.css";
import{

FaUpload,

FaFileAlt,

FaCheckCircle,

FaTimesCircle,

FaLightbulb,

FaRobot,

FaChartPie

}

from "react-icons/fa";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [resumeText, setResumeText] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [score, setScore] = useState(0);

  const [strengths, setStrengths] = useState([]);
  const [missingKeywords, setMissingKeywords] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    console.log("Uploading button clicked:");
    if (!file) {
      alert("Please select a PDF");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);

      const res = await axios.post(
        "https://ats-resume-analyzer-1-39m3.onrender.com",
        formData
      );
console.log(res.data);

      setResumeText(res.data.text);

      setAnalysis(res.data.analysis.analysis);

      setScore(res.data.analysis.atsScore);   

      setStrengths(res.data.analysis.strengths);

      setMissingKeywords(res.data.analysis.missingKeywords);

      setSuggestions(res.data.analysis.suggestions);
    } catch (err) {
      console.error(err);
      alert("Upload Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div
    style={{
      maxWidth: "1200px",
      margin: "40px auto",
      padding: "20px"
    }}
  >
    <div
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >

  <h1
style={{
fontSize:"48px",
fontWeight:"700",
textAlign:"center",
marginBottom:"10px",
background:
"linear-gradient(90deg,#3B82F6,#7C3AED,#22C55E)",
WebkitBackgroundClip:"text",
WebkitTextFillColor:"transparent"
}}
>
AI ATS Resume Analyzer
</h1>

<p
style={{
textAlign:"center",
color:"#94A3B8",
marginBottom:"40px"
}}
>
Upload • Analyze • Improve • Get Hired
</p>

  <div 
    className="glass"
    style={{
      background: "#2563eb",
      color: "black",
      border: "none",
      padding: "10px 20px",
      borderRadius: "8px",
      cursor: "pointer",
    
    }}
  >
    <input
      type="file"
      onChange={(e) => setFile(e.target.files[0])}
    />

    <button 
      onClick={handleUpload}
      style={{
      padding:"12px 28px",

      border:"none",

      borderRadius:"12px",

      background:

      "linear-gradient(90deg,#2563EB,#7C3AED)",

      color:"black",

      fontWeight:"600",

      cursor:"pointer",

      transition:".3s"

}}

>

Upload Resume

    </button>
  </div>

  {resumeText && <ResumePreview resumeText={resumeText} />}

{score > 0 && <ScoreCard score={score} />}

{strengths.length > 0 && (
  <StrengthCard strengths={strengths} />
)}

{missingKeywords.length > 0 && (
  <MissingSkills missingKeywords={missingKeywords} />
)}

{suggestions.length > 0 && (
  <Suggestions suggestions={suggestions} />
)}

  {analysis && (
    <div style={{ marginTop: "25px" }}>
      <h2>Full ATS Analysis</h2>

      <textarea
        rows="15"
        value={analysis}
        readOnly
        style={{
          width: "100%",
          background: "#ffffff",
          color: "black",
          border: "1px solid #444",
          borderRadius: "10px",
          padding: "10px",
  }}
/>
    </div>
  )}
</div>
</div>
  );
}
 export default UploadResume;
