export default function ArticleContent() {
  return (
    <div style={card}>
      <h1>AI-driven Test Case Optimization</h1>

      <p style={{ color: "#555", marginTop: "10px" }}>
        Siva Ganesh, John Doe
      </p>

      <div style={{ marginTop: "15px" }}>
        <button style={btn}>Download PDF</button>
        <button style={btn}>View Full Text</button>
      </div>

      <h3 style={{ marginTop: "20px" }}>Abstract</h3>
      <p>
        This paper demonstrates how Git-based code changes can be used to
        selectively execute test cases, improving efficiency and reducing
        execution time.
      </p>
    </div>
  );
}

const card = {
  background: "white",
  padding: "20px",
  margin: "20px",
  borderRadius: "10px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

const btn = {
  padding: "8px 12px",
  marginRight: "10px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
};