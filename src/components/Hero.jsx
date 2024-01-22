import "../styles/hero.css"
import rafpic from '../assets/raf.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__image">
            <img src={rafpic} className="prof-pic"></img>
          </div>
          <div className="hero__text__wrapper">
            <div className="hero__text">
              <p className="about-me-txt">Hi, I'm Raphael.<br />I like learning and building things with code. Check out some of my work below!</p>

              <div>
                <a
                  href="https://www.linkedin.com/in/glennraphaeldlr/" target="_blank"
                  className="social-icon"
                >
                  <i className="devicon-linkedin-plain"></i>
                </a>
                <a
                  href="https://github.com/RD2P"
                  target="_blank"
                  className="social-icon"
                >
                  <i className="devicon-github-original"></i>
                </a>
                <a
                  href="https://blog.raphaeldelosreyes.com/"
                  target="_blank"
                  className="social-icon"
                >
                  Blog
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
