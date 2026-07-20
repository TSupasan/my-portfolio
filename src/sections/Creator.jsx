import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

function Creator() {
  const [galleryItems, setGalleryItems] = useState([])
  const [loadingGallery, setLoadingGallery] = useState(true)

  useEffect(() => {
    fetchCreatorGallery()
  }, [])

  async function fetchCreatorGallery() {
    const { data, error } = await supabase
      .from('gallery')
      .select('*')
      .eq('section', 'creator')
      .order('created_at', {
        ascending: false
      })

    if (error) {
      console.error('FETCH CREATOR GALLERY ERROR:', error)
    } else {
      setGalleryItems(data || [])
    }

    setLoadingGallery(false)
  }

  return (
    <section className="creator-section" id="creator">

      {/* =========================
          CREATOR HEADING
      ========================= */}

      <div className="creator-heading">

        <p>03 / CREATOR</p>

        <h2>
          Ideas become <span>stories.</span>
        </h2>

        <p>
          Creating content, designing visuals, and sharing ideas
          through different forms of digital media.
        </p>

      </div>


      {/* =========================
          CREATOR CONTENT
      ========================= */}

      <div className="creator-content">

        {/* MAIN CREATOR CARD */}

        <div className="creator-main-card">

          <div className="creator-image-wrapper">

            <img
              src="/images/creator.png"
              alt="Supasan creating content"
            />

          </div>

          <div className="creator-main-content">

            <p className="creator-label">
              CONTENT / DESIGN / STORYTELLING
            </p>

            <h3>
              Creating things <span>worth sharing.</span>
            </h3>

            <p>
              From technology and geek culture to visual design and
              digital storytelling, I enjoy turning ideas into content
              that people can explore, learn from, and connect with.
            </p>

          </div>

        </div>


        {/* THE NEXT GEN */}

        <div className="creator-project-card next-gen-card">

          <div className="creator-card-top">

            <span className="creator-icon">
              ▶
            </span>

            <span className="creator-number">
              01
            </span>

          </div>

          <p className="creator-label">
            YOUTUBE CHANNEL
          </p>

          <h3>
            The Next Gen
          </h3>

          <p>
            Technology, geek culture, ideas, and content created
            to explore the next generation of technology and creativity.
          </p>

          <a
            href="https://www.youtube.com/@thenextgen_"
            target="_blank"
            rel="noreferrer"
            className="creator-link"
          >
            Visit Channel ↗
          </a>

        </div>


        {/* DESIGNING */}

        <div className="creator-project-card designing-card">

          <div className="creator-card-top">

            <span className="creator-icon">
              ✦
            </span>

            <span className="creator-number">
              02
            </span>

          </div>

          <p className="creator-label">
            VISUAL CREATION
          </p>

          <h3>
            Designing
          </h3>

          <p>
            Creating YouTube thumbnails, flyers, posters, and other
            visual content where ideas become something people can see.
          </p>

          <button className="creator-link-button">
            View Designs ↗
          </button>

        </div>


        {/* IT'S ME SUPE */}

        <div className="creator-project-card personal-creator-card">

          <div className="creator-card-top">

            <span className="creator-icon">
              ✧
            </span>

            <span className="creator-number">
              03
            </span>

          </div>

          <p className="creator-label">
            PERSONAL CONTENT
          </p>

          <h3>
            ItsMeSupe
          </h3>

          <p>
            A more personal side of my creativity — travel, experiences,
            everyday moments, and stories from life beyond the screen.
          </p>

          <a
            href="https://www.youtube.com/@ItsMeSupe"
            target="_blank"
            rel="noreferrer"
            className="creator-link"
          >
            Visit Channel ↗
          </a>

        </div>

      </div>


      {/* =========================
          CREATOR GALLERY
      ========================= */}

      <div className="creator-gallery-section">

        <div className="creator-gallery-heading">

          <p className="creator-label">
            SELECTED WORK
          </p>

          {/* MAIN TITLE */}
          <h3>
            Visual stories <span>I created.</span>
          </h3>

          {/* DESCRIPTION - NEW LINE */}
          <p className="creator-gallery-description">
            A collection of creative work, designs, and visual moments.
          </p>

        </div>


        {/* LOADING */}

        {loadingGallery && (

          <p className="creator-gallery-status">
            Loading gallery...
          </p>

        )}


        {/* EMPTY */}

        {!loadingGallery && galleryItems.length === 0 && (

          <p className="creator-gallery-status">
            No creator gallery items yet.
          </p>

        )}


        {/* GALLERY */}

        {!loadingGallery && galleryItems.length > 0 && (

          <div className="creator-gallery-grid">

            {galleryItems.map((item) => (

              <article
                className="creator-gallery-card"
                key={item.id}
              >

                {item.image_url && (

                  <div className="creator-gallery-image-wrapper">

                    <img
                      src={item.image_url}
                      alt={item.title}
                    />

                  </div>

                )}


                <div className="creator-gallery-card-content">

                  <p className="creator-gallery-category">
                    {item.category}
                  </p>

                  <h4>
                    {item.title}
                  </h4>

                  <p className="creator-gallery-description">
                    {item.description}
                  </p>


                  {item.link_url && (

                    <a
                      href={item.link_url}
                      target="_blank"
                      rel="noreferrer"
                      className="creator-gallery-link"
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

export default Creator