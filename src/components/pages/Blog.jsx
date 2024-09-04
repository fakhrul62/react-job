import React from "react";

const Blog = ({ blog }) => {
  return (
    <div className="p-5 border border-zinc-700 rounded flex flex-col hover:bg-zinc-900">
      <img src={blog.image} className="w-full h-44 object-cover rounded" />
      <h2 className="text-white font-semibold text-lg mt-4 flex-grow">{blog.title}</h2>
      <div className="mt-5">
        <button
          className="px-4 py-2 hover:bg-black rounded border border-zinc-700"
          type="button"
        >
          <a href={blog.url} target="_blank">Read More</a>
        </button>
      </div>
    </div>
  );
};

export default Blog;
