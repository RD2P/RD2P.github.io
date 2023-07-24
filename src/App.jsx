import { useState } from 'react'
import egypt from './assets/egypt-art.jpg'
import './styles/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to the Library</h1>
      <img className='main-image' src={egypt}/>

    </>
  )
}

export default App
