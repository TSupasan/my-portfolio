import { useEffect, useState } from 'react'
import rugbyImage from '../assets/images/rugby.png'
import { supabase } from '../lib/supabase'


function Sports() {


  const [galleryItems, setGalleryItems] =
    useState([])


  const [loadingGallery, setLoadingGallery] =
    useState(true)


  useEffect(() => {

    fetchSportsGallery()

  }, [])


  async function fetchSportsGallery() {


    const { data, error } =
      await supabase

        .from('gallery')

        .select('*')

        .eq('section', 'sports')

        .order('created_at', {

          ascending: false

        })


    if (error) {

      console.error(

        'SPORTS GALLERY ERROR:',

        error

      )

    } else {

      setGalleryItems(

        data || []

      )

    }


    setLoadingGallery(false)

  }


  return (


    <section

      className="sports-section"

      id="sports"

    >


      {/* =========================
          SPORTS HEADING
      ========================= */}


      <div

        className="sports-heading"

      >


        <p>

          02 / SPORTS

        </p>


        <h2>

          Built through

          <span>

            discipline.

          </span>

        </h2>


        <p>

          Rugby has taught me the value of teamwork, discipline,

          resilience, and pushing beyond my limits both on and off

          the field.

        </p>


      </div>


      {/* =========================
          SPORTS CONTENT
      ========================= */}


      <div

        className="sports-content"

      >


        {/* =========================
            SPORTS INTRO
        ========================= */}


        <div

          className="sports-intro-card"

        >


          <div

            className="sports-image-wrapper"

          >


            <img

              src={rugbyImage}

              alt="Supasan Aththanayaka playing rugby"

            />


          </div>


          <div

            className="sports-intro-text"

          >


            <p

              className="sports-label"

            >

              UNIVERSITY OF VAVUNIYA

            </p>


            <h3>

              More than a

              <span>

                game.

              </span>

            </h3>


            <p>

              As a rugby player representing the University of Vavuniya,

              I have learned that success is not only about individual

              performance. It is about trusting your team, staying

              disciplined, and continuing forward even when things get tough.

            </p>


          </div>


        </div>


        {/* =========================
            SPORTS VALUES
        ========================= */}


        <div

          className="sports-values-card"

        >


          <p

            className="sports-label"

          >

            WHAT THE GAME TEACHES

          </p>


          <div

            className="sports-values"

          >


            <div className="sports-value">

              <span>01</span>

              <strong>Teamwork</strong>

            </div>


            <div className="sports-value">

              <span>02</span>

              <strong>Discipline</strong>

            </div>


            <div className="sports-value">

              <span>03</span>

              <strong>Resilience</strong>

            </div>


            <div className="sports-value">

              <span>04</span>

              <strong>Passion</strong>

            </div>


          </div>


        </div>


      </div>


      {/* =========================
          SPORTS GALLERY
      ========================= */}


      <div

        className="sports-gallery"

      >


        <div

          className="sports-gallery-heading"

        >


          <p className="sports-label">

            MOMENTS FROM THE FIELD

          </p>


        </div>


        {


          loadingGallery && (


            <p className="sports-gallery-status">

              Loading moments...

            </p>

          )

        }


        {


          !loadingGallery &&

          galleryItems.length === 0 && (


            <p className="sports-gallery-status">

              No sports moments added yet.

            </p>

          )

        }


        {


          !loadingGallery &&

          galleryItems.length > 0 && (


            <div

              className="sports-gallery-grid"

            >


              {


                galleryItems.map(

                  (item) => (


                    <article

                      className="sports-gallery-card"

                      key={item.id}

                    >


                      {


                        item.image_url && (


                          <div

                            className="sports-gallery-image"

                          >


                            <img

                              src={

                                item.image_url

                              }

                              alt={

                                item.title

                              }

                            />


                          </div>

                        )

                      }


                      <div

                        className="sports-gallery-card-content"

                      >


                        <p

                          className="sports-gallery-category"

                        >

                          {item.category}

                        </p>


                        <h4>

                          {item.title}

                        </h4>


                        {


                          item.description && (


                            <p>

                              {

                                item.description

                              }

                            </p>

                          )

                        }


                        {


                          item.link_url && (


                            <a

                              href={

                                item.link_url

                              }

                              target="_blank"

                              rel="noreferrer"

                            >

                              View Link ↗

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


export default Sports