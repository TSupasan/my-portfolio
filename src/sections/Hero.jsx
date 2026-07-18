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
      'Building my journey through technology, web development, and real-world projects while pursuing my Bachelor of Science in Information Technology.',
    image: profileImage,
    icon: '</>',
    badge: 'BUILD',
    tag: 'TECH / CODE',
  },
  {
    id: 'rugby',
    label: 'Rugby',
    title: 'Rugby Player',
    subtitle: 'University of Vavuniya Rugby Team',
    description:
      'Representing my university through rugby, where discipline, teamwork, resilience, and passion shape the way I grow on and off the field.',
    image: rugbyImage,
    icon: '🏉',
    badge: 'TEAM',
    tag: 'DISCIPLINE / DRIVE',
  },
  {
    id: 'creator',
    label: 'Creator',
    title: 'Tech & Geek Content Creator',
    subtitle: 'Creating • Exploring • Sharing',
    description:
      'Exploring technology, geek culture, and the ideas that inspire me while creating and sharing content along the way.',
    image: creatorImage,
    icon: '✦',
    badge: 'CREATE',
    tag: 'IDEAS / STORIES',
  },
  {
    id: 'creative',
    label: 'Creative',
    title: 'Creative Explorer',
    subtitle: 'Photography • Bonsai • Creativity',
    description:
      'Finding creativity in photography, bonsai, and the little details that make everyday experiences more interesting.',
    image: profileImage,
    icon: '✧',
    badge: 'EXPLORE',
    tag: 'CREATE / DISCOVER',
  },
]

function Hero() {
  const [activePersonality, setActivePersonality] = useState('tech')

  const current =
    personalities.find(
      (personality) => personality.id === activePersonality,
    ) || personalities[0]

  return (
    <section
      className={`hero personality-${current.id}`}
      id="home"
    >
      <div className="hero-content">
        <p className="hero-intro">
          Hello, I&apos;m
        </p>

        <h1>
          Supasan
          <span>Aththanayaka</span>
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

        <div className="hero-buttons">
          <button className="primary-button">
            View My Work
          </button>

          <button className="outline-button">
            Contact Me
          </button>
        </div>

        <div className="personality-switcher">
          {personalities.map((personality) => (
            <button
              key={personality.id}
              className={`personality-button ${
                activePersonality === personality.id
                  ? 'active'
                  : ''
              }`}
              onClick={() =>
                setActivePersonality(personality.id)
              }
            >
              {personality.label}
            </button>
          ))}
        </div>
      </div>

      <div className="hero-image">
        <div className="visual-label label-top">
          <span>{current.icon}</span>
          <small>{current.badge}</small>
        </div>

        <div className="visual-label label-bottom">
          <span className="label-line"></span>
          <small>{current.tag}</small>
        </div>

        <div className="visual-ring ring-one"></div>

        <div className="visual-ring ring-two"></div>

        <div className="visual-dot dot-one"></div>

        <div className="visual-dot dot-two"></div>

        <div className="visual-dot dot-three"></div>

        <div className="visual-symbol symbol-one">
          {current.id === 'tech' && '</>'}

          {current.id === 'rugby' && '01'}

          {current.id === 'creator' && '✦'}

          {current.id === 'creative' && '✧'}
        </div>

        <div className="visual-symbol symbol-two">
          {current.id === 'tech' && '01'}

          {current.id === 'rugby' && 'XV'}

          {current.id === 'creator' && 'REC'}

          {current.id === 'creative' && '○'}
        </div>

        <div className="image-glow"></div>

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