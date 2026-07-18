import rugbyImage from '../assets/images/rugby.png'

function Sports() {
  return (
    <section className="sports-section" id="sports">

      <div className="sports-heading">
        <p>02 / SPORTS</p>

        <h2>
          Built through
          <span> discipline.</span>
        </h2>

        <p>
          Rugby has taught me the value of teamwork, discipline,
          resilience, and pushing beyond my limits both on and off
          the field.
        </p>
      </div>


      <div className="sports-content">

        {/* SPORTS INTRO */}

        <div className="sports-intro-card">

          <div className="sports-image-wrapper">
            <img
              src={rugbyImage}
              alt="Supasan Aththanayaka playing rugby"
            />
          </div>

          <div className="sports-intro-text">

            <p className="sports-label">
              UNIVERSITY OF VAVUNIYA
            </p>

            <h3>
              More than a
              <span> game.</span>
            </h3>

            <p>
              As a rugby player representing the University of Vavuniya,
              I have learned that success is not only about individual
              performance. It is about trusting your team, staying
              disciplined, and continuing forward even when things get tough.
            </p>

          </div>

        </div>


        {/* SPORTS VALUES */}

        <div className="sports-values-card">

          <p className="sports-label">
            WHAT THE GAME TEACHES
          </p>

          <div className="sports-values">

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


      {/* SPORTS GALLERY PREVIEW */}

      <div className="sports-gallery-section">

        <div className="sports-gallery-heading">

          <div>
            <p className="sports-label">
              MOMENTS FROM THE FIELD
            </p>

            <h3>
              Sports
              <span> Gallery.</span>
            </h3>
          </div>

          <button className="sports-gallery-button">
            View Sports Gallery ↗
          </button>

        </div>


        <div className="sports-gallery-grid">

          <div className="sports-gallery-item">
            <img
              src={rugbyImage}
              alt="Rugby moment"
            />
          </div>

          <div className="sports-gallery-item gallery-placeholder">
            <span>MORE MOMENTS</span>
          </div>

          <div className="sports-gallery-item gallery-placeholder">
            <span>COMING SOON</span>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Sports