import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

function More() {
  const [galleryItems, setGalleryItems] = useState([])
  const [loadingGallery, setLoadingGallery] = useState(true)

  useEffect(() => {
    fetchMoreGallery()
  }, [])

  async function fetchMoreGallery() {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .eq('section', 'more')
      .order('created_at', {
        ascending: false
      })

    if (error) {
      console.error('FETCH MORE GALLERY ERROR:', error)
    } else {
      setGalleryItems(data || [])
    }

    setLoadingGallery(false)
  }

  return (
    <section
      className="more-section"
      id="more"
    >

      {/* =========================
          MORE HEADING
      ========================= */}

      <div className="more-heading">

        <p>
          BEYOND THE MAIN STORY
        </p>

        <h2>
          Life beyond <span>the screen.</span>
        </h2>

        <p>
          Beyond technology, I enjoy exploring new places,
          capturing moments through photography, volunteering
          in the community, and sharing experiences through
          creative work. This space is a glimpse into the things
          I do beyond code.
        </p>

      </div>


      {/* =========================
          MAIN YOUTUBE CHANNEL
      ========================= */}

      <div className="more-content">

        <div className="more-main-card">

          {/* MORE IMAGE */}

          <div className="more-image-wrapper">

            <img
              src="/images/more-image.jpg"
              alt="ItsMeSupe"
            />

          </div>


          {/* MORE CONTENT */}

          <div className="more-main-content">

            <p className="more-label">
              PERSONAL / VLOGS
            </p>

            <h3>
              ItsMe<span>Supe</span>
            </h3>

            <p>
              A personal space for travel,
              experiences, and the moments
              I want to capture and share
              beyond my professional journey.
            </p>

            <a
              href="https://www.youtube.com/@ItsMeSupe"
              target="_blank"
              rel="noreferrer"
              className="more-link"
            >
              Visit Channel ↗
            </a>

          </div>

        </div>

      </div>


      {/* =========================
          MORE GALLERY
      ========================= */}

      <div className="more-gallery-section">

        <div className="more-gallery-heading">

          <p className="more-label">
            SELECTED MOMENTS
          </p>

          <h3>
            Life beyond <span>the screen.</span>
          </h3>

          <p>
            A collection of places, experiences,
            photographs, and moments from life beyond code.
          </p>

        </div>


        {/* LOADING */}

        {loadingGallery && (

          <p className="more-gallery-status">
            Loading gallery...
          </p>

        )}


        {/* EMPTY */}

        {!loadingGallery && galleryItems.length === 0 && (

          <p className="more-gallery-status">
            No gallery items yet.
          </p>

        )}


        {/* GALLERY */}

        {!loadingGallery && galleryItems.length > 0 && (

          <div className="more-gallery-grid">

            {galleryItems.map((item) => (

              <article
                className="more-gallery-card"
                key={item.id}
              >

                {/* IMAGE */}

                {item.image_url && (

                  <div className="more-gallery-image-wrapper">

                    <img
                      src={item.image_url}
                      alt={item.title}
                    />

                  </div>

                )}


                {/* CONTENT */}

                <div className="more-gallery-card-content">

                  <p className="more-gallery-category">
                    {item.category}
                  </p>

                  <h4>
                    {item.title}
                  </h4>

                  <p className="more-gallery-description">
                    {item.description}
                  </p>


                  {/* LINK */}

                  {item.link_url && (

                    <a
                      href={item.link_url}
                      target="_blank"
                      rel="noreferrer"
                      className="more-gallery-link"
                    >

                      {item.link_type === 'youtube'
                        ? 'Watch Video ↗'
                        : item.link_type === 'instagram'
                          ? 'View Post ↗'
                          : item.link_type === 'github'
                            ? 'View Project ↗'
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

export default More