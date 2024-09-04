import React from 'react';
import { NavLink } from 'react-router-dom';

const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;
    return (
        <div className='p-5 bg-zinc-200 rounded'>
            <div>
                <img src={logo} className='h-12' />
            </div>
            <h2 className='text-black font-semibold text-lg mt-4'>{job_title}</h2>
            <h3 className='text-black mb-2'>{company_name}</h3>
            <div className='flex gap-5 *:text-black *:px-4 *:py-1 *:border *:border-zinc-800'>
                <span>{remote_or_onsite}</span>
                <span>{job_type}</span>
            </div>
            <div className='flex gap-5 *:text-black mt-3 *:font-semibold'>
                <span>{location}</span>
                <span>${salary}K</span>
            </div>
            <NavLink to={`/job/${id}`}><button className='btn bg-zinc-900 text-white mt-3 rounded' type="button">View Details</button></NavLink>
        </div>
    );
};

export default Job;