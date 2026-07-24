import { useEffect, useState } from 'react'

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
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

import AdminGallery from './pages/AdminGallery'
import AdminProjects from './pages/AdminProjects'

import Contact from './pages/Contact'


/* =========================================
   SCROLL TO TOP ON PAGE CHANGE
========================================= */

function ScrollToTop() {

  const { pathname } = useLocation()


  useEffect(() => {

    window.scrollTo(0, 0)

  }, [pathname])


  return null

}


/* =========================================
   MAIN APP
========================================= */

function App() {


  /* =========================================
     THEME STATE
  ========================================= */

  const [darkMode, setDarkMode] = useState(() => {


    const savedTheme =

      localStorage.getItem('theme')


    if (savedTheme) {

      return savedTheme === 'dark'

    }


    return true

  })


  /* =========================================
     THEME MANAGEMENT
  ========================================= */

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


      {/* =========================
          GLOBAL SCROLL TO TOP
      ========================= */}


      <ScrollToTop />


      <div className="app">


        {/* =========================
            NAVBAR
        ========================= */}


        <Navbar

          darkMode={darkMode}

          setDarkMode={setDarkMode}

        />


        {/* =========================
            ROUTES
        ========================= */}


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


          {/* =========================
              ADMIN LOGIN
          ========================= */}


          <Route

            path="/admin-login"

            element={<AdminLogin />}

          />


          {/* =========================
              ADMIN DASHBOARD
          ========================= */}


          <Route

            path="/admin"

            element={<Admin />}

          />


          {/* =========================
              ADMIN GALLERY
          ========================= */}


          <Route

            path="/admin/gallery"

            element={<AdminGallery />}

          />


          {/* =========================
              ADMIN PROJECTS
          ========================= */}


          <Route

            path="/admin/projects"

            element={<AdminProjects />}

          />


          {/* =========================
              CONTACT PAGE
          ========================= */}


          <Route

            path="/contact"

            element={<Contact />}

          />


        </Routes>


      </div>


    </BrowserRouter>

  )

}


export default App