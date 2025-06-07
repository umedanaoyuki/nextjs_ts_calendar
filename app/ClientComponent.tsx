"use client"
import { useState } from 'react'
import React from 'react'

export const ClientComponent = () => {

 const [count, setCount] = useState(0)

  return (
    <div>
      <p>ClientComponent</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>追加</button>
    </div>
  )
}
