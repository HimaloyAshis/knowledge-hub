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
                    <p className='fs-5 '><span className='fs-4 fw-bold'>State : </span> In one word State is a changeable element in react. State means situation it will change the situation and update it .</p>
                </div>
                <div className='mt-4'>
                    <p className='fs-4 fw-bold'>How the useState does works ?</p>
                    <p className='fs-5 '><span className='fs-4 fw-bold'>useState : </span> In one word useState is a changeable state.It has two parameter When useState call a function it changes the value of function or anything else and set the result other parameter then it render the result.</p>
                </div>
                <div className='mt-4'>
                    <p className='fs-4 fw-bold'>How many task useEffect does except data load?</p>
                    <p className='fs-5 '><span className='fs-4 fw-bold'>useEffect : </span> useEffect is a react hook what not only load data but also we can pass a function on dependency that means I have to do some thing after the useEffect's function rerender and it render the DOM again .</p>
                </div>
                <div className='mt-4'>
                    <p className='fs-4 fw-bold'>How does react work?</p>
                    <p className='fs-5 '><span className='fs-4 fw-bold'>useState : </span> In one word useState is a changeable state.It has two parameter When useState call a function it changes and set the result other parameter then it render the result.</p>
                </div>
            </div>
        </div>
    );
};

export default Narration;