export default function AboutSection() {
  return (
    <div className="container" style={{ display: "flex", gap: "20px" }}>
      
      <div className="card" style={{ flex: 1 }}>
        <h3>About the Journal</h3>
        <p>
          DC Comics is one of the largest and oldest comic book publishers in the world.
It was founded in 1934 and is known for shaping the superhero genre.
Iconic characters like Superman, Batman, and Wonder Woman come from DC.
Its stories often explore justice, morality, and complex hero identities.
DC is also part of Warner Bros. Discovery, expanding into movies and TV.
The DC Universe connects many heroes and stories together.
        </p>
      </div>

      <div className="card" style={{ flex: 1 }}>
        <h3>Publishing Charges</h3>
        <p>Article Publishing Charge: $1500</p>
      </div>

    </div>
  );
}