function More() {
  return (
    <section className="more-section" id="more">

      {/* =========================
          MORE HEADING
      ========================= */}

      <div className="more-heading">

        <p>BEYOND THE MAIN STORY</p>

        <h2>
          Life beyond
          <span> the screen.</span>
        </h2>

        <p>
          Technology and rugby are important parts of my journey,
          but there is more to me than code and the field.
        </p>

      </div>


      {/* =========================
          MORE CONTENT
      ========================= */}

      <div className="more-content">


        {/* =========================
            ITS ME SUPE
        ========================= */}

        <div className="more-main-card">

          <div className="more-main-content">

            <p className="more-label">
              PERSONAL / VLOGS
            </p>

            <h3>
              ItsMe<span>Supe</span>
            </h3>

            <p>
              A personal space for travel, experiences, and the
              moments I want to capture and share beyond my
              professional journey.
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


        {/* =========================
            PHOTOGRAPHY
        ========================= */}

        <div className="more-card more-photography">

          <div className="more-card-top">

            <span className="more-icon">
              📸
            </span>

            <span className="more-number">
              01
            </span>

          </div>

          <p className="more-label">
            VISUAL STORIES
          </p>

          <h3>
            Photography
          </h3>

          <p>
            Capturing places, people, moments, and the small
            details that make everyday life interesting.
          </p>

          <button className="more-link">
            View Gallery ↗
          </button>

        </div>


        {/* =========================
            VOLUNTEERING
        ========================= */}

        <div className="more-card more-volunteering">

          <div className="more-card-top">

            <span className="more-icon">
              🤝
            </span>

            <span className="more-number">
              02
            </span>

          </div>

          <p className="more-label">
            GIVING BACK
          </p>

          <h3>
            Volunteering
          </h3>

          <p>
            Experiences, memories, and moments from being
            involved in activities that bring people together
            and make a positive difference.
          </p>

          <button className="more-link">
            Explore Moments ↗
          </button>

        </div>


      </div>

    </section>
  )
}

export default More