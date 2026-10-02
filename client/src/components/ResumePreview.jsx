function ResumePreview({ resumeText }) {
  return (
    <div style={{ marginTop: "25px" }}>
      <h2>📄 Resume Preview</h2>

      <textarea
        rows="15"
        value={resumeText}
        readOnly
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "10px",
        }}
      />
    </div>
  );
}

export default ResumePreview;