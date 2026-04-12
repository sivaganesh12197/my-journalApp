import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="card container">
      <input
        placeholder="Search journal..."
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px"
        }}
      />
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/">Home</Link>
        <Link to="/article-list">Article List</Link>
        <Link to="/publish">Publish</Link>
        <Link to="/guide">Guide</Link>
        <Link to="/submit">Submit</Link>
      </div>
    </div>
  );
}