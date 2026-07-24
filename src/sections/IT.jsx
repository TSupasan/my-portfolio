import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import profileImage from '../assets/images/profile.png'
import { supabase } from '../lib/supabase'


function IT() {

  const navigate = useNavigate()

  const [galleryItems, setGalleryItems] = useState([])
  const [loadingGallery, setLoadingGallery] = useState(true)
  const [activeStat, setActiveStat] = useState(null)


  useEffect(() => {
    fetchITGallery()
  }, [])


  async function fetchITGallery() {

    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .eq('section', 'it')
      .order('created_at', {
        ascending: false
      })


    if (error) {

      console.error(
        'FETCH IT GALLERY ERROR:',
        error
      )

    } else {

      setGalleryItems(data || [])

    }


    setLoadingGallery(false)

  }


  const stats = [

    {
      id: 'degree',
      icon: '01',
      title: 'Degree Journey',

      description:
        'Currently pursuing my Bachelor of Science in Information Technology at the University of Vavuniya.',

      detail:
        'Building a strong foundation in software development, databases, web technologies, and information technology fundamentals.',
    },


    {
      id: 'learning',
      icon: '∞',
      title: 'Learning Mindset',

      description:
        'Technology is constantly evolving, so my learning journey never really stops.',

      detail:
        'Currently exploring new technologies, improving my programming skills, and continuously learning through courses, projects, and practical experience.',
    },


    {
      id: 'projects',
      icon: '⌘',
      title: 'Building Projects',

      description:
        'Turning knowledge into real-world projects and practical digital experiences.',

      detail:
        'From personal portfolio projects to web applications and experimental ideas, I enjoy learning by building things that solve real problems.',
    },

  ]


  return (

    <section
      className="it-section"
      id="it"
    >


      {/* =========================
          IT HEADING
      ========================= */}

      <div className="it-heading">

        <p>
          01 / TECHNOLOGY
        </p>


        <h2>
          Building with
          <span>
            technology.
          </span>
        </h2>


        <p>
          My journey in IT is about learning, building, and continuously
          improving through real-world projects and practical experience.
        </p>

      </div>


      {/* =========================
          MAIN IT CARD
      ========================= */}

      <div className="it-main-card">

        <div className="it-image-wrapper">

          <img
            src={profileImage}
            alt="Supasan Aththanayaka - IT Undergraduate"
          />

        </div>


        <div className="it-main-content">

          <p className="it-label">
            BSC. IT UNDERGRADUATE
          </p>


          <h3>
            Turning ideas into
            <span>
              digital experiences.
            </span>
          </h3>


          <p>
            I'm currently pursuing my Bachelor of Science in Information
            Technology at the University of Vavuniya. I enjoy exploring
            web development, programming, and building projects that solve
            real-world problems.
          </p>

        </div>

      </div>


      {/* =========================
          SKILLS
      ========================= */}

      <div className="it-skills-card">

        <p className="it-label">
          CURRENTLY EXPLORING
        </p>


        <div className="it-skills">

          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Python</span>
          <span>Node.js</span>
          <span>MongoDB</span>
          <span>Git & GitHub</span>

        </div>


        {/* =========================
            PROJECTS BUTTON
        ========================= */}

        <button
          className="it-projects-button"
          onClick={() => navigate('/projects')}
        >

          View My Projects ↗

        </button>

      </div>


      {/* =========================
          INTERACTIVE JOURNEY CARDS
      ========================= */}

      <div className="it-bottom">

        {stats.map((stat) => (

          <div

            className={`it-stat interactive-stat ${
              activeStat === stat.id
                ? 'active'
                : ''
            }`}

            key={stat.id}

            onMouseEnter={() =>
              setActiveStat(stat.id)
            }

            onMouseLeave={() =>
              setActiveStat(null)
            }

            onClick={() =>
              setActiveStat(
                activeStat === stat.id
                  ? null
                  : stat.id
              )
            }

          >

            <div className="it-stat-top">

              <strong>
                {stat.icon}
              </strong>


              <span className="it-stat-arrow">

                {activeStat === stat.id
                  ? '−'
                  : '+'}

              </span>

            </div>


            <span className="it-stat-title">
              {stat.title}
            </span>


            <div
              className={`it-stat-details ${
                activeStat === stat.id
                  ? 'show'
                  : ''
              }`}
            >

              <p>
                {stat.description}
              </p>


              <small>
                {stat.detail}
              </small>

            </div>

          </div>

        ))}

      </div>


      {/* =========================
          IT GALLERY
      ========================= */}

      <div className="it-gallery-section">

        <div className="it-gallery-heading">

          <p className="it-label">
            SELECTED WORK
          </p>


          <h3>
            Building things
            <span>
              that matter.
            </span>
          </h3>


          <p>
            A collection of projects, experiments, and technical work
            created while learning and building with technology.
          </p>

        </div>


        {/* LOADING */}

        {loadingGallery && (

          <p className="it-gallery-status">
            Loading gallery...
          </p>

        )}


        {/* EMPTY */}

        {!loadingGallery &&
          galleryItems.length === 0 && (

            <p className="it-gallery-status">
              No IT gallery items yet.
            </p>

        )}


        {/* GALLERY */}

        {!loadingGallery &&
          galleryItems.length > 0 && (

            <div className="it-gallery-grid">

              {galleryItems.map((item) => (

                <article
                  className="it-gallery-card"
                  key={item.id}
                >


                  {item.image_url && (

                    <div className="it-gallery-image-wrapper">

                      <img
                        src={item.image_url}
                        alt={item.title}
                      />

                    </div>

                  )}


                  <div className="it-gallery-card-content">

                    <p className="it-gallery-category">
                      {item.category}
                    </p>


                    <h4>
                      {item.title}
                    </h4>


                    <p className="it-gallery-description">
                      {item.description}
                    </p>


                    {item.link_url && (

                      <a
                        href={item.link_url}
                        target="_blank"
                        rel="noreferrer"
                        className="it-gallery-link"
                      >

                        {item.link_type === 'github'
                          ? 'View Project ↗'
                          : item.link_type === 'youtube'
                            ? 'Watch Video ↗'
                            : item.link_type === 'instagram'
                              ? 'View Post ↗'
                              : 'Explore ↗'}

                      </a>

                    )}

                  </div>

                </article>

              ))}

            </div>

        )}

      </div>

    </section>

  )

}


export default IT