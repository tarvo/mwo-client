import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
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
      <p>VITE_API_URL: {import.meta.env.VITE_API_URL}</p>
      <p>VITE_APP_TITLE: {import.meta.env.VITE_APP_TITLE}</p>

      <p>MODE: {import.meta.env.MODE}</p>
      <p>BASE_URL: {import.meta.env.BASE_URL}</p>
      <p>DEV: {import.meta.env.DEV}</p>
    </div>
  );
}

export default App;
