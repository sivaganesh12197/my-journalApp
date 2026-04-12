import { useState } from "react";

const editors = [
  {
    name: "Batman",
    image: "images/btman.jpeg",
  },
  {
    name: "Superman",
    image: "images/superman.jpeg",
  },
  {
    name: "Wonder Woman",
    image: "images/wonderwomen.jpeg",
  },
  {
    name: "Flash",
    image: "images/flash.jpeg",
  },
  {
    name: "Aquaman",
    image: "images/aquaman.jpeg",
  },
  {
    name: "Darkseid",
    image: "images/darkshied.jpeg",
  },
];

export default function Editors() {
  const [index, setIndex] = useState(0);

  const visibleEditors = editors.slice(index, index + 3);

  const next = () => {
    if (index + 3 < editors.length) {
      setIndex(index + 3);
    }
  };

  const prev = () => {
    if (index - 3 >= 0) {
      setIndex(index - 3);
    }
  };

  return (
    <div style={{ backgroundImage: "url('images/banner.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }} className="container card">
      <h3>Editors</h3>

      <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
        
        {/* Left Arrow */}
        <button onClick={prev} disabled={index === 0}>
          ◀
        </button>

        {/* Editors */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            margin: "0 20px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {visibleEditors.map((editor, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              
              {/* ✅ Dynamic Image */}
              <img
                src={editor.image}
                alt={editor.name}
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />

              {/* ✅ Correct name */}
              <p style={{ marginTop: "10px" }}>{editor.name}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          disabled={index + 3 >= editors.length}
        >
          ▶
        </button>
      </div>
    </div>
  );
}