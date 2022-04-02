import '../../styles/slider/slider.css'
import { useState, useRef, useEffect } from 'react'

// Components
import Jcrr from '../profile/profile2'
import Profile0 from '../profile/profile0'
import Profile1 from '../profile/profile1'

// Icons
import * as BsIcons from 'react-icons/bs'
import * as MdIcons from 'react-icons/md'

const Slider = () => {
  const biographies = [
    <Profile0 key={1} />,
    <Profile1 key={2} />,
    <Jcrr key={3} />,
  ]

  const [pag, setPag] = useState(1)

  const handleNextPag = () => pag < 3 && setPag(pag + 1)
  const handlePreviousPag = () => pag > 1 && setPag(pag - 1)

  const pagIndicator = useRef()

  useEffect(() => {
    for (let i = 0; i < pagIndicator.current.children.length; i++) {
      if (pagIndicator.current.children[i].hasAttribute('class')) {
        pagIndicator.current.children[i].removeAttribute('class')
      }
    }
    const current = pagIndicator.current.children[pag - 1]
    current.setAttribute('class', 'active')
  }, [pag])

  return (
    <>
      <div className="slider">
        <div className="slider-content">
          <div className="slider-content-title">
            <h1>PERFIL {pag}:</h1>
            {pag === 1 && <h1>Andrés Leonardo Baquero Hernández</h1>}
            {pag === 2 && <h1>Jeasson Alfonso Suárez Sánchez</h1>}
            {pag === 3 && <h1>Juan Camilo Ramírez Rátiva</h1>}
          </div>
          {biographies[pag - 1]}
          <div className="slider-content-footer">
            <div className="btn-move">
              <button
                className={pag === 1 ? 'no-clic' : 'clic'}
                onClick={handlePreviousPag}
              >
                <BsIcons.BsArrowReturnLeft />
              </button>
              <button
                className={pag === 3 ? 'no-clic' : 'clic'}
                onClick={handleNextPag}
              >
                <BsIcons.BsArrowReturnRight />
              </button>
            </div>
            <div className="pag-indicator" ref={pagIndicator}>
              <div onClick={() => setPag(1)}></div>
              <div onClick={() => setPag(2)}></div>
              <div onClick={() => setPag(3)}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Slider
