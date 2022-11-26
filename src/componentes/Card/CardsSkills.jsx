import React, { useState } from 'react'
import Skills from './Skills'
import '../Objetos/Style/Style.css'


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
  ]
const CardsSkills = () => {

  const [count, setCount] = useState(0)

  const rightText = () => {
    setCount(count === quantity - 1 ? 0 : count + 1 )
  }
  const leftText = () => {
    setCount(count === 0  ? quantity - 1 : count - 1)
  }
  const quantity = cards?.length

  if(!Array.isArray(cards) || quantity === 0)
  return


  return (
    <div className='Skills_props_CardsSkills'>
      <button onClick={leftText} >←</button>
        {cards.map(card => {
          return(
            <div>
              { count === card.id && <Skills key={card.id} title={card.title}/>}
            </div>
        )})}
        <button onClick={rightText} >→</button>
    </div>
  )
}

export default CardsSkills