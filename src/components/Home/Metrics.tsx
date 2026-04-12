export default function Metrics() {
  const data = [
    {
      label: "Submission to first decision",
      value: "10 days"
    },
    {
      label: "Submission to acceptance",
      value: "25 days"
    },
    {
      label: "Acceptance to publication",
      value: "7 days"
    }
  ];

  return (
    <div className="container card">
      <h2 style={{ marginBottom: "20px" }}>Metrics</h2>

      <div style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        {data.map((item, i) => (
          <div key={i} style={{
            flex: "1",
            minWidth: "200px",
            background: "#f9fafb",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            border: "1px solid #eee"
          }}>
            <div style={{
              fontSize: "28px",
              fontWeight: "bold",
              color: "#007bff"
            }}>
              {item.value}
            </div>

            <div style={{
              marginTop: "10px",
              color: "#555"
            }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>

      <button style={{
        marginTop: "20px",
        padding: "10px 15px",
        background: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px"
      }}>
        View all insights
      </button>
    </div>
  );
}