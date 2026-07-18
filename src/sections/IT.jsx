import profileImage from '../assets/images/profile.png'

function IT() {
  return (
    <section className="it-section" id="it">

      {/* =========================
          IT HEADING
      ========================= */}

      <div className="it-heading">

        <p>01 / TECHNOLOGY</p>

        <h2>
          Building with
          <span> technology.</span>
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


        {/* PROFILE IMAGE */}

        <div className="it-image-wrapper">

          <img
            src={profileImage}
            alt="Supasan Aththanayaka - IT Undergraduate"
          />

        </div>


        {/* MAIN CONTENT */}

        <div className="it-main-content">

          <p className="it-label">
            BSC. IT UNDERGRADUATE
          </p>

          <h3>
            Turning ideas into
            <span> digital experiences.</span>
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

      </div>


      {/* =========================
          STATS
      ========================= */}

      <div className="it-bottom">

        <div className="it-stat">
          <strong>01</strong>
          <span>Degree Journey</span>
        </div>

        <div className="it-stat">
          <strong>∞</strong>
          <span>Learning Mindset</span>
        </div>

        <div className="it-stat">
          <strong>⌘</strong>
          <span>Building Projects</span>
        </div>

      </div>


    </section>
  )
}

export default IT