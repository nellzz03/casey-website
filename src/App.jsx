import { BrowserRouter, Routes, Route, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

import Home from "./pages/Home";
import Films from "./pages/Films";
import Story from "./pages/Story";
import Community from "./pages/Community";

import "./App.css";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Close menu on Escape + lock body scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    if (menuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">

      <NavLink to="/" className="logo" aria-label="Casey Neistat — Home">
        CASEY<span>.</span>
      </NavLink>

      <button
        className={`menu-toggle ${menuOpen ? "active" : ""}`}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <span className="menu-bar"></span>
        <span className="menu-bar"></span>
      </button>

      <div
        id="nav-menu"
        className={`nav-links ${menuOpen ? "open" : ""}`}
      >
        <NavLink to="/" end>HOME</NavLink>
        <NavLink to="/films">FILMS</NavLink>
        <NavLink to="/story">STORY</NavLink>
        <NavLink to="/community">COMMUNITY</NavLink>
      </div>

      {menuOpen && (
        <div
          className="nav-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

    </nav>
  );
}


function Footer() {
  return (
    <footer role="contentinfo">
      <div className="footer-inner">

        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              CASEY<span>.</span>
            </div>
            <p className="footer-tagline">
              THE STORY NEVER STOPS.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/films">FILMS</NavLink>
            <NavLink to="/story">STORY</NavLink>
            <NavLink to="/community">COMMUNITY</NavLink>
          </nav>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <span className="footer-mono">© 2026</span>
          <span className="footer-mono">BUILT WITH CURIOSITY.</span>
        </div>

      </div>
    </footer>
  );
}


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="app">

        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Films />} />
            <Route path="/story" element={<Story />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}


export default App;