import '../../styles/profile/jcrr.css'
//Images
const background = require('../../images/sobremi-bground.jpg')
const logoUD = require('../../images/escudo_UD.svg')

//Icons
import * as AiIcons from 'react-icons/ai'

const Jcrr = () => {
  return (
    <>
      <div className="sobremi" style={{ overflow: 'auto' }}>
        <div className="intro-to-me">
          <img src={background} alt="Wthoutjc" />
          <div className="quiensoy">
            <h1>¡ Hola !</h1>
            <h2>Soy estudiante de Ingeniería de Sistemas</h2>
            <p>
              Cada día trabajo para mejorar mis habilidades de ingeniería, abajo
              puedes encontrar información más específica sobre mí.
            </p>
          </div>
          <div className="contacto">
            <img
              src={logoUD}
              alt="Universidad Distrital Francisco José de Caldas"
            />
            <h1>TÉCNICAS DE ESTUDIO</h1>
            <h2>JUAN CAMILO RAMÍREZ RÁTIVA</h2>
            <h1>FACULTAD DE INGENIERÍA</h1>
            <h1>PROYECTO CURRICULAR DE INGENIERÍA DE SISTEMAS</h1>
            <h2>BOGOTÁ D.C - 2021</h2>
          </div>
        </div>
        <div className="unknowledge">
          <div className="u-title">
            <h1>
              CONOCIMIENTOS: <i>FullStack Jr.</i>
            </h1>
          </div>
          <div className="cards">
            <div className="react">
              <h1>REACT JS</h1>
              <li>React 17</li>
              <li>Redux</li>
              <li>Next JS</li>
            </div>
            <div className="python">
              <h1>Python</h1>
              <li>Django</li>
              <li>Flask</li>
              <li>Dash</li>
            </div>
            <div className="ia">
              <h1>INTELIGENCIA ARTIFICIAL</h1>
              <li>Tensorflow</li>
              <li>Keras</li>
              <li>Scikit-learn</li>
            </div>
          </div>
        </div>
        <div className="ilike">
          <div className="il-title">
            <h1>INFORMACIÓN DE CONTACTO</h1>
          </div>
          <div className="cards">
            <div className="github">
              <h1>GitHub</h1>
              <a href="https://github.com/wthoutjc">
                <i>GitHub</i> <AiIcons.AiFillGithub />
              </a>
            </div>
            <div className="correo">
              <h1>Correo</h1>
              <a href="mailto:jcramirezr@udistrital.edu.co">
                jcramirezr@correo.udistrital.edu.co
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jcrr
