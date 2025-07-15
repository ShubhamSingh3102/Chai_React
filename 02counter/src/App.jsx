import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  // use of hooks....
  let [counter,setCounter] = useState(15)


  // let counter = 15;

  // here counter value is not being updated on the web page seen by the user....
  // problem is due to ui updation...
  // and hence the power of react comes into play...

  // const addValue = () => {
  //   // console.log("Clicked",counter);
  //   //  counter = counter + 1;
  //   // setCounter(counter);
  //   if(counter < 20){
  //     setCounter(counter+1)
  //   }
  // }



  // important interview question on counter in react...

  const addValue = () => {
    // counter = counter + 1
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    setCounter((prevCounter) => prevCounter+1)
    
  }

  const removeValue = () => {
    // counter = counter - 1;
    if(counter > 0){
      setCounter(counter-1);
    }
  }

  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br />
    <br />
    <button
    onClick={removeValue}
    >Remove value {counter}</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App

