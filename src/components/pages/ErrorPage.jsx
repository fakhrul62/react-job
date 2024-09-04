import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <NavLink to="/react-job"><button type="button">Go Home</button></NavLink>
        </div>
    );
};

export default ErrorPage;