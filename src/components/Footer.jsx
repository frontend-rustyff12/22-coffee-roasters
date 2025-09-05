import { NavLink } from "react-router";
export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div>
          <img
            className="footer-logo"
            src="/shared/desktop/logo_footer.svg"
            alt="Coffee Roasters company logo"
          />
        </div>
        <nav>
          <ul className="footer-nav">
            <li className="footer-menu-item">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li className="footer-menu-item">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li className="footer-menu-item">
              <NavLink
                to="/subscribe"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Create your plan
              </NavLink>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="footer-nav-socials">
            <li className="footer-menu-item-socials">
              <a
                href="www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/shared/desktop/icon-facebook.svg"
                  alt="Facebook link"
                />
              </a>
            </li>
            <li className="footer-menu-item-socials">
              <a
                href="www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/shared/desktop/icon-twitter.svg"
                  alt="Twitter link"
                />
              </a>
            </li>
            <li className="footer-menu-item-socials">
              <a
                href="www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/shared/desktop/icon-instagram.svg"
                  alt="Instagram link"
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
