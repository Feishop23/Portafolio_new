import React from 'react'
import CardsSkills from '../../Card/CardsSkills';
import CardsSkills2 from '../../Card/CardsSkills2';
import '../Style/Style.css'


export const Cuadros = () => {
  
  return (
    <div>
         <div className='Contenedor-cuadros-grices'>
          
                  <div className="cuadros-gris-1">
                    <CardsSkills/>
                  </div>
                  <div className="cuadros-gris-2">
                    <CardsSkills2/>
                  </div>
                </div>
    </div>
  )
}
