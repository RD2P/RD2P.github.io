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
            <div>
              <div className="hero__text">
                <p className="about-me-txt">Hi, I'm Raphael.<br/>I like learning and building things with code. Check out some of my work below!</p>
              </div>
          </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
