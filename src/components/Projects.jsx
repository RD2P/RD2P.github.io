import '../styles/projects.css'
import Card from './Card.jsx'
import calculator from "../assets/calculator.png";
import vaultkeeper from "../assets/vaultkeeper.png";

const Projects = () => {
  return(
    <>
      <h2 className="projects-title">Projects</h2>
      <section className="grid-container">
        <Card
          link="https://rd2p.github.io/samsung-calculator/"
          image={calculator}
          title="Calculator"
        />

        <Card
          link="https://rd2p.github.io/vaultkeeper"
          image={vaultkeeper}
          title="Vault Keeper"
        />
      </section>
    </>
  )
}

export default Projects