import React, { useEffect, useState } from 'react';
import './Card.css'

const Card = ({Blog}) => {
    // console.log(Blog)

    // const [Title, setTitle] = useState()

   

    return (
        <div className='card'>
            <h4>Bookmarked Blogs : {Blog.length}</h4>
            {
                Blog.map(blog=>{
                    
                    if(blog.Blog_title===blog.Blog_title){
                        return <h4 className='mt-4 shadow-sm p-3 mb-5 bg-body-tertiary rounded'>{blog.Blog_title} !!</h4>
                    }
                    else{
                        return  console.log('not cool')

                    }
                })
            }
        
        </div>
    );
};

export default Card;