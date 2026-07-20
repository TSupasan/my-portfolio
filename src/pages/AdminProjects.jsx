import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'


function AdminProjects() {


  const navigate = useNavigate()


  // =========================
  // PROJECT FORM STATES
  // =========================

  const [title, setTitle] =
    useState('')

  const [description, setDescription] =
    useState('')

  const [category, setCategory] =
    useState('')

  const [technologies, setTechnologies] =
    useState('')

  const [githubUrl, setGithubUrl] =
    useState('')

  const [liveUrl, setLiveUrl] =
    useState('')

  const [imageFile, setImageFile] =
    useState(null)


  // =========================
  // PROJECT STATES
  // =========================

  const [projects, setProjects] =
    useState([])

  const [loadingProjects, setLoadingProjects] =
    useState(true)

  const [editingProjectId, setEditingProjectId] =
    useState(null)


  // =========================
  // COMMON STATES
  // =========================

  const [message, setMessage] =
    useState('')

  const [projectToDelete, setProjectToDelete] =
    useState(null)

  const [loading, setLoading] =
    useState(false)


  // =========================
  // FETCH PROJECTS
  // =========================

  useEffect(() => {

    fetchProjects()

  }, [])


  async function fetchProjects() {


    setLoadingProjects(true)


    const {

      data,

      error

    } = await supabase

      .from('projects')

      .select('*')

      .order(

        'created_at',

        {

          ascending: false

        }

      )


    if (error) {


      console.error(

        'FETCH PROJECTS ERROR:',

        error

      )


      setMessage(

        error.message

      )


    } else {


      setProjects(

        data || []

      )

    }


    setLoadingProjects(false)

  }


  // =========================
  // RESET FORM
  // =========================

  function resetForm() {


    setEditingProjectId(null)


    setTitle('')

    setDescription('')

    setCategory('')

    setTechnologies('')

    setGithubUrl('')

    setLiveUrl('')

    setImageFile(null)


    const fileInput =

      document.getElementById(

        'project-image-input'

      )


    if (fileInput) {

      fileInput.value = ''

    }

  }


  // =========================
  // EDIT PROJECT
  // =========================

  function handleEdit(project) {


    setEditingProjectId(

      project.id

    )


    setTitle(

      project.title || ''

    )


    setDescription(

      project.description || ''

    )


    setCategory(

      project.category || ''

    )


    setTechnologies(

      project.technologies || ''

    )


    setGithubUrl(

      project.github_url || ''

    )


    setLiveUrl(

      project.live_url || ''

    )


    setImageFile(null)


    window.scrollTo({

      top: 0,

      behavior: 'smooth'

    })

  }


  // =========================
  // UPLOAD PROJECT IMAGE
  // =========================

  async function uploadProjectImage() {


    if (!imageFile) {

      return null

    }


    const fileExtension =

      imageFile.name

        .split('.')

        .pop()


    const fileName =

      `${Date.now()}-${Math.random()

        .toString(36)

        .substring(2)}.${fileExtension}`


    const filePath =

      `projects/${fileName}`


    const {

      error: uploadError

    } = await supabase.storage

      .from('project-images')

      .upload(

        filePath,

        imageFile

      )


    if (uploadError) {

      throw uploadError

    }


    const {

      data

    } = supabase.storage

      .from('project-images')

      .getPublicUrl(

        filePath

      )


    return data.publicUrl

  }


  // =========================
  // ADD / UPDATE PROJECT
  // =========================

  async function handleSubmit(event) {


    event.preventDefault()


    setLoading(true)

    setMessage('')


    try {


      let imageUrl = null


      if (imageFile) {


        imageUrl =

          await uploadProjectImage()

      }


      // =========================
      // UPDATE
      // =========================

      if (editingProjectId) {


        const updatedProject = {


          title,

          description,

          category,

          technologies,

          github_url:

            githubUrl || null,

          live_url:

            liveUrl || null

        }


        if (imageUrl) {


          updatedProject.image_url =

            imageUrl

        }


        const {

          error

        } = await supabase

          .from('projects')

          .update(

            updatedProject

          )

          .eq(

            'id',

            editingProjectId

          )


        if (error) {

          throw error

        }


        setMessage(

          'Project updated successfully!'

        )

      }


      // =========================
      // ADD
      // =========================

      else {


        const {

          error

        } = await supabase

          .from('projects')

          .insert({

            title,

            description,

            category,

            technologies,

            github_url:

              githubUrl || null,

            live_url:

              liveUrl || null,

            image_url:

              imageUrl,

            featured:

              false

          })


        if (error) {

          throw error

        }


        setMessage(

          'Project added successfully!'

        )

      }


      resetForm()

      fetchProjects()


    } catch (error) {


      console.error(

        'PROJECT ERROR:',

        error

      )


      setMessage(

        error.message

      )

    }


    setLoading(false)

  }


  // =========================
  // DELETE CLICK
  // =========================

  function handleDeleteClick(project) {


    setProjectToDelete(

      project

    )

  }


  // =========================
  // CONFIRM DELETE
  // =========================

  async function confirmDeleteProject() {


    if (!projectToDelete) {

      return

    }


    const {

      error

    } = await supabase

      .from('projects')

      .delete()

      .eq(

        'id',

        projectToDelete.id

      )


    if (error) {


      setMessage(

        error.message

      )


      setProjectToDelete(

        null

      )


      return

    }


    setMessage(

      'Project deleted successfully!'

    )


    setProjectToDelete(

      null

    )


    fetchProjects()

  }


  return (


    <section

      className="admin-projects-page"

    >


      {/* =========================
          PAGE HEADER
      ========================= */}


      <div

        className="admin-projects-header"

      >


        <div>


          <p

            className="admin-label"

          >

            PROJECT MANAGEMENT

          </p>


          <h1>

            Manage your

            <span>

              projects.

            </span>

          </h1>


          <p

            className="admin-projects-description"

          >

            Add, edit, and manage the projects

            displayed on your portfolio.

          </p>


        </div>


        <button

          type="button"

          className="admin-back-button"

          onClick={() =>

            navigate('/admin')

          }

        >

          ← Dashboard

        </button>


      </div>


      {/* =========================
          PROJECT FORM
      ========================= */}


      <form

        className="admin-project-form"

        onSubmit={

          handleSubmit

        }

      >


        <div

          className="admin-project-form-header"

        >


          <p

            className="admin-label"

          >

            {

              editingProjectId

                ? 'EDIT PROJECT'

                : 'NEW PROJECT'

            }

          </p>


          <h2>


            {

              editingProjectId

                ? 'Update your'

                : 'Add a new'

            }


            <span>

              project.

            </span>


          </h2>


        </div>


        <input

          type="text"

          placeholder="Project title"

          value={title}

          onChange={

            (event) =>

              setTitle(

                event.target.value

              )

          }

          required

        />


        <textarea

          placeholder="Project description"

          value={description}

          onChange={

            (event) =>

              setDescription(

                event.target.value

              )

          }

          required

        />


        <div

          className="admin-project-form-row"

        >


          <input

            type="text"

            placeholder="Category"

            value={category}

            onChange={

              (event) =>

                setCategory(

                  event.target.value

                )

            }

            required

          />


          <input

            type="text"

            placeholder="Technologies"

            value={technologies}

            onChange={

              (event) =>

                setTechnologies(

                  event.target.value

                )

            }

            required

          />

        </div>


        <input

          type="url"

          placeholder="GitHub URL (optional)"

          value={githubUrl}

          onChange={

            (event) =>

              setGithubUrl(

                event.target.value

              )

          }

        />


        <input

          type="url"

          placeholder="Live Demo URL (optional)"

          value={liveUrl}

          onChange={

            (event) =>

              setLiveUrl(

                event.target.value

              )

          }

        />


        {/* =========================
            IMAGE UPLOAD
        ========================= */}


        <label

          className="admin-project-upload-box"

        >


          <span

            className="admin-project-upload-icon"

          >

            ＋

          </span>


          <strong>

            {


              imageFile

                ? imageFile.name

                : editingProjectId

                  ? 'Change Project Image'

                  : 'Upload Project Image'

            }


          </strong>


          <small>

            JPG, PNG or WEBP

          </small>


          <input

            id="project-image-input"

            type="file"

            accept="image/jpeg,image/png,image/webp"

            onChange={

              (event) =>

                setImageFile(

                  event.target.files[0]

                )

            }

          />


        </label>


        {/* =========================
            ACTIONS
        ========================= */}


        <div

          className="admin-project-form-actions"

        >


          <button

            type="submit"

            disabled={loading}

            className="admin-project-submit"

          >

            {


              loading

                ? 'Saving...'

                : editingProjectId

                  ? 'Update Project ↗'

                  : 'Add Project ↗'

            }


          </button>


          {


            editingProjectId && (


              <button

                type="button"

                className="admin-project-cancel"

                onClick={

                  resetForm

                }

              >

                Cancel

              </button>

            )

          }


        </div>


        {


          message && (


            <p

              className="admin-project-message"

            >

              {message}

            </p>

          )

        }


      </form>


      {/* =========================
          PROJECT LIST
      ========================= */}


      <div

        className="admin-projects-list"

      >


        <div

          className="admin-projects-list-header"

        >


          <p

            className="admin-label"

          >

            YOUR WORK

          </p>


          <h2>

            Portfolio

            <span>

              projects.

            </span>

          </h2>


        </div>


        {


          loadingProjects && (


            <p>

              Loading projects...

            </p>

          )

        }


        {


          !loadingProjects &&

          projects.length === 0 && (


            <p>

              No projects yet.

            </p>

          )

        }


        {


          !loadingProjects &&

          projects.length > 0 && (


            <div

              className="admin-projects-grid"

            >


              {


                projects.map(

                  (project) => (


                    <article

                      className="admin-project-card"

                      key={

                        project.id

                      }

                    >


                      {


                        project.image_url && (


                          <div

                            className="admin-project-card-image"

                          >


                            <img

                              src={

                                project.image_url

                              }

                              alt={

                                project.title

                              }

                            />


                          </div>

                        )

                      }


                      <div

                        className="admin-project-card-content"

                      >


                        <p

                          className="admin-project-card-category"

                        >

                          {

                            project.category

                          }

                        </p>


                        <h3>

                          {

                            project.title

                          }

                        </h3>


                        <p

                          className="admin-project-card-description"

                        >

                          {

                            project.description

                          }

                        </p>


                        <span

                          className="admin-project-card-technologies"

                        >

                          {

                            project.technologies

                          }

                        </span>


                        <div

                          className="admin-project-card-actions"

                        >


                          <button

                            type="button"

                            className="edit-project-button"

                            onClick={() =>

                              handleEdit(

                                project

                              )

                            }

                          >

                            Edit

                          </button>


                          <button

                            type="button"

                            className="delete-project-button"

                            onClick={() =>

                              handleDeleteClick(

                                project

                              )

                            }

                          >

                            Delete

                          </button>


                        </div>


                      </div>


                    </article>

                  )

                )

              }


            </div>

          )

        }


      </div>


      {/* =========================
          DELETE MODAL
      ========================= */}


      {


        projectToDelete && (


          <div

            className="delete-modal-overlay"

          >


            <div

              className="delete-modal"

            >


              <div

                className="delete-modal-icon"

              >

                !

              </div>


              <h2>

                Delete Project?

              </h2>


              <p>

                Are you sure you want to delete

                <strong>

                  {

                    projectToDelete.title

                  }

                </strong>

                ?

              </p>


              <span>

                This action cannot be undone.

              </span>


              <div

                className="delete-modal-actions"

              >


                <button

                  type="button"

                  className="modal-cancel-button"

                  onClick={() =>

                    setProjectToDelete(

                      null

                    )

                  }

                >

                  Cancel

                </button>


                <button

                  type="button"

                  className="modal-delete-button"

                  onClick={

                    confirmDeleteProject

                  }

                >

                  Delete Project

                </button>


              </div>


            </div>


          </div>

        )

      }


    </section>

  )

}


export default AdminProjects