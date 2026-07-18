import creatorImage from '../assets/images/creator.png'

function Creator() {
  return (
    <section className="creator-section" id="creator">

      <div className="creator-heading">

        <p>03 / CREATOR</p>

        <h2>
          Ideas become
          <span> stories.</span>
        </h2>

        <p>
          Creating content, designing visuals, and sharing ideas
          through different forms of digital media.
        </p>

      </div>


      <div className="creator-content">

        {/* MAIN CREATOR CARD */}

        <div className="creator-main-card">

          <div className="creator-image-wrapper">

            <img
              src={creatorImage}
              alt="Supasan creating content"
            />

          </div>


          <div className="creator-main-content">

            <p className="creator-label">
              CONTENT / DESIGN / STORYTELLING
            </p>

            <h3>
              Creating things
              <span> worth sharing.</span>
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


      {/* CREATOR GALLERY */}

      <div className="creator-gallery-section">

        <div className="creator-gallery-heading">

          <div>

            <p className="creator-label">
              SELECTED WORK
            </p>

            <h3>
              Creative
              <span> Gallery.</span>
            </h3>

          </div>

          <button className="creator-gallery-button">
            View All Work ↗
          </button>

        </div>


        <div className="creator-gallery-grid">

          <div className="creator-gallery-item">

            <div className="gallery-placeholder">
              DESIGN
            </div>

          </div>

          <div className="creator-gallery-item">

            <div className="gallery-placeholder">
              THUMBNAILS
            </div>

          </div>

          <div className="creator-gallery-item">

            <div className="gallery-placeholder">
              FLYERS
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Creator