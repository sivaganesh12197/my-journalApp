export default function Guide() {
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
        <h2>Guide for Authors</h2>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          This guide provides detailed instructions for authors who wish to
          submit their work to the DC Comics Journal. Please follow these
          guidelines carefully to ensure your manuscript meets publication
          standards.
        </p>
      </div>

      {/* Manuscript Structure */}
      <div className="card" style={{ padding: "20px" }}>
        <h3>📄 Manuscript Structure</h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li><strong>Title:</strong> Clear and descriptive</li>
          <li><strong>Abstract:</strong> Minimum 150–300 words</li>
          <li><strong>Keywords:</strong> 4–6 relevant keywords</li>
          <li><strong>Introduction:</strong> Background and purpose</li>
          <li><strong>Methodology / Analysis:</strong> Core content</li>
          <li><strong>Conclusion:</strong> Summary and insights</li>
        </ul>
      </div>

      {/* Formatting Guidelines */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div className="card" style={{ flex: 1, padding: "20px" }}>
          <h3>✍️ Formatting Guidelines</h3>
          <ul>
            <li>Font: Arial / Times New Roman</li>
            <li>Font Size: 12pt</li>
            <li>Line Spacing: 1.5</li>
            <li>Use proper headings and subheadings</li>
            <li>Include figure/table captions if applicable</li>
          </ul>
        </div>

        <div className="card" style={{ flex: 1, padding: "20px" }}>
          <h3>📚 References</h3>
          <ul>
            <li>Use APA or IEEE citation style</li>
            <li>Ensure all sources are properly cited</li>
            <li>Avoid plagiarism (strict policy)</li>
            <li>Include DOIs if available</li>
          </ul>
        </div>
      </div>

      {/* Submission Checklist */}
      <div className="card" style={{ padding: "20px" }}>
        <h3>✅ Submission Checklist</h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li>✔ Manuscript follows journal format</li>
          <li>✔ Abstract and keywords included</li>
          <li>✔ Author details provided</li>
          <li>✔ Figures and tables properly labeled</li>
          <li>✔ File is in PDF or DOC format</li>
        </ul>
      </div>

      {/* Review Process */}
      <div className="card" style={{ padding: "20px" }}>
        <h3>🔍 Review Process</h3>
        <p style={{ color: "#555", lineHeight: "1.6" }}>
          All submissions undergo a simulated peer-review process. Articles are
          evaluated based on clarity, originality, structure, and relevance to
          DC Comics research themes. Authors may receive feedback and revision
          requests before final acceptance.
        </p>
      </div>

      {/* Ethics */}
      <div className="card" style={{ padding: "20px" }}>
        <h3>⚖️ Publication Ethics</h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li>No plagiarism or duplicate submissions</li>
          <li>Maintain originality in content</li>
          <li>Properly acknowledge all contributors</li>
          <li>Avoid misleading or false information</li>
        </ul>
      </div>

      {/* CTA */}
      <div
        className="card"
        style={{
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h3>🚀 Ready to Submit?</h3>
        <p style={{ color: "#555" }}>
          Ensure your article meets all guidelines before submission. Click
          below to proceed to the submission page.
        </p>

        <button
          style={{
            marginTop: "10px",
            padding: "10px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Go to Submission
        </button>
      </div>
    </div>
  );
}