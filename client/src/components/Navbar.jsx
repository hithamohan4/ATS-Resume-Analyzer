function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 60px",
        background: "#1E3A8A",
        color: "white",
      }}
    >
      <h2>ATS Resume Analyzer</h2>

      <div>
        <button
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Upload Resume
        </button>
      </div>
    </nav>
  );
}

export default Navbar;