import { useState } from 'react'
import egypt from './assets/egypt-art.jpg'
import './styles/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to the Library</h1>
      
      <div className="grid-container">
        <div className="card"><img className='main-image' src={egypt}/></div>
        <div className="card"><a href="https://rd2p.github.io/samsung-calculator/">Calculator</a></div>
        <div className="card"><a href="https://rd2p.github.io/vaultkeeper">Password Manager</a></div>
      </div>
      

    </>
  )
}

export default App
