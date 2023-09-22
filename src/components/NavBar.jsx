import '../styles/navbar.css'

const NavBar = () => {
  return (
    <header className="navbar--wrapper">
      <div className="navbar">
        <h3 className="navbar--title">Raphael De Los Reyes</h3>
        <div className="navbar--icons">
          <a href="https://github.com/RD2P" className="social">
           <i className="fa-brands fa-square-github fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/glennraphaeldlr/" className="social">
            <i className="fa-brands fa-linkedin  fa-lg" ></i>
          </a>
        </div>
      </div>
    </header>
  )
};

export default NavBar;
