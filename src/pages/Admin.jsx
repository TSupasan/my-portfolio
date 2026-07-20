import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'


function Admin() {

  const navigate = useNavigate()


  async function handleLogout() {

    await supabase.auth.signOut()

    navigate('/admin-login')

  }


  return (

    <main className="admin-dashboard">


      {/* =========================
          DASHBOARD HEADER
      ========================= */}

      <header className="admin-dashboard-header">


        <div className="admin-dashboard-heading">

          <p className="admin-label">

            ADMIN PANEL

          </p>


          <h1>

            Manage your

            <span>

              portfolio.

            </span>

          </h1>


          <p className="admin-dashboard-description">

            Choose what you want to manage.

          </p>

        </div>


        <button

          className="admin-logout-button"

          onClick={handleLogout}

        >

          Sign Out

          <span>

            ↗

          </span>

        </button>


      </header>


      {/* =========================
          ADMIN OPTIONS
      ========================= */}

      <section className="admin-dashboard-options">


        {/* =========================
            PROJECT MANAGEMENT
        ========================= */}

        <button

          type="button"

          className="admin-dashboard-card"

          onClick={() => navigate('/admin/projects')}

        >


          <div className="admin-dashboard-card-top">


            <span className="admin-dashboard-icon">

              ◈

            </span>


            <span className="admin-dashboard-number">

              01

            </span>


          </div>


          <div className="admin-dashboard-card-content">


            <p className="admin-label">

              PORTFOLIO

            </p>


            <h2>

              Project

              <span>

                Management

              </span>

            </h2>


            <p className="admin-dashboard-card-description">

              Add, edit, and delete the projects displayed

              on your portfolio website.

            </p>


          </div>


          <div className="admin-dashboard-card-footer">

            <span>

              Manage Projects

            </span>


            <strong>

              ↗

            </strong>

          </div>


        </button>


        {/* =========================
            GALLERY MANAGEMENT
        ========================= */}

        <button

          type="button"

          className="admin-dashboard-card"

          onClick={() => navigate('/admin/gallery')}

        >


          <div className="admin-dashboard-card-top">


            <span className="admin-dashboard-icon">

              ✦

            </span>


            <span className="admin-dashboard-number">

              02

            </span>


          </div>


          <div className="admin-dashboard-card-content">


            <p className="admin-label">

              CREATIVE CONTENT

            </p>


            <h2>

              Gallery

              <span>

                Management

              </span>

            </h2>


            <p className="admin-dashboard-card-description">

              Manage visual content for Creator, Sports,

              IT, and More sections.

            </p>


          </div>


          <div className="admin-dashboard-card-footer">

            <span>

              Manage Gallery

            </span>


            <strong>

              ↗

            </strong>

          </div>


        </button>


      </section>


    </main>

  )

}


export default Admin