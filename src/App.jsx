import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './pages/Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-gray-100 min-h-screen h-auto p-2 pb-10">
        <Layout/>
       
      </div>
      
    </>
  )
}

export default App
