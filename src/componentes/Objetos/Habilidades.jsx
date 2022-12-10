import React from 'react'

export const Habilidades = () => {
  return (
    <div className='Skill'>
      <div className='Container_Tittle'>
           <div className="Tittle">
               <h1>Habilidades extras</h1>
           </div>
           <div className="Concept">
               <p>Estas son mis habilidades extras en el hambito laboral y hobbits.</p>
           </div>
         
      </div>
        <div className="Grid_skill">
{/* Electric */}
         <div className="Skill_box"> 
            <li className='Skill_box'><i className='fas fa-bolt-lightning'></i></li>
            <h2>Electricidad</h2>
            <p>Tengo experiencia en el campo de la electricidad trabajando para algunas empresas como electricista.</p>
         </div>
{/* Design_Web */}
         <div className="Skill_box"> 
         <li className='Skill_box'><i className="fas fa-desktop" ></i></li>
            <h2>Diseño web</h2>
            <p>Cuento con un buen conocimiento para el Diseño de paginas web y muy buena creatividad.</p>
         </div>
{/* Logotypes */}
            <div className="Skill_box">  
            <li className='Skill_box'><i className='fas fa-pen-ruler'></i></li> 
            <h2>Logotipos</h2>
            <p>La creacion de marcas personales me han llevado al estudio tecnico de logotipos.</p>
         </div>
{/* Illustration */}
         <div className="Skill_box">
            <li className='Skill_box'><i>Ai</i></li>
            <h2>Illustraciones</h2>
            <p>Uno de mis hobbys favoritos a sido la ilistrusacion que me a llevado a estudiar a fondo el tema.</p>
         </div>
{/* Animation_with_Ae */}
         <div className="Skill_box">
            <li className='Skill_box'><i>Ae</i></li>
            <h2>Animaciones con Ae</h2>
            <p>Me destaco muy bien cuando se trata de animaciones en 2D y 3D asi que cuando se trata de animaciones soy el mejor.</p>
         </div>
{/* Edition_of_movie_with_Pr */}
         <div className="Skill_box">
            <li className='Skill_box'><i>Pr</i></li>
            <h2>Ediciones de video con Pr</h2>
            <p>La creacion de contenido me a llevado a prepararme muy bien en la edicion de videos profecional.</p>
         </div>
        </div>
    </div>
  )
}
