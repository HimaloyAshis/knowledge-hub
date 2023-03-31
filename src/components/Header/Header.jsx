import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header px-5'>
            <h2>Knowledge Hut</h2>
            <img className='rounded-circle' src="https://images.unsplash.com/photo-1600188769045-bc6026bfc8cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF1dGhvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
        </div>
    );
};

export default Header;