import React from 'react'
import { Ellipses } from './Design_Ellipse/Ellipses'
import './Style/Style.css'
const Concepto = () => {
  return (
    <div className='Concept'>
      <div className="Tittle_concept">
        <h1>El mundo de la programacion.</h1>
        <p>Es un mundo muy abierto cuando se trata de tecnologia y creacion, el concepto que mas me encanta sobre el tema es "Tienes la libertad de hacer y desacer el mundo tecnologico como gustes"</p>
        <div className="Btn_concept">
            <ul>
                <li className='Btn_download'><a download='Feiberth Cv' href='./Cv.pdf'>Download CV</a></li>
            </ul>
        </div>
      </div>
      <div className="Design">
        <Ellipses/>
      </div>
    </div>
  )
}

export default Concepto