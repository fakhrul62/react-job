import React from 'react';
import Navbar from '../header/Navbar';
import { Outlet } from 'react-router-dom';
import Footers from '../footer/Footers';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footers></Footers>
        </div>
    );
};

export default MainLayout;