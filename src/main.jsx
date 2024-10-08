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
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
<<<<<<< HEAD
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/statistics",
            element: <Statistics></Statistics>,
            loader: ()=> fetch('jobs.json')
        },
        {
            path: "/applied-jobs",
            element: <AppliedJobs></AppliedJobs>,
            loader: ()=> fetch('jobs.json')
        },{
            path: "/blogs",
            element: <Blogs></Blogs>,
            loader: ()=> fetch('blogs.json')
        },
        {
            path: "/job/:id",
            element: <JobDetails></JobDetails>,
            loader: ()=> fetch('jobs.json')
        },
        
    ]
}
=======
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () =>
          fetch(
            "jobs.json"
          ),
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: () =>
          fetch(
            "jobs.json"
          ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("blogs.json"),
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: () =>
          fetch(
            "jobs.json"
          ),
      },
    ],
  },
>>>>>>> f1eac2f2a3ae00b079831f3cf3b832095d85434f
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
