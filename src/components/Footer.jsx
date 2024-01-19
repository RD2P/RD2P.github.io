import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <p>@{new Date().getFullYear()} Raphael De Los Reyes</p>

          <div>
            <a
              href="https://www.linkedin.com/in/glennraphaeldlr/" target="_blank"
              className="social-icon"
            >
              <i className="devicon-linkedin-plain white"></i>
            </a>
            <a
              href="https://github.com/RD2P"
              target="_blank"
              className="social-icon"
            >
              <i className="devicon-github-original white"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer