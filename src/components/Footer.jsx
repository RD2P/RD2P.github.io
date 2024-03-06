import '../styles/footer.css'
import Contact from './Contact'

const Footer = () => {
  return (
    <footer className="footer">
            <Contact />

      <div className="container">
        <div className="footer__wrapper">
          <p>Copyright @ {new Date().getFullYear()} Raphael De Los Reyes</p>

          <div className='flex'>

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
            <a
              href="https://blog.raphaeldelosreyes.com/" 
              target="_blank"
              className="social-icon white"
            >
              Blog
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer