import React from 'react';
import './Card.css'

const Card = ({data}) => {
    return (
        <div className='image'>
            <img src={data.Cover_image} alt="" />
        </div>
    );
};

export default Card;