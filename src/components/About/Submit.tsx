export default function Submit() {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "20px",
      }}
    >
      {/* Header */}
      <div className="card" style={{ padding: "20px" }}>
        <h2>Submit Your Article</h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          Contribute to the DC Comics Journal by submitting your research on
          comic narratives, character analysis, or fictional science. Follow the
          guidelines below to ensure a smooth submission process.
        </p>
      </div>

      {/* Submission Steps */}
      <div className="card" style={{ padding: "20px" }}>
        <h3>📝 Submission Process</h3>
        <ol style={{ lineHeight: "1.8" }}>
          <li>Prepare your manuscript with title and abstract</li>
          <li>Ensure formatting follows journal guidelines</li>
          <li>Upload your article document (PDF/Word)</li>
          <li>Provide author details and keywords</li>
          <li>Submit for review and wait for approval</li>
        </ol>
      </div>

      {/* Guidelines */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div className="card" style={{ flex: 1, padding: "20px" }}>
          <h3>📄 Author Guidelines</h3>
          <ul>
            <li>Minimum 500 words abstract</li>
            <li>Clear structure with headings</li>
            <li>Include references if applicable</li>
            <li>Original and plagiarism-free content</li>
          </ul>
        </div>

        <div className="card" style={{ flex: 1, padding: "20px" }}>
          <h3>⚙️ Accepted Topics</h3>
          <ul>
            <li>DC character analysis</li>
            <li>Multiverse and timelines</li>
            <li>Comic-based psychology</li>
            <li>Fictional science & technology</li>
          </ul>
        </div>
      </div>

      {/* Submission Form */}
      <div className="card" style={{ padding: "20px" }}>
        <h3>📤 Submit Your Manuscript</h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <input
            type="text"
            placeholder="Article Title"
            style={inputStyle}
          />

          <textarea
            placeholder="Abstract"
            rows={4}
            style={inputStyle}
          />

          <input
            type="text"
            placeholder="Author Name"
            style={inputStyle}
          />

          <input
            type="file"
            style={inputStyle}
          />

          <button style={submitBtn}>Submit Article</button>
        </div>
      </div>

      {/* Note */}
      <div className="card" style={{ padding: "20px" }}>
        <h3>📌 Note</h3>
        <p style={{ color: "#555" }}>
          This is a demo submission system for hackathon purposes. No actual
          submission or review process is performed.
        </p>
      </div>
    </div>
  );
}

/* Styles */
const inputStyle = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const submitBtn = {
  padding: "10px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};