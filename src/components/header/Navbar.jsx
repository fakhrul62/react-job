import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const li = (
        <>
        <NavLink to="/react-job">Home</NavLink>
        <NavLink to="/react-job/statistics">Statistics</NavLink>
        <NavLink to="/react-job/applied-jobs">Applied jobs</NavLink>
        <NavLink to="/react-job/blogs">Blogs</NavLink>
        </>
    )
  return (
    <div className="bg-zinc-950 border-b border-zinc-700">
      <div className="navbar w-10/12 mx-auto p-0">
        <div className="navbar-start h-16  border-zinc-700">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {li}
              
            </ul>
          </div>
          <a className="text-2xl font-black uppercase">React Job</a>
        </div>
        <div className="navbar-center h-16 hidden lg:flex border-l border-r border-zinc-700 px-20">
          <ul className="menu menu-horizontal px-1 gap-5">
           {li}
          </ul>
        </div>
        <div className="navbar-end h-16 border-zinc-700">
          <a className="btn bg-gray-300 border border-gray-300 hover:border-gray-300  hover:bg-zinc-900 hover:text-white text-zinc-900">Start Applying</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
