import React from "react";
import { useLoaderData } from "react-router-dom";
import Blog from "./Blog";

const Blogs = () => {
    const blogs = useLoaderData();
  return (
    <div className="w-10/12 mx-auto mb-20">
      <div className="text-center py-16 border-b border-b-zinc-700">
        <h2 className="text-2xl">
          Blogs: 
          <span className="text-blue-800 font-black">{blogs.length}</span>
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-10">
        {
           blogs?.map((blog, idx) => <Blog key={idx} blog={blog}></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;
