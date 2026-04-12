export default function ArticleList() {
  const articles = [
    {
      title: "Dual Identity Conflict in Batman: A Psychological Study",
      abstract:
        "This paper explores the internal struggle of Batman as he balances his dual identity as Bruce Wayne and Gotham’s vigilante protector. It examines trauma, moral code, isolation, and how fear shapes his identity and decisions."
    },
    {
      title: "The Evolution of Superman: From Golden Age to Modern Hero",
      abstract:
        "This study analyzes Superman’s transformation across decades, reflecting societal change, evolving moral values, and his role as both a global protector and symbol of hope."
    },
    {
      title: "Amazonian Strength: Feminism in Wonder Woman Narratives",
      abstract:
        "This article explores Wonder Woman’s representation of feminism, leadership, and compassion, highlighting her impact on gender roles and empowerment in modern storytelling."
    },
    {
      title: "Chaos vs Order: Batman and Joker",
      abstract:
        "This study explores the ideological clash between Batman and Joker, analyzing themes of morality, chaos, order, and psychological dependency."
    },
    {
      title: "Speed Beyond Physics: The Flash",
      abstract:
        "This paper examines time travel, multiverse theory, and scientific implications of super-speed through the lens of The Flash."
    },
    {
      title: "Aquaman and the Politics of Atlantis",
      abstract:
        "This article explores governance, diplomacy, and environmental themes through Aquaman’s leadership in Atlantis."
    },
    {
      title: "Green Lantern Corps: Willpower Energy",
      abstract:
        "This study examines willpower as an energy source, focusing on power rings and intergalactic law enforcement."
    },
    {
      title: "The Multiverse Theory in DC",
      abstract:
        "This paper explores parallel universes, timeline resets, and narrative complexity in DC’s multiverse storytelling."
    },
    {
      title: "Rise of Antiheroes in DC",
      abstract:
        "This article analyzes morally grey characters and their increasing popularity in modern comic narratives."
    },
    {
      title: "Justice League Dynamics",
      abstract:
        "This study examines teamwork, leadership, and conflict resolution among diverse superheroes."
    },
    {
      title: "Gotham City as a Character",
      abstract:
        "This paper explores Gotham itself as a living entity influencing crime, fear, and heroism."
    },
    {
      title: "Kryptonite: Weakness and Symbolism",
      abstract:
        "This article studies Kryptonite as both a physical weakness and symbolic limitation of Superman."
    },
    {
      title: "Time Travel Ethics in DC",
      abstract:
        "This paper analyzes ethical dilemmas caused by altering timelines and paradoxes."
    },
    {
      title: "Villain Psychology in DC Comics",
      abstract:
        "This study explores motivations, trauma, and complexity behind iconic DC villains."
    },
    {
      title: "Technology vs Humanity: Cyborg",
      abstract:
        "This article explores identity, technology integration, and human-machine balance through Cyborg."
    }
  ];

  return (
    <div className="titleCard">
      <h3 style={{ margin: "20px" }}>
        Volume 378 In progress (June 2025)
      </h3>
 {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          margin: "30px 0",
        }}
      >
        <button style={pageBtn}>Prev</button>
        <button style={pageBtnActive}>1</button>
        <button style={pageBtn}>2</button>
        <button style={pageBtn}>3</button>
        <button style={pageBtn}>Next</button>
      </div>
      <div
        className="container"
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        {articles.map((article, index) => (
          <div
            key={index}
            className="card"
            style={{
              padding: "20px",
              backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#ffffff",
              borderRadius: "8px",
            }}
          >
            <h4 style={{ marginBottom: "10px" }}>{article.title}</h4>

            <p style={{ marginBottom: "15px", color: "#555" }}>
              {article.abstract}
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              <button style={btnPrimary}>Download Article</button>
              <button style={btnOutline}>View Full Article</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          margin: "30px 0",
        }}
      >
        <button style={pageBtn}>Prev</button>
        <button style={pageBtnActive}>1</button>
        <button style={pageBtn}>2</button>
        <button style={pageBtn}>3</button>
        <button style={pageBtn}>Next</button>
      </div>
    </div>
  );
}

/* Styles */
const btnPrimary = {
  padding: "8px 12px",
  border: "none",
  backgroundColor: "#007bff",
  color: "white",
  borderRadius: "4px",
  cursor: "pointer",
};

const btnOutline = {
  padding: "8px 12px",
  border: "1px solid #007bff",
  backgroundColor: "white",
  color: "#007bff",
  borderRadius: "4px",
  cursor: "pointer",
};

const pageBtn = {
  padding: "6px 12px",
  border: "1px solid #ccc",
  backgroundColor: "white",
  cursor: "pointer",
  borderRadius: "4px",
};

const pageBtnActive = {
  ...pageBtn,
  backgroundColor: "#007bff",
  color: "white",
};