import { useState  , useEffect, useCallback} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [addNum , setAddNum] = useState(false)
  const[addSym , setAddSym] = useState(false);
  const[Password , setPassword] = useState("")

  const passwordGen = useCallback(() => {
    let pass = ""
    let str = "QWERTYUIOPASDFGHJKLZXCVBNM"
    if(addNum) str += "1234567890"
    if(addSym) str += "!@#$%^&*()?{}[]"
    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  },[length , addNum , addSym , setPassword])


  useEffect(() => {
    passwordGen()
  },[length , addNum , addSym , passwordGen])

  return (
    <>
    <h1 className='my-10' >Password Generator</h1>
    <br></br>
    <input className='w-200 h-10' type="text" value={Password}/>
    <button className='mx-3 bg-blue-500' > Generate</button>
    <br></br>
    <div>
    <input className='my-3 mx-3' type="range" min={6} max={100} name="" id="" 
    onChange={(e) =>{
      setLength(e.target.value)
    }}/>
    <label className='my-3 mx-3' htmlFor="">Length: {length}</label>
    </div>
    <div className='my-3'>
      <input className='mx-3 my-3' type="checkbox" name="" id="" 
      onChange={() => {
        setAddNum((prev) => !prev)
      }}
      />
      <label >Add Number</label>
    </div>
    <div className='my-3'>
      <input className='mx-3 my-3' type="checkbox" name="" id="" 
            onChange={() => {
              setAddSym((prev) => !prev)
            }}/>
      <label >Add Symbols</label>
    </div>
    </>
  )
}

export default App
