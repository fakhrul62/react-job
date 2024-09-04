import React, { useEffect, useState } from "react";
import Job from "./Job";

const Featured = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data=> setJobs(data))
    }, []);
  return (
    <div className="py-20 w-10/12 mx-auto">
      <div className="text-center mb-5">
        <h2 className="font-bold text-3xl mb-2">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-10">
        {
           jobs.map((job, idx)=> <Job key={idx} job={job}></Job>)
        }
      </div>
    </div>
  );
};

export default Featured;
