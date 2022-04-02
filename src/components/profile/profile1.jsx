import '../../styles/profile/jeasson.css'

const uno = require('./img/1.jpg')
const dos = require('./img/2.jpg')
const tres = require('./img/3.jpg')
const cuatro = require('./img/4.jpg')
const cinco = require('./img/5.jpg')
const seis = require('./img/6.jpeg')
const siete = require('./img/7.jpg')
const ocho = require('./img/8.jpg')
const nueve = require('./img/9.jpg')
const diez = require('./img/10.jpg')
const once = require('./img/11.jpg')

const Profile1 = () => {
  return (
    <>
      <div style={{ overflow: 'auto' }}>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <svg
                className="gUZ lZJ U9O kVc"
                height="24"
                width="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
                aria-label=""
                role="img"
              >
                <path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path>
              </svg>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Inicio
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Hoy
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </nav>

        <main className="main">
          <div className="card">
            <img src={uno} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nombre de la imagen</h5>
              <p className="card-text">Informacion de la imagen</p>
              <a href="#" className="btn btn-primary">
                Guardar
              </a>
            </div>
          </div>
          <div className="card">
            <img src={dos} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nombre de la imagen</h5>
              <p className="card-text">Informacion de la imagen</p>
              <a href="#" className="btn btn-primary">
                Guardar
              </a>
            </div>
          </div>
          <div className="card">
            <img src={tres} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nombre de la imagen</h5>
              <p className="card-text">Informacion de la imagen</p>
              <a href="#" className="btn btn-primary">
                Guardar
              </a>
            </div>
          </div>
          <div className="card">
            <img src={cuatro} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nombre de la imagen</h5>
              <p className="card-text">Informacion de la imagen</p>
              <a href="#" className="btn btn-primary">
                Guardar
              </a>
            </div>
          </div>
          <div className="card">
            <img src={cinco} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nombre de la imagen</h5>
              <p className="card-text">Informacion de la imagen</p>
              <a href="#" className="btn btn-primary">
                Guardar
              </a>
            </div>
          </div>
          <div className="card">
            <img src={seis} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nombre de la imagen</h5>
              <p className="card-text">Informacion de la imagen</p>
              <a href="#" className="btn btn-primary">
                Guardar
              </a>
            </div>
          </div>
          <div className="card">
            <img src={siete} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nombre de la imagen</h5>
              <p className="card-text">Informacion de la imagen</p>
              <a href="#" className="btn btn-primary">
                Guardar
              </a>
            </div>
          </div>
          <div className="card">
            <img src={ocho} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nombre de la imagen</h5>
              <p className="card-text">Informacion de la imagen</p>
              <a href="#" className="btn btn-primary">
                Guardar
              </a>
            </div>
          </div>
          <div className="card">
            <img src={nueve} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nombre de la imagen</h5>
              <p className="card-text">Informacion de la imagen</p>
              <a href="#" className="btn btn-primary">
                Guardar
              </a>
            </div>
          </div>
          <div className="card">
            <img src={diez} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nombre de la imagen</h5>
              <p className="card-text">Informacion de la imagen</p>
              <a href="#" className="btn btn-primary">
                Guardar
              </a>
            </div>
          </div>
          <div className="card">
            <img src={once} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Nombre de la imagen</h5>
              <p className="card-text">Informacion de la imagen</p>
              <a href="#" className="btn btn-primary">
                Guardar
              </a>
            </div>
          </div>
          <div className="btnAddQ">
            <div>
              <p>+</p>
            </div>
            <div>
              <p>?</p>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Profile1
