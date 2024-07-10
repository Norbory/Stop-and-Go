import { useState } from 'react'
import './App.css'
import { Fondo, Navbar } from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body className=''>
      <Navbar />
      <h1
        className='text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-gray-400 text-5xl font-bold text-center p-12'
      >
        Stop and Go
      </h1>
      <div className="flex flex-1 justify-center p-8">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        >
          count is {count}
        </button>
      </div>
      <Fondo />
    </body>
  )
}

export default App
