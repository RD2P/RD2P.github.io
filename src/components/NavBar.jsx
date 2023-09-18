import '../styles/navbar.css'

const NavBar = () => {
  return (
    <header className="navbar">
      <nav>
        <a href="https://rd2p.github.io/">Home</a>
        <a href="#/">Work</a>
      </nav>
      <h3 className="name">Raphael De Los Reyes</h3>
      <div className="socials-icons">
        <a href="https://github.com/RD2P" className="social"> 
         <i className="fa-brands fa-square-github fa-lg"></i>
        </a>
        <a href="https://www.linkedin.com/in/glennraphaeldlr/" className="social"> 
          <i className="fa-brands fa-linkedin  fa-lg"></i>
        </a>
      </div>
    </header>
  )
};

export default NavBar;
