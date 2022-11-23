import React from 'react'
import './Style/Style.css'
const Barra = () => {
  return (
    <div>
        <div className="Barra">
                <li><a href="">Icono</a></li>

            <ul>
                <li><a href="">Home</a></li>
                <li className='Btn_download'><a download='Feiberth Cv' href='./Cv.pdf'>Download CV</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Barra