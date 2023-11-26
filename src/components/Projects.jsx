import '../styles/projects.css'
import Card from './Card.jsx'
import fox from "../assets/fox.png"
import hexnote from "../assets/hexnote.png"
import vaultkeeper from "../assets/vaultkeeper.png";
import pathoscan from "../assets/pathoscan.png"
import calculator from "../assets/calculator.png";

const Projects = () => {

  return (
    <>
      <div className="container">
        <h2 className="projects__title">Projects</h2>
      </div>
      <div className="container">
        <div className="project__rows">
          <section className="project__row">
            <div className="card--wrapper card--wide">
              <Card
                link="https://valiantfoxsoul.com/"
                image={fox}
                title="valiantfoxsoul.com"
              />
            </div>
            <div className="project-description">
              <div className="description-text">
                <p>A website (wip!) for an artist starting to build her brand. Coming up will be a store with <a href="https://stripe.com/en-ca" target="_blank">stripe</a> payments.</p>
                <p className="tech-used">React CSS (Tailwind)</p>
              </div>
              <div className="card__buttons">
                <a className="card__button" href="https://valiantfoxsoul.com/" target="_blank">
                  Site
                </a>
              </div>
            </div>
          </section>
          <section className="project__row">
            <div className="card--wrapper card--wide">
              <Card
                link=""
                image={hexnote}
                title="Hex Note"
              />
            </div>
            <div className="project-description">
              <div className="description-text">
                <p>A full-stack web application that allows you to create hex-encoded notes and save them in your computer.</p>
                <p className="tech-used">Node Express React</p>
              </div>
              <div className="card__buttons">
                <a className="card__button disabled-button tooltip" // href="#"
                  target="_blank" >
                  <span className="tooltiptext">In progress 🙂</span>
                  DEMO
                </a>
                <a className="card__button" href="https://github.com/RD2P/HexNote" target="_blank">
                  CODE
                </a>
                <a className="card__button" href="https://github.com/RD2P/HexNote/blob/master/README.md" target="_blank">
                  LEARN MORE
                </a>
              </div>
            </div>
          </section>
          <section className="project__row">
            <div className="card--wrapper card--wide">
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
                <a className="card__button" href="https://github.com/RD2P/vaultkeeper/blob/main/README.md" target="_blank">
                  LEARN MORE
                </a>
              </div>
            </div>
          </section>

          {/* PathoScan clone */}
          <section className="project__row">
            <div className="card--wrapper card--wide">
              <Card
                link="https://peaceful-babka-405f29.netlify.app/"
                image={pathoscan}
                title="PathoScan Clone"
              />
            </div>
            <div className="project-description">
              <div className="description-text">
                <p>A small project cloning the hero section of the <a href="https://www.pathoscan.com/">PathoScan website</a> for quick practice with Bootstrap.</p><br/>
                <p>Written in React, built with Vite, and deployed on Netlify.</p>
                <p className="tech-used">React Bootstrap</p>
              </div>
              <div className="card__buttons">
                <a className="card__button" href="https://peaceful-babka-405f29.netlify.app/" target="_blank">
                  DEMO
                </a>
                <a className="card__button" href="https://github.com/RD2P/pathoscan-clone" target="_blank">
                  CODE
                </a>
                <a className="card__button" href="https://github.com/RD2P/pathoscan-clone/blob/master/README.md" target="_blank">
                  LEARN MORE
                </a>
              </div>
            </div>
          </section>

          {/* Calculator */}
          <section className="project__row">
            <div className="card--wrapper card--narrow">
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
                <a className="card__button" href="https://github.com/RD2P/samsung-calculator/blob/master/README.md" target="_blank">
                  LEARN MORE
                </a>
              </div>
            </div>
          </section>
        </div>

      </div>
    </>
  )
}

export default Projects