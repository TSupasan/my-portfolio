import { Link } from 'react-router-dom'


function About() {

  return (

    <section className="about" id="about">


      <div className="about-heading">

        <p>MORE THAN ONE SIDE</p>

        <h2>
          Different sides.
          <span> One identity.</span>
        </h2>

        <p>
          I'm an IT undergraduate, rugby player, content creator,
          and creative explorer building my journey both on and
          beyond the screen.
        </p>

      </div>


      <div className="about-grid">


        {/* IT */}

        <Link
          to="/it"
          className="about-card about-it"
        >

          <span className="about-icon">
            &lt;/&gt;
          </span>


          <div className="about-card-content">

            <p className="about-label">
              01 / PROFESSIONAL
            </p>

            <h3>IT</h3>

            <p>
              BSc. IT Undergraduate at the University of Vavuniya,
              building skills through web development, programming,
              technology, and real-world projects.
            </p>

          </div>


          <span className="about-card-arrow">
            ↗
          </span>

        </Link>


        {/* SPORTS */}

        <Link
          to="/sports"
          className="about-card about-sports"
        >

          <span className="about-icon">
            🏉
          </span>


          <div className="about-card-content">

            <p className="about-label">
              02 / DISCIPLINE
            </p>

            <h3>SPORTS</h3>

            <p>
              Rugby player representing the University of Vavuniya
              Rugby Team. Teamwork, discipline, resilience, and
              the mindset to keep pushing forward.
            </p>

          </div>


          <span className="about-card-arrow">
            ↗
          </span>

        </Link>


        {/* CREATOR */}

        <Link
          to="/creator"
          className="about-card about-creator"
        >

          <span className="about-icon">
            ✦
          </span>


          <div className="about-card-content">

            <p className="about-label">
              03 / IDEAS & STORIES
            </p>

            <h3>CREATOR</h3>

            <p>
              Creator behind The Next Gen, exploring technology,
              geek culture, and digital storytelling through videos,
              while also bringing ideas to life through thumbnails,
              flyers, and visual design.
            </p>

          </div>


          <span className="about-card-arrow">
            ↗
          </span>

        </Link>


        {/* MORE */}

        <Link
          to="/more"
          className="about-card about-more"
        >

          <span className="about-icon">
            ✧
          </span>


          <div className="about-card-content">

            <p className="about-label">
              04 / BEYOND THE SCREEN
            </p>

            <h3>MORE</h3>

            <p>
              Through ItsMeSupe, I explore photography, travel,
              personal moments, volunteering, and the little things
              that keep me curious and connected with the world.
            </p>

          </div>


          <span className="about-card-arrow">
            ↗
          </span>

        </Link>


      </div>

    </section>

  )

}


export default About