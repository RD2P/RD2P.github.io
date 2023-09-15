import "../styles/hero.css"
import egyptArt from "../assets/egypt-art.jpg";
import rafpic from '../assets/raf.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="prof-pic-wrapper">
        <img src={rafpic} className="prof-pic"></img>
      </div>
      <div className="about-me-wrapper">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, voluptatem dolores quibusdam natus voluptate, et ut in itaque odio atque illo soluta repellendus quae? Et error nesciunt eaque. Corrupti, asperiores.</p>
      </div>
    </section>
  );
};

export default Hero;
