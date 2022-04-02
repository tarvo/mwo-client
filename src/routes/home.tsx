import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Home</h2>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">App</Link>
        <br />
        <Link to="/home">Home</Link>
        <br />
        <Link to="/monitoring">Monitoring</Link>
      </nav>
    </main>
  );
}
