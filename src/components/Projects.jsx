import '../styles/projects.css'
import Card from './Card.jsx'
import calculator from "../assets/calculator.png";
import vaultkeeper from "../assets/vaultkeeper.png";

const Projects = () => {
  return(
    <>
        <div className="container">
          <h2 className="projects__title">Projects</h2>
        </div>
      <div className="container">
          <div className="project__rows">
            <section className="project__row">
              <div className="card--wrapper card--vaultkeeper">
                <Card
                  link="https://rd2p.github.io/vaultkeeper"
                  image={vaultkeeper}
                  title="Vault Keeper"
                  />
              </div>
              <div className="project-description">
                <div className="description-text">
                  <p>A password manager which uses a custom cipher.</p>
                  <p className="tech-used">React</p>
                </div>
                <div className="card__buttons">
                  <a className="card__button" href="https://rd2p.github.io/vaultkeeper/" target="_blank">DEMO</a>
                  <a className="card__button" href="https://github.com/RD2P/vaultkeeper" target="_blank">CODE</a>
                </div>
              </div>
            </section>
            <section className="project__row">
              <div className="card--wrapper card--calculator">
                <Card
                  link="https://rd2p.github.io/samsung-calculator/"
                  image={calculator}
                  title="Calculator"
                />
              </div>
              <div className="project-description">
                <div className="description-text">
                  <p>An implementation of Samsung's calculator app.</p>
                  <p className="tech-used">HTML CSS JavaScript</p>
                </div>
                <div className="card__buttons">
                  <a className="card__button" href="https://rd2p.github.io/samsung-calculator/" target="_blank">DEMO</a>
                  <a className="card__button" href="https://github.com/RD2P/samsung-calculator" target="_blank">CODE</a>
                </div>
              </div>
            </section>
          </div>
        
      </div>
    </>
  )
}

export default Projects