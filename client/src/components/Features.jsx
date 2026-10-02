function Features() {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px,1fr))",
        gap: "20px",
        padding: "60px",
      }}
    >
      <div style={cardStyle}>
        <h2>📄 ATS Score</h2>
        <p>Check how ATS-friendly your resume is.</p>
      </div>

      <div style={cardStyle}>
        <h2>🧠 Skill Gap</h2>
        <p>Find missing skills required for the job.</p>
      </div>

      <div style={cardStyle}>
        <h2>💼 Job Match</h2>
        <p>Compare your resume with any job description.</p>
      </div>

      <div style={cardStyle}>
        <h2>✨ AI Suggestions</h2>
        <p>Improve your resume with AI-powered feedback.</p>
      </div>
    </section>
  );
}

const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  textAlign: "center",
};

export default Features;
