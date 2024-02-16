import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AgentPage from './components/AgentPage'
import Footer from './components/Footer'
import Loading from './components/Loading' // Import the Loading component
import Navbar from './components/Navbar'
import WeaponsPage from './components/WeaponsPage'
import { useState, useEffect } from 'react'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate data fetching (replace with your actual logic)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  return (
    <BrowserRouter>
      {isLoading ? (
        <Loading className="ease-out" />
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<AgentPage />} />
            <Route path="/weapons" element={<WeaponsPage />} />
          </Routes>
          <Footer />
        </div>
      )}
    </BrowserRouter>
  )
}

export default App
