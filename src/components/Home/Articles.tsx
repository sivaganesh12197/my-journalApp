export default function Articles() {
  const articles = [
    {
      title: "Dual Identity Conflict in Batman: A Psychological Study",
      abstract:
        "This paper explores the internal struggle of Batman as he balances his role as Bruce Wayne and Gotham’s vigilante..."
    },
    {
      title: "The Evolution of Superman: From Golden Age to Modern Hero",
      abstract:
        "This study examines how Superman has evolved across decades, reflecting societal changes..."
    },
    {
      title: "Speed Beyond Physics: A Study of The Flash",
      abstract:
        "This paper explores time manipulation and the scientific implications of super-speed..."
    }
  ];

  return (
    <div className="container card">
      <h2 style={{ marginBottom: "20px" }}>Recently Published</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        {articles.map((article, i) => (
          <div
            key={i}
            style={{
              flex: "1",
              minWidth: "250px",
              background: "#f9fafb",
              padding: "20px",
              borderRadius: "10px",
              border: "1px solid #eee",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
            }}
          >
            <h4 style={{ marginBottom: "10px" }}>
              {article.title}
            </h4>

            <p style={{ color: "#555", fontSize: "14px" }}>
              {article.abstract}
            </p>

            <button
              style={{
                marginTop: "15px",
                padding: "8px 12px",
                background: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px"
              }}
            >
              Read More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}