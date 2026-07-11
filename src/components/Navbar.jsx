import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 40px",
        background: "#4b90b5",
        color: "white",
      }}
    >
      <h2>🌤 Weather Forecast</h2>

      <div>
        <Link
          to="/home"
          style={{
            color: "white",
            textDecoration: "none",
            marginRight: "20px",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          About
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;