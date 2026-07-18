import { useEffect, useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      return savedTheme === 'dark'
    }

    return true
  })

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode'

    localStorage.setItem(
      'theme',
      darkMode ? 'dark' : 'light'
    )
  }, [darkMode])

  return (
    <div className="app">

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Hero />

    </div>
  )
}

export default App