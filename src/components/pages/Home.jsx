import React from 'react';
import Categories from './Categories';
import Featured from './Featured';

const Home = () => {
    return (
        <div className='bg-zinc-950'>
            <div className='w-10/12 mx-auto grid grid-cols-[70%_30%]'>
                <div className='flex flex-col justify-center gap-5'>
                    <h1 className='text-7xl font-black leading-tight'>
                    One Step <br /> Closer To Your <br /> <span className='bg-gradient-to-r from-blue-800 to-sky-600 text-transparent bg-clip-text'>Dream Job</span>
                    </h1>
                    <p className='w-8/12'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div>
                        <button className='pr-0 hover:pr-6 duration-500 py-3 bg-transparent border-b border-b-zinc-100 font-bold uppercase' type="button">Get Started</button>
                    </div>
                </div>
                <div className='flex justify-end pt-12'>
                    <img src="https://i.ibb.co/ydgF6ks/Male-headshot-we-DSC-1955.png" className=''  />
                </div>
            </div>
         <Categories></Categories>
         <Featured></Featured>
        </div>
        
    );
};

export default Home;