import { useState } from 'react'
import egypt from './assets/egypt-art.jpg'
import calculator from './assets/calculator.png'
import vaultkeeper from './assets/vaultkeeper.png'
import './styles/style.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <h1>Welcome to the Library</h1>
      
      <div className="grid-container">
        <div className="card"><img className='card-image' src={egypt}/></div>
        <div className="card"><a href="https://rd2p.github.io/samsung-calculator/"><img className="card-image" src={calculator}></img></a></div>
        <div className="card"><a href="https://rd2p.github.io/vaultkeeper"><img className="card-image" src={vaultkeeper}></img></a></div>
      </div>
      

    </>
  )
}

export default App
