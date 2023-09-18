import '../styles/projects.css'
import Card from './Card.jsx'
import calculator from "../assets/calculator.png";
import vaultkeeper from "../assets/vaultkeeper.png";

const Projects = () => {
  return(
    <>
      <h2 className="projects-title">Projects</h2>
   
      <article className="card-container">
          <section className="card-wrapper">
            <Card
              link="https://rd2p.github.io/vaultkeeper"
              image={vaultkeeper}
              title="Vault Keeper"
              />
          </section>
        </article>

        <article className="card-container">
          <section className="card-wrapper">
            <Card
              link="https://rd2p.github.io/samsung-calculator/"
              image={calculator}
              title="Calculator"
            />
          </section>
        </article>  
    </>
  )
}

export default Projects