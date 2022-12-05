import React from 'react'


const Skills = ({Photo,Url,title}) => {
  return (
    <div className='Skills_props_Skills'> 
        <a target='_blank' className='Skills_P' href={Url}><img className='Skills_Photo' src={Photo} alt={Url} /> </a>
        <h2 className='Skills_h2'>{title}</h2>
    </div>
  )
}

export default Skills