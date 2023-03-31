import React, { useEffect, useState } from 'react';
import './Time.css'

const Time = ({time}) => {
    const [Time, setTime] =useState()
    useEffect(()=>{
        const getTime = JSON.parse(localStorage.getItem('time'))
        setTime(getTime)
    },[time])
    return (
        <div className='mt-4'>
            <h4 className='text-danger border p-4 border-rounded'>Spent time on read : {Time}</h4>
        </div>
    );
};

export default Time;