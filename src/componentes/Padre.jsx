import React from 'react'
import Barra from './Objetos/Barra'
import Concepto from './Objetos/Concepto'
import Formulario from './Objetos/Formulario'
import { Habilidades } from './Objetos/Habilidades'
import { Presentacion } from './Objetos/Presentacion'
import Proyectos from './Objetos/Proyectos'
import { Tecnologias } from './Objetos/Tecnologias'

const Padre = () => {
  return (
    <div>
     <Barra/>
     <Presentacion/>
     <Proyectos/>
     <Habilidades/>
     <Concepto/>
     <Tecnologias/>
      <Formulario/>
    </div>
  )
}

export default Padre