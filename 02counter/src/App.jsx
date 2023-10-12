import { useState } from 'react'

function App() {

  const addhoga = () =>{
    if(counter < 20){
      setCounter(counter+1)
    }
  }
  const removehoga = () =>{
    if(counter > 0){
    setCounter(counter-1)
    }
  }
  let [counter, setCounter] = useState(15)

  return (
    <>
    <h1>{counter}</h1>
    <button onClick={addhoga} > ADD VALUE {counter} </button>
    <button onClick={removehoga}> REMOVE VALUE {counter} </button>
    <footer> {counter} </footer>
    </>
  )
}

export default App
