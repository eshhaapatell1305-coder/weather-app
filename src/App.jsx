import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";

const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}

      <Suspense
        fallback={
          <h2 style={{ textAlign: "center", marginTop: "100px" }}>
            Loading...
          </h2>
        }
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;