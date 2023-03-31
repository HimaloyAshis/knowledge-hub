import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';

const Blogs = ({bookMark}) => {
    const [Blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className='m-auto'>
            {
                Blogs.map(blog=><Blog blog={blog} key={blog.id} bookMark={bookMark}></Blog>)
            }
        </div>
    );
};

export default Blogs;