import React from 'react'
import { Ellipses } from './Design_Ellipse/Ellipses'
import './Style/Style.css'
const Concepto = () => {
  return (
    <div className='Concept'>
      <div className="Tittle_concept">
        <h1>Resumen sobre mi conocimiento con BD.</h1>
        <p>Me paso trabajando, estudiando, practicando, creando y analizando  base de datos llegando a presentar un exelente servicio como programador FullStack dando a entender que mis servicio abastecen todo tipo de necesidades labolares y solucionando errores frecuentes basados en PostgreSQL y Json.js.</p>
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