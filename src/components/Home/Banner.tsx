import banner from "../../../images/banner.jpeg";
import journalCover from "../../../images/cover.jpeg"; // add your logo image

export default function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "60px 40px",
        color: "white",
      }}
    >
      {/* MAIN FLEX CONTAINER */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* LEFT SIDE: IMAGE + TITLE */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          
          {/* JOURNAL COVER IMAGE */}
          <img
            src={journalCover}
            alt="journal cover"
            style={{
              width: "120px",
              height: "150px",
              objectFit: "cover",
              borderRadius: "4px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
              background: "white"
            }}
          />

          {/* TITLE + SUBTITLE */}
          <div>
            <h1 style={{ margin: 0, fontSize: "36px" }}>
              DC Comics Journal
            </h1>

            <p style={{ marginTop: "8px", fontSize: "16px" }}>
              Supports open access
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: METRIC */}
        <div style={{ textAlign: "right" }}>
          <h2 style={{ margin: 0 }}>18.1</h2>
          <p style={{ margin: 0 }}>CiteScore</p>
        </div>
      </div>
    </div>
  );
}