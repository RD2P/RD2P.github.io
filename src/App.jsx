import { useState } from 'react'
import egypt from './assets/egypt-art.jpg'
import './styles/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to the Library</h1>
      <img className='main-image' src={egypt}/>
      <br />
      <a href="https://rd2p.github.io/samsung-calculator/">Calculator</a>
      <br />
      <a href="https://rd2p.github.io/vaultkeeper">Password Manager</a>

    </>
  )
}

export default App
