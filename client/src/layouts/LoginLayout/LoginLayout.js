import React from 'react';

const LoginLayout = ( {children} ) => {
    return (
        <div className='w-full h-screen bg-gray-600 flex items-center justify-center'>
            {children}
        </div>
    );
};

export default LoginLayout;