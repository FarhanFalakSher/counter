import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  return (
    <div style={{margin : "100px"}}>
      <button onClick={()=>setCount(count - 1)}>Decrement</button>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App