import { use, useState,useCallback,useEffect,useRef} from 'react'


function App() {

  // hooks
  const [length,setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("")


  // useRef hook
  const passwordRef = useRef(null)


  // generating passwordGenerator
  // use of callback hook
  // use callback function ko memorize krta hai jitna ho sake...
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "0123456789"
    }
    if(charAllowed){
      str += "!@#$%^&_+={}[]~`"
    }

    for(let i = 1;i <= length;i++){
      let char = Math.floor(Math.random() * str.length + 1) // array ka index value aaya hai random....

      pass += str.charAt(char)

    }

    setPassword(pass) // state updation...

  }, [length,numberAllowed,charAllowed,setPassword]) // optimization...


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,100);
    window.navigator.clipboard.writeText(password)
  },[password])


  // use of useEffect
  // jab bhi hamara page load hota hai to first time pe ye call hota hai...
  useEffect(() => {
    passwordGenerator();
  }, [length,numberAllowed,charAllowed,passwordGenerator]) // iss me kuch cherchar ho to dubara run kr do....
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow 
        rounded-lg overflow-hidden mb-4">
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
            type="checkbox"
            defaultChecked = {numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked = {charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
