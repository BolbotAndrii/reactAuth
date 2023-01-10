import React from 'react';

const LoginLayout = ( {children} ) => {
    return (
        <div className='w-full h-screen bg-gray-900 flex items-center justify-center'>
            {children}
        </div>
    );
};

export default LoginLayout;