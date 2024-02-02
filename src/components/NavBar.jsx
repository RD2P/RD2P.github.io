import '../styles/navbar.css'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__wrapper">

          <h2 className="navbar__title">
            Raphael De Los Reyes
          </h2>

          {/* links */}
          <div>
            <Link
              to="/"
              className="navbar__link ">
              Home
            </Link>
            <Link
              to="/resume"
              className="navbar__link ">
              Resume
            </Link>
          </div>

          {/* Icons */}
          <div className="navbar__icons">
            <a
              href="https://blog.raphaeldelosreyes.com/"
              target="_blank"
              className="navbar__link ">
              Blog
            </a>
            <a
              href="https://github.com/RD2P"
              target="_blank"
              className="navbar__link">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/glennraphaeldlr/"
              target="_blank"
              className="navbar__link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default NavBar;
