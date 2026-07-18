import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

function Projects() {

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {

    fetchProjects()

  }, [])


  async function fetchProjects() {

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', {
        ascending: false
      })


    if (error) {

      console.error('SUPABASE ERROR:', error)
      setError(error.message)
      

    } else {

      setProjects(data)

    }


    setLoading(false)

  }


  return (

    <section className="projects-section">


      <div className="projects-heading">

        <p>03 / PROJECTS</p>

        <h1>
          Things I
          <span> build.</span>
        </h1>

        <p>
          A collection of projects, experiments, and ideas
          built while learning and exploring technology.
        </p>

      </div>


      {loading && (

        <p>
          Loading projects...
        </p>

      )}


      {error && (

        <p>
          {error}
        </p>

      )}


      {!loading && !error && (

        <div className="projects-grid">

          {projects.map((project) => (

            <div
              className="project-card"
              key={project.id}
            >


              {project.image_url && (

                <img
                  src={project.image_url}
                  alt={project.title}
                />

              )}


              <div className="project-card-content">


                <p className="project-category">

                  {project.category}

                </p>


                <h2>

                  {project.title}

                </h2>


                <p>

                  {project.description}

                </p>


                <p className="project-technologies">

                  {project.technologies}

                </p>


                <div className="project-links">


                  {project.github_url && (

                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noreferrer"
                    >

                      GitHub ↗

                    </a>

                  )}


                  {project.live_url && (

                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noreferrer"
                    >

                      Live Demo ↗

                    </a>

                  )}

                </div>


              </div>


            </div>

          ))}

        </div>

      )}


    </section>

  )

}

export default Projects