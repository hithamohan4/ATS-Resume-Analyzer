function Suggestions({ suggestions }) {
  return (
    <div
      style={{
        background: "#dbeafe",
        padding: "20px",
        borderRadius: "15px",
        marginTop: "20px",
      }}
    >
      <h2 style={{ color: "#1d4ed8", marginBottom: "15px" }}>
        💡 Suggestions
      </h2>

      {suggestions.length === 0 ? (
        <p style={{ color: "#000000" }}>
          No suggestions available.
        </p>
      ) : (
        <ul>
          {suggestions.map((item, index) => (
            <li
              key={index}
              style={{
                marginBottom: "10px",
                fontSize: "18px",
                color: "#000000"
              }}
            >
              💡 {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Suggestions;