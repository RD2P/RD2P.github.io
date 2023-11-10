import '../styles/navbar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__wrapper">
          <h2 className="navbar__title">
            Raphael De Los Reyes
          </h2>
          {/* icons */}
          <div className="navbar__icons">
            <a
              href="https://github.com/RD2P"
              target="_blank"
              className="navbar__icon">
              <i className="devicon-github-original"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/glennraphaeldlr/"
              target="_blank"
              className="navbar__icon">
              <i className="devicon-linkedin-plain"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
};

export default NavBar;
