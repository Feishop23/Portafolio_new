import React from 'react'
import './Style/Style.css'
const Barra = () => {
  return (
    <div>
        <div className="Barra">
                <li className='Barra_PORT'>
                  <a className='PORT' href="">P O</a>
                  <a className='PORT' href="">R T</a>
                  </li>

            <ul>
                <li className='Barra_li'><a href="">Home</a></li>
                <li className='Btn_download'><a download='Feiberth Cv' href='./Cv.pdf'>Download CV</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Barra