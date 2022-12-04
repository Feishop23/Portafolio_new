import React from 'react'


const Skills = ({Photo,Url}) => {
  return (
    <div className='Skills_props_Skills'> 
        <a target='_blank' className='Skills_P' href={Url}><img className='Skills_Photo' src={Photo} alt={Url} /> </a>

    </div>
  )
}

export default Skills