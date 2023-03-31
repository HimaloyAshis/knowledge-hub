import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { faUnderline } from '@fortawesome/free-solid-svg-icons'

const Blog = ({ blog, bookMark, markedAsRead }) => {
    // console.log(blog)
    const { Id, Author_Image, Author_Name, Blog_title, Cover_image, Publish_Time, Read_Time } = blog
    return (
        <div className='card m-auto w-75 mt-4'>
            <div className="imag w-75">
                <img className='img-fluid ms-5' src={Cover_image} alt="" />
            </div>
            <div className="d-flex justify-content-between mt-4">
                <div className="imgg d-flex m-1 m-auto">
                    <div className="w-25 ms-3">
                        <img className='w-25 rounded-circle' src={Author_Image} alt="" />
                    </div>
                    <div className=" w-25">
                        <h6>{Author_Name}</h6>
                        <p>{Publish_Time}</p>
                    </div>

                </div>
                <div className="d-flex align-items-center gap-3">
                    <p>{Read_Time}min </p>
                    <FontAwesomeIcon icon={faBookmark} onClick={() => bookMark(blog)} />
                </div>
            </div>
            <h3>{Blog_title}</h3>
            <div className='markasread'>
                <p onClick={() => markedAsRead(blog.Read_Time)} className="cursor: pointer">Mark as read</p>
                
            </div>

        </div>
    );
};

export default Blog;