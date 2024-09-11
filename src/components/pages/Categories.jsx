import React, { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data=> setCategories(data))
    }, []);
  return (
    <div className="py-20 w-10/12 mx-auto">
      <div className="text-center mb-5">
        <h2 className="font-bold text-3xl mb-2">Job Category List</h2>
        <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-10">
        {
            categories?.map((category, idx)=> <Category key={idx} category={category}></Category>)
        }
      </div>
    </div>
  );
};

export default Categories;
