import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

   let [counter, setCounter] = useState(10)
  //let counter = 15;
  const addvalue = () => {
    //console.log("Clicked", counter);
   // counter = counter+1;
    /*setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)*/
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
  }

  const removevalue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
    <h1>Ramana Aur React</h1>
    <h2>Counter value: {counter} </h2>

    <button
    onClick={addvalue}
    >Add value {counter}</button>
    <br />
    <button
    onClick={removevalue}
    >Remove value {counter}</button>
    </>
  )
}

export default App
