export default function Header() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px 20px",
      background: "white",
      borderBottom: "1px solid #ddd"
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img 
  src="images/sciencedirect.jpeg" 
  style={{ width: "70px", height: "auto" }} 
/>
        <h2 style={{ marginLeft: "10px", color: "#ff6a00" }}>
          ScienceDirect
        </h2>
      </div>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <span>My Account</span>
        <span>My Organization</span>
        <span>Browse Journals</span>
        <span>🔍</span>
      </div>
    </div>
  );
}