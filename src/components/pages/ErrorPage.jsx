import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <NavLink to="/"><button type="button border p-5 rounded border-white">Go Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;