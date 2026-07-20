import { useEffect, useState } from 'react'
import profileImage from '../assets/images/profile.png'
import { supabase } from '../lib/supabase'


function IT() {

  const [galleryItems, setGalleryItems] = useState([])

  const [loadingGallery, setLoadingGallery] = useState(true)


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


  return (

    <section

      className="it-section"

      id="it"

    >


      {/* =========================
          IT HEADING
      ========================= */}

      <div

        className="it-heading"

      >

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

      <div

        className="it-main-card"

      >

        <div

          className="it-image-wrapper"

        >

          <img

            src={profileImage}

            alt="Supasan Aththanayaka - IT Undergraduate"

          />

        </div>


        <div

          className="it-main-content"

        >

          <p

            className="it-label"

          >

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

      <div

        className="it-skills-card"

      >

        <p

          className="it-label"

        >

          CURRENTLY EXPLORING

        </p>


        <div

          className="it-skills"

        >

          <span>HTML</span>

          <span>CSS</span>

          <span>JavaScript</span>

          <span>React</span>

          <span>Python</span>

          <span>Node.js</span>

          <span>MongoDB</span>

          <span>Git & GitHub</span>

        </div>

      </div>


      {/* =========================
          STATS
      ========================= */}

      <div

        className="it-bottom"

      >

        <div

          className="it-stat"

        >

          <strong>

            01

          </strong>


          <span>

            Degree Journey

          </span>

        </div>


        <div

          className="it-stat"

        >

          <strong>

            ∞

          </strong>


          <span>

            Learning Mindset

          </span>

        </div>


        <div

          className="it-stat"

        >

          <strong>

            ⌘

          </strong>


          <span>

            Building Projects

          </span>

        </div>

      </div>


      {/* =========================
          IT GALLERY
      ========================= */}

      <div

        className="it-gallery-section"

      >

        <div

          className="it-gallery-heading"

        >

          <p

            className="it-label"

          >

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

        {

          loadingGallery && (

            <p

              className="it-gallery-status"

            >

              Loading gallery...

            </p>

          )

        }


        {/* EMPTY */}

        {

          !loadingGallery &&

          galleryItems.length === 0 && (

            <p

              className="it-gallery-status"

            >

              No IT gallery items yet.

            </p>

          )

        }


        {/* GALLERY */}

        {

          !loadingGallery &&

          galleryItems.length > 0 && (

            <div

              className="it-gallery-grid"

            >

              {

                galleryItems.map(

                  (item) => (

                    <article

                      className="it-gallery-card"

                      key={item.id}

                    >


                      {/* IMAGE */}

                      {

                        item.image_url && (

                          <div

                            className="it-gallery-image-wrapper"

                          >

                            <img

                              src={item.image_url}

                              alt={item.title}

                            />

                          </div>

                        )

                      }


                      {/* CONTENT */}

                      <div

                        className="it-gallery-card-content"

                      >

                        <p

                          className="it-gallery-category"

                        >

                          {item.category}

                        </p>


                        <h4>

                          {item.title}

                        </h4>


                        <p

                          className="it-gallery-description"

                        >

                          {item.description}

                        </p>


                        {

                          item.link_url && (

                            <a

                              href={item.link_url}

                              target="_blank"

                              rel="noreferrer"

                              className="it-gallery-link"

                            >

                              {

                                item.link_type === 'github'

                                  ? 'View Project ↗'

                                  : item.link_type === 'youtube'

                                    ? 'Watch Video ↗'

                                    : item.link_type === 'instagram'

                                      ? 'View Post ↗'

                                      : 'Explore ↗'

                              }

                            </a>

                          )

                        }

                      </div>

                    </article>

                  )

                )

              }

            </div>

          )

        }

      </div>

    </section>

  )

}


export default IT