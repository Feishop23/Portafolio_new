import React from 'react'
import { useState } from 'react'

const useCount = quantity => {
    const [count, setCount] = useState(0)
  const rightText = () => {
   setCount(count === quantity - 1 ? 0 : count + 1)
  }
  const leftText = () => {
    setCount(count === 0 ? quantity - 1 : count - 1)
  }
  return {
    count,
    rightText,
    leftText
  }
}

export default useCount
