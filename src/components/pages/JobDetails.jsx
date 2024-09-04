import { useLoaderData, useParams } from "react-router-dom";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { savedJobs } from "../../localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const strId = useParams();
  const id = parseInt(strId.id);
  const job = jobs.find((job) => job.id === id);
  const handleApply = () => {
    const storedJobs = localStorage.getItem("job-application");
    const storedJobsParse = JSON.parse(storedJobs);
    const exists = storedJobsParse?.find(jobId => jobId === id);
    if(!exists){
        toast.info("Job Applied Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          savedJobs(id);
    }
    else if(exists){
        toast.warn("Job Already Applied!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
    }
    
  };
  return (
    <div className="">
      <div className="text-center py-16 border-b border-b-zinc-700">
        <h2 className="text-2xl">Job Details</h2>
      </div>
      <div className="w-10/12 mx-auto py-12 grid grid-cols-[70%_30%] gap-5">
        <div className="flex flex-col gap-2">
          <p>
            <span className="font-bold">
              Job Description: <br />
            </span>{" "}
            {job.job_description}
          </p>
          <p>
            <span className="font-bold">
              Job Responsibility: <br />
            </span>{" "}
            {job.job_responsibility}
          </p>
          <p>
            <span className="font-bold">
              Educational Requirements: <br />
            </span>{" "}
            {job.educational_requirements}
          </p>
          <p>
            <span className="font-bold">
              Experience: <br />
            </span>{" "}
            {job.experiences}
          </p>
        </div>
        <div className="border border-zinc-700 rounded p-5">
          <h2 className="font-bold border-b border-b-zinc-700 pb-3 mb-3 text-lg">
            Job Details
          </h2>
          <h2>
            <span className="font-bold">Job Title:</span> {job.job_title}
          </h2>
          <h2>
            <span className="font-bold">Salary:</span> ${job.salary}K
          </h2>
          <h2 className="font-bold border-b border-b-zinc-700 pb-3 my-3 text-lg">
            Contact Information
          </h2>
          <h2>
            <span className="font-bold">Phone:</span>{" "}
            {job.contact_information.phone}
          </h2>
          <h2>
            <span className="font-bold">Email:</span>{" "}
            {job.contact_information.email}
          </h2>
          <h2>
            <span className="font-bold">Address:</span>{" "}
            {job.contact_information.address}
          </h2>
          <button
            onClick={handleApply}
            className="btn bg-zinc-200 text-black w-full mt-5 rounded hover:text-white hover:border hover:border-zinc-700"
            type="button"
          >
            Apply Now
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
