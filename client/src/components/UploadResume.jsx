function UploadResume() {
  return (
    <section
      style={{
        padding: "60px",
        textAlign: "center",
      }}
    >
      <h2>📄 Upload Your Resume</h2>

      <div
        style={{
          border: "2px dashed #2563EB",
          borderRadius: "15px",
          padding: "50px",
          margin: "30px auto",
          maxWidth: "600px",
          background: "#F8FAFC",
        }}
      >
        <p>Drag & Drop your Resume here</p>

        <p>OR</p>

        <input type="file" accept=".pdf" />

        <br /><br />

        <button
          style={{
            padding: "12px 30px",
            background: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Analyze Resume
        </button>
      </div>
    </section>
  );
}

export default UploadResume;