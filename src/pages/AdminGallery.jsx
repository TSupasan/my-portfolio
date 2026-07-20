import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'


function AdminGallery() {


  // =========================
  // FORM STATES
  // =========================

  const [galleryTitle, setGalleryTitle] =
    useState('')

  const [galleryDescription, setGalleryDescription] =
    useState('')

  const [galleryCategory, setGalleryCategory] =
    useState('')

  const [gallerySection, setGallerySection] =
    useState('more')

  const [galleryLink, setGalleryLink] =
    useState('')

  const [galleryLinkType, setGalleryLinkType] =
    useState('')

  const [galleryImageFile, setGalleryImageFile] =
    useState(null)


  // =========================
  // GALLERY STATES
  // =========================

  const [galleryItems, setGalleryItems] =
    useState([])

  const [loadingGallery, setLoadingGallery] =
    useState(true)

  const [uploading, setUploading] =
    useState(false)

  const [message, setMessage] =
    useState('')

  const [galleryToDelete, setGalleryToDelete] =
    useState(null)


  // =========================
  // FETCH GALLERY
  // =========================

  useEffect(() => {

    fetchGallery()

  }, [])


  async function fetchGallery() {

    setLoadingGallery(true)


    const { data, error } =
      await supabase

        .from('gallery')

        .select('*')

        .order('created_at', {

          ascending: false

        })


    if (error) {

      console.error(
        'FETCH GALLERY ERROR:',
        error
      )

      setMessage(
        error.message
      )

    } else {

      setGalleryItems(
        data || []
      )

    }


    setLoadingGallery(false)

  }


  // =========================
  // RESET FORM
  // =========================

  function resetForm() {

    setGalleryTitle('')

    setGalleryDescription('')

    setGalleryCategory('')

    setGallerySection('more')

    setGalleryLink('')

    setGalleryLinkType('')

    setGalleryImageFile(null)


    const fileInput =
      document.getElementById(
        'gallery-image-input'
      )


    if (fileInput) {

      fileInput.value = ''

    }

  }


  // =========================
  // ADD GALLERY ITEM
  // =========================

  async function handleGallerySubmit(event) {

    event.preventDefault()


    setUploading(true)

    setMessage('')


    try {


      let imageUrl = null


      // =========================
      // UPLOAD IMAGE
      // =========================

      if (galleryImageFile) {


        const fileExtension =
          galleryImageFile.name
            .split('.')
            .pop()


        const fileName =
          `${Date.now()}-${Math.random()
            .toString(36)
            .substring(2)}.${fileExtension}`


        const filePath =
          `gallery/${fileName}`


        const {
          error: uploadError
        } = await supabase.storage

          .from('gallery-images')

          .upload(

            filePath,

            galleryImageFile

          )


        if (uploadError) {

          throw uploadError

        }


        const {
          data: publicUrlData
        } = supabase.storage

          .from('gallery-images')

          .getPublicUrl(

            filePath

          )


        imageUrl =
          publicUrlData.publicUrl

      }


      // =========================
      // INSERT DATABASE RECORD
      // =========================

      const {
        error: insertError
      } = await supabase

        .from('gallery')

        .insert({

          title: galleryTitle,

          description:
            galleryDescription,

          category:
            galleryCategory,

          section:
            gallerySection,

          image_url:
            imageUrl,

          link_url:
            galleryLink || null,

          link_type:
            galleryLinkType || null

        })


      if (insertError) {

        throw insertError

      }


      setMessage(

        'Gallery item added successfully!'

      )


      resetForm()

      fetchGallery()


    } catch (error) {


      console.error(

        'GALLERY ERROR:',

        error

      )


      setMessage(

        error.message

      )


    }


    setUploading(false)

  }


  // =========================
  // DELETE CLICK
  // =========================

  function handleDeleteClick(item) {

    setGalleryToDelete(item)

  }


  // =========================
  // CONFIRM DELETE
  // =========================

  async function confirmDeleteGallery() {


    if (!galleryToDelete) {

      return

    }


    const {
      error
    } = await supabase

      .from('gallery')

      .delete()

      .eq(

        'id',

        galleryToDelete.id

      )


    if (error) {


      setMessage(

        error.message

      )


      setGalleryToDelete(null)

      return

    }


    setMessage(

      'Gallery item deleted successfully!'

    )


    setGalleryToDelete(null)


    fetchGallery()

  }


  return (


    <section

      className="admin-gallery-page"

    >


      {/* =========================
          PAGE HEADER
      ========================= */}


      <div

        className="admin-gallery-header"

      >


        <p

          className="admin-gallery-label"

        >

          GALLERY MANAGEMENT

        </p>


        <h1>

          Add your

          <span>

            moments.

          </span>

        </h1>


        <p

          className="admin-gallery-description"

        >

          Manage images and creative content

          across your portfolio sections.

        </p>


      </div>


      {/* =========================
          ADD GALLERY FORM
      ========================= */}


      <form

        className="admin-gallery-form"

        onSubmit={

          handleGallerySubmit

        }

      >


        <div

          className="admin-gallery-form-heading"

        >

          <p>

            NEW GALLERY ITEM

          </p>


          <h2>

            Add visual

            <span>

              content.

            </span>

          </h2>

        </div>


        <input

          type="text"

          placeholder="Gallery title"

          value={galleryTitle}

          onChange={

            (event) =>

              setGalleryTitle(

                event.target.value

              )

          }

          required

        />


        <textarea

          placeholder="Gallery description"

          value={galleryDescription}

          onChange={

            (event) =>

              setGalleryDescription(

                event.target.value

              )

          }

          required

        />


        <div

          className="admin-gallery-form-row"

        >


          <select

            value={gallerySection}

            onChange={

              (event) =>

                setGallerySection(

                  event.target.value

                )

            }

          >

            <option value="more">

              More

            </option>


            <option value="sports">

              Sports

            </option>


            <option value="it">

              IT

            </option>


            <option value="creator">

              Creator

            </option>

          </select>


          <input

            type="text"

            placeholder="Category e.g. Travel, Rugby, Coding"

            value={galleryCategory}

            onChange={

              (event) =>

                setGalleryCategory(

                  event.target.value

                )

            }

            required

          />

        </div>


        {/* =========================
            IMAGE UPLOAD
        ========================= */}


        <label

          className="admin-gallery-upload-box"

        >


          <span

            className="admin-gallery-upload-icon"

          >

            ＋

          </span>


          <strong>

            {

              galleryImageFile

                ? galleryImageFile.name

                : 'Upload an image'

            }

          </strong>


          <small>

            PNG, JPG or WEBP

          </small>


          <input

            id="gallery-image-input"

            type="file"

            accept="image/jpeg,image/png,image/webp"

            onChange={

              (event) =>

                setGalleryImageFile(

                  event.target.files[0]

                )

            }

          />

        </label>


        <input

          type="url"

          placeholder="Optional link (YouTube, Instagram, GitHub...)"

          value={galleryLink}

          onChange={

            (event) =>

              setGalleryLink(

                event.target.value

              )

          }

        />


        <select

          value={galleryLinkType}

          onChange={

            (event) =>

              setGalleryLinkType(

                event.target.value

              )

          }

        >

          <option value="">

            No link type

          </option>


          <option value="youtube">

            YouTube

          </option>


          <option value="instagram">

            Instagram

          </option>


          <option value="github">

            GitHub

          </option>


          <option value="external">

            External Link

          </option>

        </select>


        <button

          type="submit"

          disabled={uploading}

          className="admin-gallery-submit"

        >

          {

            uploading

              ? 'Uploading...'

              : 'Add Gallery Item ↗'

          }

        </button>


        {

          message && (

            <p

              className="admin-gallery-message"

            >

              {message}

            </p>

          )

        }


      </form>


      {/* =========================
          GALLERY ITEMS
      ========================= */}


      <div

        className="admin-gallery-list"

      >


        <div

          className="admin-gallery-list-header"

        >

          <p>

            YOUR CONTENT

          </p>


          <h2>

            Gallery

            <span>

              items.

            </span>

          </h2>

        </div>


        {

          loadingGallery && (

            <p>

              Loading gallery...

            </p>

          )

        }


        {

          !loadingGallery &&

          galleryItems.length === 0 && (

            <p>

              No gallery items yet.

            </p>

          )

        }


        {

          !loadingGallery &&

          galleryItems.length > 0 && (

            <div

              className="admin-gallery-grid"

            >


              {

                galleryItems.map(

                  (item) => (


                    <article

                      className="admin-gallery-card"

                      key={item.id}

                    >


                      {

                        item.image_url && (

                          <div

                            className="admin-gallery-card-image"

                          >

                            <img

                              src={

                                item.image_url

                              }

                              alt={

                                item.title

                              }

                            />

                          </div>

                        )

                      }


                      <div

                        className="admin-gallery-card-content"

                      >


                        <div

                          className="admin-gallery-card-top"

                        >

                          <span>

                            {

                              item.section

                            }

                          </span>


                          <span>

                            {

                              item.category

                            }

                          </span>

                        </div>


                        <h3>

                          {

                            item.title

                          }

                        </h3>


                        <p>

                          {

                            item.description

                          }

                        </p>


                        {

                          item.link_url && (

                            <a

                              href={

                                item.link_url

                              }

                              target="_blank"

                              rel="noreferrer"

                            >

                              View Link ↗

                            </a>

                          )

                        }


                        <button

                          type="button"

                          onClick={

                            () =>

                              handleDeleteClick(

                                item

                              )

                          }

                          className="admin-gallery-delete"

                        >

                          Delete

                        </button>


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

        galleryToDelete && (


          <div

            className="admin-gallery-modal-overlay"

          >


            <div

              className="admin-gallery-modal"

            >


              <div

                className="admin-gallery-modal-icon"

              >

                !

              </div>


              <h2>

                Delete this item?

              </h2>


              <p>

                Are you sure you want to delete

                <strong>

                  {galleryToDelete.title}

                </strong>

                ?

              </p>


              <div

                className="admin-gallery-modal-actions"

              >


                <button

                  type="button"

                  onClick={

                    () =>

                      setGalleryToDelete(

                        null

                      )

                  }

                >

                  Cancel

                </button>


                <button

                  type="button"

                  onClick={

                    confirmDeleteGallery

                  }

                >

                  Delete

                </button>


              </div>


            </div>

          </div>

        )

      }


    </section>

  )

}


export default AdminGallery