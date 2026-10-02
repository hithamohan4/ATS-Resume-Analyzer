function MissingSkills({ missingKeywords }) {
  return (
    <div
      style={{
        background: "#fee2e2",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "20px",
      }}
    >
      <h2 style={{ color: "#b91c1c", marginBottom: "15px" }}>
        ❌ Missing Keywords
      </h2>

      {missingKeywords.length === 0 ? (
        <p style={{ color: "#000000" }}>
          No missing keywords.
        </p>
      ) : (
        <ul>
          {missingKeywords.map((item, index) => (
            <li
              key={index}
              style={{
                marginBottom: "10px",
                fontSize: "18px",
                color: "#000000",
              }}
            >
              ✖ {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MissingSkills;