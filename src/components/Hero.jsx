import "../styles/hero.css"
import rafpic from '../assets/raf.jpg'

const Hero = () => {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero__image">
          <img src={rafpic} className="prof-pic"></img>
        </div>
        <div>
          <div className="hero__text">
            <p className="about-me-txt">Hi, I'm Raphael.<br/>I like tinkering and building things with code. Check out some of my work below!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
