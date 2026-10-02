function ScoreCard({ score }) {
  let color = "#ef4444";

  if (score >= 80) color = "#22c55e";
  else if (score >= 60) color = "#facc15";

  return (
    <div
      style={{
        background: color,
        color: "white",
        padding: "30px",
        borderRadius: "15px",
        textAlign: "center",
        marginBottom: "25px",
      }}
    >
      <h2>ATS Score</h2>

      <h1 style={{ fontSize: "60px" }}>
        {score}/100
      </h1>
    </div>
  );
}

export default ScoreCard;