import React from 'react';

import logo from './logo192.png'

const Logo = () => {
    return (
        <div className='flex items-center p-4'>
            <img src={logo} alt={logo} className="w-10 mr-2"/>
            <a href="/" className='uppercase text-cyan-400 font-bold decoration-0 whitespace-nowrap'>Admin Panel</a>
        </div>
    );
};

export default Logo;