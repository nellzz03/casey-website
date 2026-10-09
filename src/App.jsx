import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Films from "./pages/Films";
import Story from "./pages/Story";
import Community from "./pages/Community";

import "./App.css";


function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        CASEY<span>.</span>
      </Link>

      <div className="nav-links">

        <Link to="/">
          HOME
        </Link>

        <Link to="/films">
          FILMS
        </Link>

        <Link to="/story">
          STORY
        </Link>

        <Link to="/community">
          COMMUNITY
        </Link>

      </div>

    </nav>
  );
}


function Footer() {
  return (
    <footer>

      <div className="footer-logo">
        CASEY<span>.</span>
      </div>

      <p>
        THE STORY NEVER STOPS.
      </p>

      <div className="footer-bottom">

        <span>
          © 2026
        </span>

        <span>
          BUILT WITH CURIOSITY.
        </span>

      </div>

    </footer>
  );
}


function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/films" element={<Films />} />

          <Route path="/story" element={<Story />} />

          <Route path="/community" element={<Community />} />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}


export default App;