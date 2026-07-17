import { useState } from 'react'
import profileImage from '../assets/images/profile.png'
import rugbyImage from '../assets/images/rugby.png'
import creatorImage from '../assets/images/creator.png'

const personalities = [
  {
    id: 'tech',
    label: 'Tech',
    title: 'BSc. IT Undergraduate',
    subtitle: 'University of Vavuniya',
    description:
      'Currently pursuing my Bachelor of Science in Information Technology at the University of Vavuniya, while building my skills through web development and real-world projects.',
    image: profileImage,
  },

  {
    id: 'rugby',
    label: 'Rugby',
    title: 'Rugby Player',
    subtitle: 'University of Vavuniya Rugby Team',
    description:
      'Proudly representing the University of Vavuniya Rugby Team, where teamwork, discipline, resilience, and passion drive me both on and off the field.',
    image: rugbyImage,
  },

  {
    id: 'creator',
    label: 'Creator',
    title: 'Tech & Geek Content Creator',
    subtitle: 'Creating • Exploring • Sharing',
    description:
      'Creating content around technology, geek culture, and the topics I am passionate about while sharing my journey with others.',
    image: creatorImage,
  },

  {
    id: 'creative',
    label: 'Creative',
    title: 'Creative Explorer',
    subtitle: 'Photography • Bonsai • Creativity',
    description:
      'Exploring mobile photography, bonsai, and other creative interests that allow me to learn, create, and see the world differently.',
    image: profileImage,
  },
]

function Hero() {
  const [activePersonality, setActivePersonality] = useState(0)

  const current = personalities[activePersonality]

  return (
    <section className="hero" id="home">

      {/* LEFT SIDE - CONTENT */}
      <div className="hero-content">

        <p className="hero-intro">
          Hello, I'm
        </p>

        <h1>
          Tharindu Supasan
          <span>Aththanayaka</span>
        </h1>

        <div className="personality-info" key={current.id}>

          <h2>
            {current.title}
          </h2>

          <h3>
            {current.subtitle}
          </h3>

          <p className="hero-description">
            {current.description}
          </p>

        </div>

        <div className="hero-buttons">

          <button className="primary-button">
            View My Work
          </button>

          <button className="outline-button">
            Contact Me
          </button>

        </div>

        {/* PERSONALITY SWITCHER */}
        <div className="personality-switcher">

          {personalities.map((personality, index) => (

            <button
              key={personality.id}
              className={
                activePersonality === index
                  ? 'personality-button active'
                  : 'personality-button'
              }
              onClick={() => setActivePersonality(index)}
            >
              {personality.label}
            </button>

          ))}

        </div>

      </div>


      {/* RIGHT SIDE - IMAGE */}
      <div className="hero-image">

        <img
          key={current.id}
          src={current.image}
          alt={`${current.title} - Tharindu Supasan Aththanayaka`}
        />

      </div>

    </section>
  )
}

export default Hero