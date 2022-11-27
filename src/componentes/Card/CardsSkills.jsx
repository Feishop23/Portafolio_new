import React, { useState } from 'react'
import Skills from './Skills'
import '../Objetos/Style/Style.css'
import useCount from '../hooks/useCount'


const cards = [
  {
    id: 0,
    title: 'Rick and mort',
    description: 'Find your favorite character from the rick and mort series and check out his or her full potential. '
  },
  {
    id: 1,
    title: 'Weather',
    description: 'Check the weather status from our application that uses your location in real time thanks to the use of APIs.'
  },
  {
    id: 2,
    title: ' E-commerce',
    description: 'Come and try our online store layout where the resources used were also taken from the use of APIs.'
  },
  {
    id: 3,
    title: 'Card random Generator',
    description: 'Interact with these cards where the operation is to give you random values thanks to the use of API.'
  }
  ];
  const quantity = cards.length

const CardsSkills = () => {
  const {rightText,leftText,count} = useCount(quantity)
    if(!Array.isArray(cards) || quantity === 0)
  return
   


  return (
    <div className='Skills_props_CardsSkills'>
      <button onClick={leftText} ><i className='fas fa-left-long'></i></button>
        {cards.map(card => {
          
          return(
          <div className={count === card.id ? `slide active`: 'slide'}>
              { count === card.id && <Skills key={card.id} title={card.title}/>}
            </div>
        )})}
        <button onClick={rightText} ><i className='fas fa-right-long'></i></button>
    </div>
  )
}

export default CardsSkills