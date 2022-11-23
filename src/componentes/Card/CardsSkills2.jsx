import React from 'react'
import Skills from './Skills'

const CardsSkills2 = () => {
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
  return (
    <div >
        {cards?.map(card => (
            <Skills key={card.id} title={card.description} />
        ))}
    </div>
  )
}

export default CardsSkills2