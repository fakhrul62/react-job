import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Main/MainLayout";
import Home from "../components/pages/Home";
import Statistics from "../components/pages/Statistics";
import AppliedJobs from "../components/pages/AppliedJobs";
import Blogs from "../components/pages/Blogs";
import JobDetails from "../components/pages/JobDetails";
import ErrorPage from "../components/pages/ErrorPage";



const Route = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: ()=> fetch('/public/jobs.json')
            },
            {
                path: "/applied-jobs",
                element: <AppliedJobs></AppliedJobs>,
                loader: ()=> fetch('/public/jobs.json')
            },{
                path: "/blogs",
                element: <Blogs></Blogs>,
                loader: ()=> fetch('/public/blogs.json')
            },
            {
                path: "/job/:id",
                element: <JobDetails></JobDetails>,
                loader: ()=> fetch('/public/jobs.json')
            },
            
        ]
    }
])
export default Route;