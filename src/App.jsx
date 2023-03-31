
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './components/Blogs/Blogs'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


function App() {
  const [Blog, setBlog] = useState([])
  

  const bookMark=(blog)=>{
    console.log(blog.Blog_title)
   const newBlog = [...Blog, blog]
   setBlog(newBlog)
   setTitle(blog)
  }

  return (
    <div className="">
      <Header></Header>
      <div className='row'>
        <div className="blog col col-md-8">
          <Blogs bookMark={bookMark}></Blogs>
        </div>
        <div className=" col col-md-4">
          <Card Blog={Blog}></Card>
        </div>
      </div>
    </div>
  )
}

export default App
