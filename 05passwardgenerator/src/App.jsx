import { useState,useCallback ,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow,setNumberallow]=useState(false);
  const[charAllowed,setCharalllowed]=useState(false);
  const[password,setPassword]=useState("")

  //useRef hook
  const passRef=useRef(null)


  const passwordgenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllow) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*-_+=[]{}~`"

    for(let i=1;i<=length;i++){
        let char =Math.floor(Math.random()*str.length)

        pass+=str.charAt(char)
    }

    setPassword(pass)

  },[length,numberAllow,charAllowed,setPassword])

  const copyPasswordToClipboard=useCallback(()=>{
    passRef.current?.select();
    // passRef.current?.setSelectionRange(0,9)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordgenerator()
  },[length,numberAllow,charAllowed,passwordgenerator,])

  return (
    
<div className='min-h-screen flex items-center justify-center bg-slate-900'>
  
  <div className='w-full max-w-md shadow-lg rounded-xl px-6 py-5 bg-gray-800 text-orange-400'>
    <h1 className='text-white text-center text-2xl font-bold mb-4'>Password Generator</h1>

    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input type="text" 
              value={password}
              className='outline-none w-full py-2 px-3 text-black font-mono'
              placeholder="Password"
              readOnly
              ref={passRef}
        />
        <button onClick={copyPasswordToClipboard}
        className='bg-blue-600 hover:bg-blue-700 text-white px-4 transition'>Copy</button>
        
    </div>
  </div>
  <div className='flex flex-col gap-y-4 text-sm text-white'>
    <div className='flex items-center justify-between'>
      
       <label>Length:{length}</label>
      <input 
         type="range"
         min={6}
         max={100}
         value={length}
         className='cursor-pointer w-2/3'
         onChange={(e)=>{setLength(Number(e.target.value))}}
      /> 
    
    </div>
    <div className='flex items-center gap-x-2'>
      <input 
         type="checkbox"
         defaultChecked={numberAllow}
         id="numberInput"
         onChange={()=>{setNumberallow((prev)=>!prev)}}

      />
      <label>Include Numbers</label>

    </div>
    <div className='flex items-center gap-x-2'>
      <input 
         type="checkbox"
         defaultChecked={charAllowed}
         it="numberInput"
         onChange={()=>{setCharalllowed((prev)=>!prev)}}

      />
      <label>Include Characters</label>

    </div>

  </div>

</div>
    
  )

}

export default App
