
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './components/Blogs/Blogs'
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Time from './components/Time/Time';



function App() {
  const [Blog, setBlog] = useState([])
  const [time, setTime] = useState()


  const markedAsRead = (time) => {
    const previousTime = JSON.parse(localStorage.getItem('time'))
    if (previousTime) {
      const sum = previousTime + time
      localStorage.setItem('time', sum)
      setTime(sum)
    }
    else {
      localStorage.setItem('time', time)
      setTime(time)
    }
  }

  const bookMark = (blog) => {
    // console.log(blog.Blog_title)
    const newBlog = [...Blog, blog]
    setBlog(newBlog)
  }

  return (
    <div className="">
      <Header></Header>
      <div className='row'>
        <div className="blog col col-md-8">

          <Blogs bookMark={bookMark} markedAsRead={markedAsRead}></Blogs>
        </div>
        <div className=" col col-md-4">
          <Time time={time}></Time>
          <Card Blog={Blog}></Card>
        </div>
      </div>
    </div>
  )
}

export default App
