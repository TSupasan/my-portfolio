import { useState } from 'react'

import emailjs from '@emailjs/browser'

import profileImage from '../assets/images/profile2.png'

import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaCheck
} from 'react-icons/fa'


function Contact() {

  const [isSending, setIsSending] = useState(false)

  const [status, setStatus] = useState('')


  const handleSubmit = async (event) => {

    event.preventDefault()

    setIsSending(true)

    setStatus('')


    try {

      const result = await emailjs.sendForm(

        'service_bt53yjj',

        'template_bnmf3wc',

        event.target,

        'S6odv_VE4aqlZg_ZW'

      )


      console.log('SUCCESS:', result.text)

      setStatus('success')

      event.target.reset()


    } catch (error) {

      console.error('EMAILJS FULL ERROR:', error)

      console.error('STATUS:', error.status)

      console.error('TEXT:', error.text)

      setStatus('error')


    } finally {

      setIsSending(false)

    }

  }


  const handleNewMessage = () => {

    setStatus('')

  }


  return (

    <section className="contact-page">


      {/* =========================
          CONTACT HEADER
      ========================= */}

      <div className="contact-header">

        <p className="contact-label">

          04 / CONTACT

        </p>


        <h1>

          Let's

          <span>

            connect.

          </span>

        </h1>


        <p className="contact-intro">

          Have a project, opportunity, or just want to say hello?

          I would love to hear from you.

        </p>

      </div>


      {/* =========================
          CONTACT CONTENT
      ========================= */}

      <div className="contact-content">


        {/* =========================
            PROFILE CARD
        ========================= */}

        <div className="contact-profile-card">


          <div className="contact-profile-image-wrapper">

            <img

              src={profileImage}

              alt="Tharindu Supasan Aththanayaka"

              className="contact-profile-image"

            />

          </div>


          <div className="contact-profile-info">

            <p className="contact-small-label">

              AVAILABLE FOR OPPORTUNITIES

            </p>


            <h2>

              Tharindu Supasan Aththanayaka

            </h2>


            <p>

              IT undergraduate and creative developer passionate about

              technology, web development, sports, and creative work.

            </p>

          </div>


        </div>


        {/* =========================
            CONTACT DETAILS
        ========================= */}

        <div className="contact-details-card">


          <a

            href="mailto:tharindu.supasan@gmail.com"

            className="contact-detail"

          >

            <span className="contact-detail-icon">

              <FaEnvelope />

            </span>


            <div>

              <small>

                EMAIL

              </small>


              <strong>

                tharindu.supasan@gmail.com

              </strong>

            </div>

          </a>


          <a

            href="tel:+94716275522"

            className="contact-detail"

          >

            <span className="contact-detail-icon">

              <FaPhone />

            </span>


            <div>

              <small>

                PHONE

              </small>


              <strong>

                +94 71 627 5522

              </strong>

            </div>

          </a>


          <a

            href="https://wa.me/94716275522"

            target="_blank"

            rel="noreferrer"

            className="contact-detail"

          >

            <span className="contact-detail-icon">

              <FaWhatsapp />

            </span>


            <div>

              <small>

                WHATSAPP

              </small>


              <strong>

                Message me on WhatsApp

              </strong>

            </div>

          </a>


          <div className="contact-detail">

            <span className="contact-detail-icon">

              <FaMapMarkerAlt />

            </span>


            <div>

              <small>

                LOCATION

              </small>


              <strong>

                Hanguranketha, Sri Lanka

              </strong>

            </div>

          </div>


        </div>


      </div>


      {/* =========================
          SOCIAL LINKS
      ========================= */}

      <div className="contact-social-section">


        <p className="contact-small-label">

          FIND ME ONLINE

        </p>


        <div className="contact-social-links">


          <a

            href="https://github.com/TSupasan"

            target="_blank"

            rel="noreferrer"

            className="contact-social-link"

          >

            <FaGithub />

            <span>

              GitHub

            </span>

          </a>


          <a

            href="https://www.linkedin.com/in/tharindu-supasan-94434b19b"

            target="_blank"

            rel="noreferrer"

            className="contact-social-link"

          >

            <FaLinkedinIn />

            <span>

              LinkedIn

            </span>

          </a>


          <a

            href="https://www.facebook.com/share/1Cny9Q1YNk/?mibextid=wwXIfr"

            target="_blank"

            rel="noreferrer"

            className="contact-social-link"

          >

            <FaFacebookF />

            <span>

              Facebook

            </span>

          </a>


          <a

            href="https://www.instagram.com/___supe___"

            target="_blank"

            rel="noreferrer"

            className="contact-social-link"

          >

            <FaInstagram />

            <span>

              Instagram

            </span>

          </a>


          <a

            href="https://youtube.com/@thenextgen_"

            target="_blank"

            rel="noreferrer"

            className="contact-social-link"

          >

            <FaYoutube />

            <span>

              YouTube

            </span>

          </a>


        </div>


      </div>


      {/* =========================
          CONTACT FORM
      ========================= */}

      <div className="contact-form-section">


        {status !== 'success' && (

          <>

            <div className="contact-form-heading">


              <p className="contact-small-label">

                START A CONVERSATION

              </p>


              <h2>

                Let's build

                <span>

                  something.

                </span>

              </h2>


              <p>

                Have an idea, opportunity, or project in mind?

                Send me a message and let's talk.

              </p>


            </div>


            <form

              className="contact-form"

              onSubmit={handleSubmit}

            >


              <div className="contact-form-row">


                <div className="contact-form-group">

                  <label>

                    YOUR NAME

                  </label>


                  <input

                    type="text"

                    name="name"

                    placeholder="Tharindu..."

                    required

                  />

                </div>


                <div className="contact-form-group">

                  <label>

                    YOUR EMAIL

                  </label>


                  <input

                    type="email"

                    name="email"

                    placeholder="you@example.com"

                    required

                  />

                </div>


              </div>


              <div className="contact-form-group">

                <label>

                  SUBJECT

                </label>


                <input

                  type="text"

                  name="title"

                  placeholder="What would you like to talk about?"

                  required

                />

              </div>


              <div className="contact-form-group">

                <label>

                  YOUR MESSAGE

                </label>


                <textarea

                  name="message"

                  placeholder="Tell me about your idea..."

                  rows="6"

                  required

                />

              </div>


              <button

                type="submit"

                className="contact-form-submit"

                disabled={isSending}

              >

                {isSending

                  ? 'Sending...'

                  : 'Send Message ↗'

                }

              </button>


              {status === 'error' && (

                <p className="contact-form-error">

                  Something went wrong. Please try again.

                </p>

              )}


            </form>

          </>

        )}


        {/* =========================
            SUCCESS STATE
        ========================= */}

        {status === 'success' && (

          <div className="contact-success-state">


            <div className="contact-success-icon">

              <FaCheck />

            </div>


            <p className="contact-small-label">

              MESSAGE SENT SUCCESSFULLY

            </p>


            <h2>

              Thanks for

              <span>

                reaching out.

              </span>

            </h2>


            <p>

              Your message has been delivered successfully.

              I'll get back to you as soon as possible.

            </p>


            <button

              type="button"

              className="contact-new-message-button"

              onClick={handleNewMessage}

            >

              Send Another Message ↗

            </button>


          </div>

        )}


      </div>


      {/* =========================
          FOOTER MESSAGE
      ========================= */}

      <div className="contact-footer-message">

        <p>

          Let's build something meaningful together.

        </p>


        <span>

          © 2026 Tharindu Supasan Aththanayaka

        </span>


      </div>


    </section>

  )

}


export default Contact