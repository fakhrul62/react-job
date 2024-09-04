import { StrictMode } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./components/Main/MainLayout";
import Home from "./components/pages/Home";
import Statistics from "./components/pages/Statistics";
import AppliedJobs from "./components/pages/AppliedJobs";
import Blogs from "./components/pages/Blogs";
import JobDetails from "./components/pages/JobDetails";
import ErrorPage from "./components/pages/ErrorPage";
import './App.css'


const router = createBrowserRouter([
  {
    path: "/react-job/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: "/react-job/",
            element: <Home></Home>
        },
        {
            path: "/react-job/statistics",
            element: <Statistics></Statistics>,
            loader: ()=> fetch('../public/jobs.json')
        },
        {
            path: "/react-job/applied-jobs",
            element: <AppliedJobs></AppliedJobs>,
            loader: ()=> fetch('../public/jobs.json')
        },{
            path: "/react-job/blogs",
            element: <Blogs></Blogs>,
            loader: ()=> fetch('../public/blogs.json')
        },
        {
            path: "/react-job/job/:id",
            element: <JobDetails></JobDetails>,
            loader: ()=> fetch('../public/jobs.json')
        },
        
    ]
}
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
