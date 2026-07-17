import profileImage from '../assets/images/profile.png'

function Hero() {
  return (
    <section className="hero" id="home">
      
      {/* Hero Content */}
      <div className="hero-content">
        <p className="hero-intro">
          Hello, I'm
        </p>

        <h1>
          Tharindu Supasan
          <span>Aththanayaka</span>
        </h1>

        <h2>
          IT Graduate & Digital Creator
        </h2>

        <p className="hero-description">
          I build for the web, create digital content, and explore the
          intersection of technology, creativity, and real-world experiences.
        </p>

        <div className="hero-buttons">
          <button className="primary-button">
            View My Work
          </button>

          <button className="outline-button">
            Contact Me
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="hero-image">
        <div className="hero-glow"></div>

        <img
          src={profileImage}
          alt="Tharindu Supasan Aththanayaka"
        />
      </div>

    </section>
  )
}

export default Hero