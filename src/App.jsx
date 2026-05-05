import React, { useState } from 'react'

function App() {
  var [a,b] = useState (111);
  return (
    <div className = ' w-full h-screen bg-zinc-700 text-pink-300 p-4' >App
    
      <h1>{a} a</h1>
      <button onClick = {()=> b(a+111)}className = 'px-3 py-1 bg-pink-100 rounded-md text-small'>click</button>

    </div>
  )
}

export default App