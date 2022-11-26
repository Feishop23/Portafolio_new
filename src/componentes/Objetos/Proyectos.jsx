import React from 'react'
import { Cuadros } from './Cuadros/Cuadros'
import './Style/Style.css'
const Proyectos = () => {
  return (
    <div className='Proyectos'>
      
        <div className="Degradado">
            <div className="Cuadro-negro">
                <h1>Preyectos</h1>
               <div className='Cuadros-diseño'>
                <Cuadros/>
               </div>
            </div>
        </div>
        
    </div>
  )
}

export default Proyectos