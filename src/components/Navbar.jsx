import {
  Link,
  useLocation
} from 'react-router-dom'


function Navbar({
  darkMode,
  setDarkMode
}) {


  const location =
    useLocation()


  const handleAboutClick =
    (event) => {


      if (
        location.pathname === '/'
      ) {


        event.preventDefault()


        document

          .getElementById('about')

          ?.scrollIntoView({

            behavior: 'smooth'

          })


      }

    }


  return (


    <nav className="navbar">


      {/* =========================
          LOGO
      ========================= */}

      <Link

        to="/"

        className="logo"

      >

        TA

      </Link>


      {/* =========================
          NAVIGATION LINKS
      ========================= */}

      <div className="nav-links">


        {/* HOME */}

        <Link

          to="/"

          onClick={() => {


            if (
              location.pathname === '/'
            ) {


              window.scrollTo({

                top: 0,

                behavior: 'smooth'

              })

            }

          }}

        >

          Home

        </Link>


        {/* ABOUT */}

        <Link

          to="/#about"

          onClick={
            handleAboutClick
          }

        >

          About

        </Link>


        {/* PROJECTS */}

        <Link

          to="/projects"

        >

          Projects

        </Link>


        {/* CONTACT */}

        <Link

          to="/#contact"

        >

          Contact

        </Link>


      </div>


      {/* =========================
          THEME TOGGLE
      ========================= */}

      <button

        className="theme-toggle"

        onClick={() =>

          setDarkMode(
            !darkMode
          )

        }

        aria-label="Toggle theme"

      >

        {

          darkMode

            ? '☀️'

            : '🌙'

        }

      </button>


    </nav>


  )

}


export default Navbar