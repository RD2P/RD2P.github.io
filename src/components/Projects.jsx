import '../styles/projects.css'
import Card from './Card.jsx'
import fox from "../assets/fox.png"
import hexnote from "../assets/hexnote.png"
import vaultkeeper from "../assets/vaultkeeper.png";
import pathoscan from "../assets/pathoscan.png"
import calculator from "../assets/calculator.png";
import spellingbee from "../assets/spellingbee.png";
import emperors from "../assets/emperors.png";

const Projects = () => {

  return (
    <>
      <div className="container">
        <h2 className="projects__title">Projects</h2>
      </div>
      <div className="container">
        <div className="project__rows">

          {/* Spelling Bee */}
          <section className="project__row">
            <div className="card--wrapper card--wide">
              <Card
                link="https://spellingbee.onrender.com/"
                image={spellingbee}
                title="Spelling Bee"
              />
            </div>
            <div className="project-description">
              <div className="description-text">
                <p>A game in which the user has the POV of being in a spellingbee. Both the frontend and backend are deployed on <a href="https://render.com/" target="_blank">Render</a> and the database instance is deployed on <a href="https://www.mongodb.com/atlas" target="_blank">MongoDB Atlas</a></p>
                <p className="tech-used">Frontend: React Tailwind</p>
                <p className="tech-used">Backend: Node Express MongoDB</p>
              </div>
              <div className="card__buttons">
                <a className="card__button" href="https://spellingbee.onrender.com/" target="_blank">
                  SITE
                </a>
                <a className="card__button" href="https://github.com/RD2P/spellingbee-frontend" target="_blank">FRONTEND</a>
                <a className="card__button" href="https://github.com/RD2P/spellingbee-backend" target="_blank">BACKEND</a>
              </div>
            </div>
          </section>

          {/* Emperors */}
          <section className="project__row">
            <div className="card--wrapper card--wide">
              <Card
                link="https://emperors-tkuh.onrender.com/"
                image={emperors}
                title="Emperors"
              />
            </div>
            <div className="project-description">
              <div className="description-text">
                <p>A full stack web app presenting Roman Emperors during the Julio Claudian Dynasty. It's a Flask app deployed on <a href="https://render.com/" target="_blank">Render</a> driven by a MySQL database deployed on <a href="https://planetscale.com/" target="_blank">PlanetScale</a>.</p>
                <p className="tech-used">Python, Flask</p>
                <p className="tech-used">MySQL</p>
                <p className="tech-used">sqlalchemy, mysql-connector-python</p>
              </div>
              <div className="card__buttons">
                <a className="card__button" href="https://emperors-tkuh.onrender.com/" target="_blank">
                  DEMO
                </a>
                <a className="card__button" href="https://github.com/RD2P/emperors" target="_blank">CODE</a>
                <a className="card__button" href="https://github.com/RD2P/emperors/blob/master/readme.md" target="_blank">LEARN MORE</a>
              </div>
            </div>
          </section>

          {/* Valiant Fox Soul */}
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

          {/* Hex Note */}
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
                <a className="card__button" href="https://github.com/RD2P/HexNote" target="_blank">
                  CODE
                </a>
                <a className="card__button" href="https://github.com/RD2P/HexNote/blob/master/README.md" target="_blank">
                  LEARN MORE
                </a>
              </div>
            </div>
          </section>

          {/* Vault Keeper */}
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
                <p>A small project cloning the hero section of the <a href="https://www.pathoscan.com/">PathoScan website</a> for quick practice with Bootstrap.</p><br />
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