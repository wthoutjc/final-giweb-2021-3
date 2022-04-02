import '../../styles/profile/baquero.css'
const Profile0 = () => {
  const modal = document.getElementById('modal')
  const imgModal = document.getElementById('img-modal')
  const divPhotos = document.getElementsByClassName('photo')
  const btnClose = document.getElementById('btn-close')

  const arrayPhotos = Array.from(divPhotos)

  arrayPhotos?.forEach((divPhoto) => {
    divPhoto.addEventListener('click', () => {
      modal.style.display = 'flex'
      imgModal.src = divPhoto.children[0].src
    })
  })

  btnClose?.addEventListener('click', () => {
    modal.style.display = 'none'
  })
  return (
    <>
      <div style={{ overflow: 'auto' }}>
        <div className="content">
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/88057be369.js"
            crossOrigin="anonymous"
          ></script>
          <link
            rel="shortcut icon"
            href="./img/icon.png"
            type="image/x-icon"
          ></link>
          <div className="profile-cover">
            <img
              src="https://drive.google.com/uc?export=view&id=1xA5clQGw04dNsb2f22cGj_mHmYrmAnhF"
              alt=""
            />
          </div>
          <div className="profile-head">
            <div className="profile-img">
              <img
                src="https://drive.google.com/uc?export=view&id=1eN5kcCf7owbPVZV_DzRaby7Whhd6QPrD"
                alt="avatar"
              />
            </div>
            <div className="profile-desc">
              <h2>Andrés Leonardo Baquero Hernández</h2>
              <p>
                Mi nombre es Andrés, tengo 21 años y en este blog personal les
                contaré un poco acerca de mi y mostraré algunas imágenes sobre
                mi vida.
              </p>
            </div>
          </div>
          <hr />
          <div className="profile-body">
            <div className="intro" style={{ color: 'black !important' }}>
              <h2>Intro</h2>
              <div className="info">
                <div className="icon">
                  <span className="material-icons">school</span>
                </div>
                <div className="info-desc">
                  <p>
                    Estudio en{' '}
                    <b>
                      Universidad Distrital Francisco José de Caldas - Facultad
                      de Ingeniería
                    </b>
                  </p>
                </div>
              </div>
              <div className="info">
                <div className="icon">
                  <span className="material-icons">school</span>
                </div>
                <div className="info-desc">
                  <p>
                    Estudié en{' '}
                    <b>Escuela Tecnológica Instituto Técnico Central</b>
                  </p>
                </div>
              </div>
              <div className="info">
                <div className="icon">
                  <span className="material-icons">home</span>
                </div>
                <div className="info-desc">
                  <p>
                    Vivo en <b>Bogotá, Colombia</b>
                  </p>
                </div>
              </div>
              <div className="info">
                <div className="icon">
                  <span className="material-icons">place</span>
                </div>
                <div className="info-desc">
                  <p>
                    Soy de <b>Bogotá, Colombia</b>
                  </p>
                </div>
              </div>
              <div className="info">
                <div className="icon">
                  <span className="material-icons">cake</span>
                </div>
                <div className="info-desc">
                  <p>
                    Nací el <b>17 Feb 2000</b>
                  </p>
                </div>
              </div>
              <div className="info">
                <div className="icon">
                  <span className="material-icons">lunch_dining</span>
                </div>
                <div className="info-desc">
                  <p>
                    Me gusta la pasta, el arroz con pollo, el café y las comidas
                    rápidas, pero en particular la hamburguesa y las papas
                    fritas.
                  </p>
                </div>
              </div>
              <div className="info">
                <div className="icon">
                  <span className="material-icons">pets</span>
                </div>
                <div className="info-desc">
                  <p>
                    No tengo mascotas, pero me encantaría tener una, en
                    específico un gato y un perro.
                  </p>
                </div>
              </div>
              <div className="info">
                <div className="icon">
                  <span className="material-icons">thumb_up</span>
                </div>
                <div className="info-desc">
                  <p>
                    Me gusta caminar, salir con amigos, viajar, hacer deporte,
                    escuchar música y tomar fotos a paisajes naturales. También
                    me gustan los juegos de precisión, los videojuegos y estar
                    en contacto con la naturaleza.
                  </p>
                </div>
              </div>
            </div>
            <div className="photos">
              <div className="photo">
                <img
                  src="https://drive.google.com/uc?export=view&id=1JsT7X9odmONgrYnFrBfzg_124qmHdZDw"
                  alt="p1"
                />
              </div>
              <div className="photo">
                <img
                  src="https://drive.google.com/uc?export=view&id=1nrBlgAr0cxEw26wkoTBxkoIm8iVx_6xR"
                  alt="p2"
                />
              </div>
              <div className="photo">
                <img
                  src="https://drive.google.com/uc?export=view&id=1yNvFTjRWN_FcDKUabWC0HmBaZT-s0o9R"
                  alt="p3"
                />
              </div>
              <div className="photo">
                <img
                  src="https://drive.google.com/uc?export=view&id=1hjXAqZ8OkS-Mtx8cZPF4DnXjAgYMF8ip"
                  alt="p4"
                />
              </div>
              <div className="photo">
                <img
                  src="https://drive.google.com/uc?export=view&id=180-Itug37nWzlHG5ZiboUA40q6CMIqTD"
                  alt="p5"
                />
              </div>
              <div className="photo">
                <img
                  src="https://drive.google.com/uc?export=view&id=106eyGJ0fxoFead6Qyw3_dV1DzDJocLmD"
                  alt="p6"
                />
              </div>
              <div className="photo">
                <img
                  src="https://drive.google.com/uc?export=view&id=1VUvrlKi3bkt0sC6EY1LCtfWcVGUFd8Yu"
                  alt="p7"
                />
              </div>
              <div className="photo">
                <img
                  src="https://drive.google.com/uc?export=view&id=1OiCm_hEOvudZpjK2gFmEvir_MxewKWJh"
                  alt="p8"
                />
              </div>
              <div className="photo">
                <img
                  src="https://drive.google.com/uc?export=view&id=1o0FbwmRC16sAp8UWfJUzz5ppuSpAav_B"
                  alt="p9"
                />
              </div>
              <div className="photo">
                <img
                  src="https://drive.google.com/uc?export=view&id=16zE0IV4nletygR0ps80ra9NHlRpFn8-P"
                  alt="p10"
                />
              </div>
              <div className="photo">
                <img
                  src="https://drive.google.com/uc?export=view&id=1UkkOeMkICn4eI8xD647ZNpGKI2cEyI5P"
                  alt="p11"
                />
              </div>
              <div className="photo">
                <img
                  src="https://drive.google.com/uc?export=view&id=1uxZEvPCBL-FIwPBmR_rQvsQpefcl161h"
                  alt="p12"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="modal">
          <span className="material-icons close" id="btn-close">
            close
          </span>
          <img id="img-modal" />
        </div>
        <footer>
          <div className="redes-sociales">
            <a href="" className="red-social" id="whatsapp">
              <span className="material-icons">whatsapp</span>
            </a>
            <a href="" className="red-social" id="facebook">
              <span className="material-icons">facebook</span>
            </a>
            <a href="" className="red-social" id="github">
              <i className="fa fa-github"></i>
            </a>
            <a href="" className="red-social" id="instagram">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
          <div className="copyright">
            <p>
              &copy; 2022 Copyright: &nbsp;
              <b>Andrés Leonardo Baquero Hernández</b>
            </p>
          </div>
        </footer>
        <script src="index.js"></script>
      </div>
    </>
  )
}

export default Profile0
