
import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'


function App() {
 const [Data, setData] = useState([])

 useEffect(()=>{
  fetch('data.json')
  .then(res=>res.json())
  .then(data=>setData(data))
 },[])

  return (
    <div className="">
      <h2>hello</h2>
      <Blogs Data={Data}></Blogs>
    </div>
  )
}

export default App
