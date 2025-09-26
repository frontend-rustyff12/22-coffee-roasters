import { useState, useEffect } from "react";
import { NavLink } from "react-router";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header>
      <nav>
        <img
          src="/shared/desktop/logo.svg"
          alt="Coffee Roasters company logo"
        />

        {isMobile ? (
          !isMenuOpen ? (
            <button onClick={toggleMenu}>
              <img src="/shared/mobile/icon-hamburger.svg" alt="" />
            </button>
          ) : (
            <>
              <button onClick={toggleMenu}>
                <img src="/shared/mobile/icon-close.svg" alt="" />
              </button>

              <ul className="mobile-menu">
                <li className="menu-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to="/about"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    About
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    to="/subscribe"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Create your plan
                  </NavLink>
                </li>
              </ul>
            </>
          )
        ) : (
          <ul className="large-menu">
            <li className="menu-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li className="menu-item">
              <NavLink
                to="/subscribe"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Create your plan
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
