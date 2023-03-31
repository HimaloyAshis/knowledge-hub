import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = ({Blog}) => {
    // console.log(Blog)

    // const [Title, setTitle] = useState()

   

    return (
        <div className='card'>
            <h4>Bookmarked Blogs : {Blog.length}</h4>
            {
                Blog.map(blog=><h4 className='mt-4 border p-4'>{blog.Blog_title} !!</h4>)
            }
            
        </div>
    );
};

export default Card;