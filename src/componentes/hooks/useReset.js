import React, { useState } from 'react'

export const useReset = () => {
    const [dataForm, setDataForm] = useState({
        nombre: '',
        email: '',
        mensaje: ''
      })
      const dataInitial = {
        nombre: '',
          email: '',
          mensaje: ''
      }
      const handleSubmit = () => {
        setTimeout(()=>{
          setDataForm(dataInitial)
        },1000)
      }
  return{
setDataForm,
dataForm,
handleSubmit
  }
}
