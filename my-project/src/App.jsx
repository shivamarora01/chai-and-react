import { useState } from 'react'

function App() {
  const [count, setCount] = useState("olive")
  const [texto , setTexto] = useState("Hi ! i am Olive")

  const handleoClick = (newColor , newText) => {
    setCount(newColor);
    setTexto(newText);
  };

  const centerTextStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // Ensure the text is vertically centered
    fontSize: "7rem",   // Adjust the font size as desired
  };

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: count}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button
          onClick={() => handleoClick("red" , "Hi , i am Red")}
          className='outline-none px-3 py-1 rounded-full text-white'
          style={{backgroundColor: "red"}}
          >Red</button>

          <button
          onClick={() => handleoClick("green" , "Hi , i am Green")}
          className='outline-none px-3 py-1 rounded-full text-white'
          style={{backgroundColor: "green"}}
          >Green</button>

          <button
          onClick={() => handleoClick("blue" , "Hi , i am Blue")}
          className='outline-none px-3 py-1 rounded-full text-white'
          style={{backgroundColor: "blue"}}
          >blue</button>

          <button
          onClick={() => setCount("black")}
          className='outline-none px-3 py-1 rounded-full text-white'
          style={{backgroundColor: "black"}}
          >black</button>

          <button
          onClick={() => setCount("brown")}
          className='outline-none px-3 py-1 rounded-full text-white'
          style={{backgroundColor: "brown"}}
          >brown</button>

          <button
          onClick={() => setCount("orange")}
          className='outline-none px-3 py-1 rounded-full text-white'
          style={{backgroundColor: "orange"}}
          >orange</button>

          <button
          onClick={() => setCount("pink")}
          className='outline-none px-3 py-1 rounded-full text-white'
          style={{backgroundColor: "pink"}}
          >pink</button>

        </div>
      </div>
      <div style={centerTextStyle}>
        <div style={{ textAlign: "center" }}>{texto}</div>
      </div>
    </div>
  )
}

export default App
