
import React from 'react'
import Products from './Products'

function App() {
  return (
    //<div>App</div>=> React.createElement
    /*
    <div className = 'main'>
      <h1>Hi</h1>
    </div>
    */


    //<></> {react fragment} OR out everything inside a div
    

    <div className = "w-full h-screen bg-pink-200 p-4"> 
      <div className = "w-1/2 h-1/2 rounded-md bg-red-300 p-3 text-white">
        <h3> Life is pretty</h3>
      </div>
      <Products/>
    </div>

  );
}

//export default App



