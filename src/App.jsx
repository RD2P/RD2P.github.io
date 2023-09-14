import Card from "./components/Card";
import NavBar from "./components/NavBar";

import calculator from "./assets/calculator.png";
import vaultkeeper from "./assets/vaultkeeper.png";
import egyptArt from "./assets/egypt-art.jpg";

import "./styles/style.css";

function App() {
  return (
    <>
      <NavBar />
      {/* <img src={egyptArt} width="300px" /> */}
      <h1>Hi </h1>
      {/* <section className="grid-container">
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
      </section> */}
    </>
  );
}

export default App;
