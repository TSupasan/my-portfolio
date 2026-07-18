import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

function AdminLogin() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')


  async function handleLogin(event) {

    event.preventDefault()

    setLoading(true)
    setError('')


    const { error } = await supabase.auth.signInWithPassword({

      email,
      password

    })


    if (error) {

      setError(error.message)

      setLoading(false)

      return

    }


    navigate('/admin')

  }


  return (

    <section className="admin-login">

      <div className="admin-login-card">

        <p className="admin-label">
          ADMIN ACCESS
        </p>

        <h1>
          Welcome
          <span> back.</span>
        </h1>

        <p className="admin-description">
          Sign in to manage your projects.
        </p>


        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
          />


          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
          />


          {error && (

            <p className="admin-error">
              {error}
            </p>

          )}


          <button
            type="submit"
            disabled={loading}
          >

            {loading
              ? 'Signing in...'
              : 'Sign in ↗'
            }

          </button>

        </form>

      </div>

    </section>

  )

}

export default AdminLogin