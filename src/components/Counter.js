'use client'

import {useState} from 'react'

// TODO: Create a Counter component that accepts props
export default function Counter(/* Add your props here */) {
  const [count, setCount] = useState(99)
  
  return(
    <>
      <p>You have been clicked {count} times</p>
      <div>
      <button onClick={()=>setCount(count + 1)}>button +</button>
      </div>
      <div>
      <button onClick={()=>setCount(count - 1)}>button -</button>
      </div>
      <div>
      <button onClick={()=>setCount(count + 10)}>button + 10</button>
      </div>
      <div>
      <button onClick={()=>setCount(count - 10)}>button - 10</button>
      </div>
    </>
  )
}