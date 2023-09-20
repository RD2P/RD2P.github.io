import '../styles/projects.css'
import Card from './Card.jsx'
import calculator from "../assets/calculator.png";
import vaultkeeper from "../assets/vaultkeeper.png";

const Projects = () => {
  return(
    <>
      <h2 className="projects--title">Projects</h2>
   
      <div className="projects--container">
   
        <section className="project--row">
          <div className="card--wrapper card--vaultkeeper">
            <Card
              link="https://rd2p.github.io/vaultkeeper"
              image={vaultkeeper}
              title="Vault Keeper"
              />
          </div>
          <div className="project-description">
            <p>A password manager which uses a custom cipher.</p>
            <p className="tech-used">React</p>
          </div>
        </section>

        <section className="project--row">
          <div className="card--wrapper card--calculator">
            <Card
              link="https://rd2p.github.io/samsung-calculator/"
              image={calculator}
              title="Calculator"
            />
          </div>
          <div className="project-description">
            <p>An implementation of Samsung's calculator app.</p>
            <p className="tech-used">HTML CSS JavaScript</p>
          </div>
        </section>
      
      </div> 
    </>
  )
}

export default Projects