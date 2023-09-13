import calculator from "./assets/calculator.png";
import vaultkeeper from "./assets/vaultkeeper.png";
import "./styles/style.css";
import Card from "./components/card";

function App() {
  return (
    <>
      <h1>Welcome to the Library</h1>

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
  );
}

export default App;
