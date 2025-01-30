import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [jokes, setCount] = useState(0)

  return (
    <>
     
      <p className="read-the-docs">
        Daksh
      </p>
      <p>Jokes: {jokes.lenght}</p>
    </>
  )
}

export default App
