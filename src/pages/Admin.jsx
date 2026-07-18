import { useState } from 'react'
import { supabase } from '../lib/supabase'

function Admin() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [technologies, setTechnologies] = useState('')
  const [githubUrl, setGithubUrl] = useState('')
  const [liveUrl, setLiveUrl] = useState('')

  const [message, setMessage] = useState('')


  async function handleSubmit(event) {

    event.preventDefault()

    setMessage('Adding project...')


    const { error } = await supabase
      .from('projects')
      .insert({

        title: title,

        description: description,

        category: category,

        technologies: technologies,

        github_url: githubUrl || null,

        live_url: liveUrl || null,

        featured: false,

      })


    if (error) {

      console.error('SUPABASE ERROR:', error)

      setMessage(error.message)

      return

    }


    setMessage('Project added successfully!')


    setTitle('')
    setDescription('')
    setCategory('')
    setTechnologies('')
    setGithubUrl('')
    setLiveUrl('')

  }


  return (

    <section className="admin-page">


      <div className="admin-heading">

        <p>ADMIN PANEL</p>

        <h1>

          Manage your
          <span> projects.</span>

        </h1>

        <p>

          Add and manage projects
          for your portfolio.

        </p>

      </div>


      <form

        className="admin-project-form"

        onSubmit={handleSubmit}

      >


        <input

          type="text"

          placeholder="Project title"

          value={title}

          onChange={(event) =>
            setTitle(event.target.value)
          }

          required

        />


        <textarea

          placeholder="Project description"

          value={description}

          onChange={(event) =>
            setDescription(event.target.value)
          }

          required

        />


        <input

          type="text"

          placeholder="Category"

          value={category}

          onChange={(event) =>
            setCategory(event.target.value)
          }

          required

        />


        <input

          type="text"

          placeholder="Technologies (e.g. React, Node.js, Supabase)"

          value={technologies}

          onChange={(event) =>
            setTechnologies(event.target.value)
          }

          required

        />


        <input

          type="url"

          placeholder="GitHub URL (optional)"

          value={githubUrl}

          onChange={(event) =>
            setGithubUrl(event.target.value)
          }

        />


        <input

          type="url"

          placeholder="Live Demo URL (optional)"

          value={liveUrl}

          onChange={(event) =>
            setLiveUrl(event.target.value)
          }

        />


        <button type="submit">

          Add Project ↗

        </button>


        {message && (

          <p>

            {message}

          </p>

        )}


      </form>


    </section>

  )

}

export default Admin