import React from 'react'
import { useReset } from '../hooks/useReset'

const Formulario = () => {
  const {handleSubmit,dataForm,setDataForm} = useReset()

  return (
    <div className='Form'>
      <div className="Video_form">
         <video className='Video_technology'  loop autoPlay controls>
                  <source src='/gifs/video.mp4' type='video/mp4' />
                </video>
                </div>

                <div className="Form">
                <div className='Form_form'>
        <form onSubmit={handleSubmit}
         action="https://formsubmit.co/feiberth10portilla@hotmail.com" 
          target='_blank'
           method="POST" >

        <input 
        onChange={e => setDataForm(e.target.value)} 
        value={dataForm.nombre} 
        type="text" 
        className="form_input" 
        placeholder="Name:"
        required
         name="Nombre"  
         id="name"/>

        <input 
         onChange={e => setDataForm(e.target.value)} 
        value={dataForm.email}
         type="email"
          className="form_input" 
          placeholder="Email:"
          required
           name="Correo"
            id="email"/>

        <textarea 
         onChange={e=>setDataForm(e.target.value)} 
        value={dataForm.mensaje}
         className="form_input form_input--message" 
         placeholder="Message:"
         required 
         id="message" 
         name="Mensaje"></textarea>

        <input 
        type="submit" 
         target="_blank"
          value="Update"
          className="form_cta"/>
        </form>

    </div>
                </div>
                </div>
  )
}

export default Formulario