const getStoredJobs = ()=>{
    const storedJobs = localStorage.getItem("job-application");
    if(storedJobs){
        return JSON.parse(storedJobs);
    }
    return [];
}

const savedJobs = id =>{
    const storedJobs = getStoredJobs();
    const exists = storedJobs?.find(jobId => jobId === id);
    if(!exists){
        storedJobs.push(id);
        localStorage.setItem("job-application", JSON.stringify(storedJobs));
    }
}


export {getStoredJobs, savedJobs}