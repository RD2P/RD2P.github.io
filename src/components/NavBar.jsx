import '../styles/navbar.css'

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <h3 className="navbar__title">Raphael De Los Reyes</h3>
        <div className="navbar__icons">
          <a href="https://github.com/RD2P" className="navbar__icon">
           <i className="fa-brands fa-square-github fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/glennraphaeldlr/" className="navbar__icon">
            <i className="fa-brands fa-linkedin  fa-lg" ></i>
          </a>
        </div>
      </nav>
    </div>
  )
};

export default NavBar;
