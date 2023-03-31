import React from 'react';
import './Narration.css'

const Narration = () => {
    return (
        <div className=' mt-5 m-auto'>
            <div className='heading mx-5 rounded d-flex'>
                <h4 className=' d-flex m-auto'>Narration Area</h4>
            </div>
            <div className="narration mt-5 mx-5 rounded">
                <div className='mt-4'>
                    <p className='fs-4 fw-bold'>Different in between  props and state ?</p>
                    <p className='fs-5 '><span className='fs-4 fw-bold'>Props : </span>Props is data passing parameter which through we pass data from one parameter to another.</p>
                    <p className='fs-5 '><span className='fs-4 fw-bold'>State : </span>Props is data passing parameter which through we pass data from one parameter to another.</p>
                </div>
            </div>
        </div>
    );
};

export default Narration;