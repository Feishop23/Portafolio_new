import React from 'react'
import Skills from './Skills'

const cards = [
    {
      id: 1,
      title: ' Feiberth',
      description: 'lorem lalsjjflaslkfjasdlfjloaiksjfolaisdjfoiasdjf'
    },
    {
      id: 2,
      title: ' Josue',
      description: 'lorem lalsjjflaslkfjasdlfjloaiksjfolaisdjfoiasdjf'
    },
    {
      id: 3,
      title: ' Portilla',
      description: 'lorem lalsjjflaslkfjasdlfjloaiksjfolaisdjfoiasdjf'
    },
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