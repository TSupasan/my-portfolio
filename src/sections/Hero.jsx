import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import profileImage from '../assets/images/profile.png'
import rugbyImage from '../assets/images/rugby.png'
import creatorImage from '../assets/images/creator.png'


const personalities = [

  {
    id: 'tech',
    label: 'IT',
    title: 'BSc. IT Undergraduate',
    subtitle: 'University of Vavuniya',
    description:
      'Building my journey through technology, web development, UI design, and real-world projects while pursuing my Bachelor of Science in Information Technology.',
    image: profileImage,
    icon: '</>',
    badge: 'BUILD',
    tag: 'TECH / CODE',
    primaryButton: 'View My Work',
  },

  {
    id: 'rugby',
    label: 'Sports',
    title: 'University Rugby Player',
    subtitle: 'University of Vavuniya Rugby Team',
    description:
      'Representing my university through rugby, where teamwork, discipline, resilience, and passion shape the way I grow both on and off the field.',
    image: rugbyImage,
    icon: '🏉',
    badge: 'TEAM',
    tag: 'SPORTS / RUGBY',
    primaryButton: 'View My Journey',
  },

  {
    id: 'creator',
    label: 'Creator',
    title: 'Tech & Creative Content Creator',
    subtitle: 'Creating • Designing • Exploring',
    description:
      'Exploring technology, geek culture, digital design, and creative ideas while creating content that people can discover and connect with. From tech content to designing thumbnails, flyers, and digital visuals, I enjoy turning ideas into meaningful creative work.',
    image: creatorImage,
    icon: '✦',
    badge: 'CREATE',
    tag: 'IDEAS / STORIES',
    primaryButton: 'View My Content',
  },

  {
    id: 'more',
    label: 'More',
    title: 'Creative Explorer',
    subtitle: 'Photography • Exploring • Experiences',
    description:
      'Finding creativity in photography, new experiences, and the little details that make everyday life more interesting. There is always something new to explore, create, and discover.',
    image: profileImage,
    icon: '✧',
    badge: 'EXPLORE',
    tag: 'CREATE / DISCOVER',
    primaryButton: 'View My World',
  },

]


function Hero() {

  const navigate = useNavigate()


  const [
    activePersonality,
    setActivePersonality
  ] = useState('tech')


  const current =
    personalities.find(
      (personality) =>
        personality.id === activePersonality,
    ) || personalities[0]


  return (

    <section
      className={`hero personality-${current.id}`}
      id="home"
    >


      {/* =========================
          HERO CONTENT
      ========================= */}

      <div className="hero-content">


        <p className="hero-intro">

          Hello, I&apos;m

        </p>


        <h1>

          Supasan

          <span>

            Aththanayaka

          </span>

        </h1>


        <div
          className="personality-info"
          key={current.id}
        >


          <div className="identity-line">

            <span className="identity-dot"></span>

            <span>

              {current.tag}

            </span>

          </div>


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


        {/* =========================
            ACTION BUTTONS
        ========================= */}

        <div className="hero-buttons">


          <button
            className="primary-button"
            onClick={() => navigate('/projects')}
          >

            {current.primaryButton}

          </button>


          <button
            className="outline-button"
            onClick={() => navigate('/contact')}
          >

            Contact Me

          </button>


        </div>


        {/* =========================
            PERSONALITY SWITCHER
        ========================= */}

        <div className="personality-switcher">


          {personalities.map(
            (personality) => (

              <button

                key={personality.id}

                className={`personality-button ${
                  activePersonality ===
                  personality.id
                    ? 'active'
                    : ''
                }`}

                onClick={() =>
                  setActivePersonality(
                    personality.id,
                  )
                }

              >

                {personality.label}

              </button>

            ),
          )}


        </div>


      </div>


      {/* =========================
          HERO IMAGE
      ========================= */}

      <div className="hero-image">


        <div className="visual-label label-top">

          <span>

            {current.icon}

          </span>


          <small>

            {current.badge}

          </small>

        </div>


        <div className="visual-label label-bottom">

          <span className="label-line"></span>


          <small>

            {current.tag}

          </small>

        </div>


        {/* RINGS */}

        <div className="visual-ring ring-one"></div>

        <div className="visual-ring ring-two"></div>


        {/* DOTS */}

        <div className="visual-dot dot-one"></div>

        <div className="visual-dot dot-two"></div>

        <div className="visual-dot dot-three"></div>


        {/* SYMBOL ONE */}

        <div className="visual-symbol symbol-one">

          {current.id === 'tech' && '</>'}

          {current.id === 'rugby' && '01'}

          {current.id === 'creator' && '✦'}

          {current.id === 'more' && '✧'}

        </div>


        {/* SYMBOL TWO */}

        <div className="visual-symbol symbol-two">

          {current.id === 'tech' && '01'}

          {current.id === 'rugby' && 'XV'}

          {current.id === 'creator' && 'REC'}

          {current.id === 'more' && '○'}

        </div>


        {/* IMAGE GLOW */}

        <div className="image-glow"></div>


        {/* PROFILE IMAGE */}

        <img

          key={current.id}

          src={current.image}

          alt={`${current.title} - Supasan Aththanayaka`}

        />


      </div>


    </section>

  )

}


export default Hero