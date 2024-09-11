import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Job from "./Job";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedjobs] = useState([]);
  const [displayJobs, setDisplayjobs] = useState([]);

  useEffect(()=>{
    const storedJobs = localStorage.getItem("job-application");
    const jobsApplied = jobs?.filter(job => storedJobs?.includes(job.id));
    setAppliedjobs(jobsApplied);
    setDisplayjobs(jobsApplied);
  }, []);

  const handleFilter = filter =>{
    if(filter === "All"){
        setDisplayjobs(appliedJobs);
    }
    else if(filter === "Remote"){
        const remoteJobs = appliedJobs?.filter(job => job.remote_or_onsite === "Remote");
        setDisplayjobs(remoteJobs);
    }
    else if(filter === "Onsite"){
        const onsite = appliedJobs?.filter(job => job.remote_or_onsite === "Onsite");
        setDisplayjobs(onsite);
    }
  }
  return (
    <div>
      <div className="text-center py-16 border-b border-b-zinc-700">
        <h2 className="text-2xl">Applied Jobs: <span className="text-blue-800 font-black">{appliedJobs.length}</span></h2>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="dropdown dropdown-bottom">
            <div tabIndex={0} role="button" className="bg-zinc-800 rounded px-6 py-2 m-1">Filter</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li onClick={()=> handleFilter("All")}><a>All</a></li>
                <li onClick={()=> handleFilter("Remote")}><a>Remote</a></li>
                <li onClick={()=> handleFilter("Onsite")}><a>Onsite</a></li>
            </ul>
        </div>
      </div>
      <div className="w-10/12 mx-auto py-12 grid grid-cols-2 gap-5 ">
      {
           displayJobs?.map((job, idx)=> <Job key={idx} job={job}></Job>)
        }
      </div>
    </div>
  );
};

export default AppliedJobs;
