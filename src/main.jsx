import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from "./components/Main/MainLayout";
import Home from "./components/pages/Home";
import Statistics from "./components/pages/Statistics";
import AppliedJobs from "./components/pages/AppliedJobs";
import Blogs from "./components/pages/Blogs";
import JobDetails from "./components/pages/JobDetails";
import ErrorPage from "./components/pages/ErrorPage";
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
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
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={Route}></RouterProvider> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
