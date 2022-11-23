import React from 'react'
import './Style/Style.css'
export const Presentacion = () => {
  return (
    <div className="Present">
        <div className="Titulo"><h1>Bienvenido a mi portafolio <br /> soy Feiberth Portilla</h1></div>
        <div className="Parrafo"><p> Programador FullStack. Me gusta definirme por mis proyectos y <br /> mi forma de resolver los problemas de mis clientes.</p></div>
        <div className="Btn_present">
            <ul>
                <li className='Btn_download'><a download='Feiberth Cv' href='./Cv.pdf'>Download CV</a></li>
            </ul>
        </div>
    </div>
  )
}
