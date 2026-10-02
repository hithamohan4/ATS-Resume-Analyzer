function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "80px 20px",
        background: "linear-gradient(to right, #2563EB, #4F46E5)",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "50px" }}>
        AI Powered ATS Resume Analyzer
      </h1>

      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        Upload your resume and instantly receive
        ATS Score, Skill Gap Analysis,
        AI Suggestions and Job Match Percentage.
      </p>

      <button
        style={{
          marginTop: "30px",
          padding: "15px 35px",
          border: "none",
          borderRadius: "10px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        Upload Resume
      </button>
    </section>
  );
}

export default Hero;


