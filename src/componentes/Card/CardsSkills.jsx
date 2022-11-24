import React from 'react'
import Skills from './Skills'

const cards = [
  {
    id: 1,
    title: 'Rick and mort',
    description: 'Find your favorite character from the rick and mort series and check out his or her full potential. '
  },
  {
    id: 2,
    title: 'Weather',
    description: 'Check the weather status from our application that uses your location in real time thanks to the use of APIs.'
  },
  {
    id: 3,
    title: ' E-commerce',
    description: 'Come and try our online store layout where the resources used were also taken from the use of APIs.'
  },
  {
    id: 4,
    title: 'Card random Generator',
    description: 'Interact with these cards where the operation is to give you random values thanks to the use of API.'
  }
  ]
const CardsSkills = () => {
  return (
    <div >
        {cards.map(card => (
            <Skills key={card.id} title={card.title}/>
        ))}
    </div>
  )
}

export default CardsSkills