function StrengthCard({ strengths }) {
  return (
    <div
      style={{
        background: "#dcfce7",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "20px",
      }}
    >
      <h2 style={{ color: "#166534", marginBottom: "15px" }}>
        ✅ Strengths
      </h2>

      {strengths.length === 0 ? (
        <p style={{ color: "#000000" }}>
          No strengths detected.</p>
      ) : (
        <ul>
          {strengths.map((item, index) => (
            <li
              key={index}
              style={{
                marginBottom: "10px",
                fontSize: "18px",
                color: "#000000",
              }}
            >
              ✔ {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default StrengthCard;