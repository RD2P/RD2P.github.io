import "../styles/hero.css"
import rafpic from '../assets/raf.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="prof-pic-wrapper">
        <img src={rafpic} className="prof-pic"></img>
      </div>
      <div className="about-me-wrapper">
        <p className="about-me-txt">Hi, I'm Raphael. I am an Engineering student at the University of Victoria. I have a strong passion for web development with experience in HTML, CSS, JavaScript, React, and React Native. I have completed several projects (check them out below!), and I'm still learning a little more each day. <br/><br/>Thank you for visiting!</p>
      </div>
    </section>
  );
};

export default Hero;
