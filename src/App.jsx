import { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import './index.css'

import Navbar from './components/Navbar'

import Hero from './sections/Hero'
import About from './sections/About'
import IT from './sections/IT'
import Sports from './sections/Sports'
import Creator from './sections/Creator'
import More from './sections/More'
import Projects from './sections/Projects'
import AdminLogin from './pages/AdminLogin'
import Admin from './pages/Admin'


function App() {

  const [darkMode, setDarkMode] = useState(() => {

    const savedTheme =
      localStorage.getItem('theme')

    if (savedTheme) {

      return savedTheme === 'dark'

    }

    return true

  })


  useEffect(() => {

    document.body.className =
      darkMode
        ? 'dark-mode'
        : 'light-mode'


    localStorage.setItem(

      'theme',

      darkMode
        ? 'dark'
        : 'light'

    )

  }, [darkMode])


  return (

    <BrowserRouter>

      <div className="app">


        <Navbar

          darkMode={darkMode}

          setDarkMode={setDarkMode}

        />


        <Routes>


          {/* =========================
              HOME PAGE
          ========================= */}

          <Route

            path="/"

            element={

              <>

                <Hero />

                <About />

              </>

            }

          />


          {/* =========================
              IT PAGE
          ========================= */}

          <Route

            path="/it"

            element={<IT />}

          />


          {/* =========================
              SPORTS PAGE
          ========================= */}

          <Route

            path="/sports"

            element={<Sports />}

          />


          {/* =========================
              CREATOR PAGE
          ========================= */}

          <Route

            path="/creator"

            element={<Creator />}

          />


          {/* =========================
              MORE PAGE
          ========================= */}

          <Route

            path="/more"

            element={<More />}

          />


          {/* =========================
              PROJECTS PAGE
          ========================= */}

          <Route

            path="/projects"

            element={<Projects />}

          />

          <Route
            path="/admin-login"
            element={<AdminLogin />}
          />

          <Route
            path="/admin"
            element={<Admin />}
          />


        </Routes>


      </div>

    </BrowserRouter>

  )

}


export default App